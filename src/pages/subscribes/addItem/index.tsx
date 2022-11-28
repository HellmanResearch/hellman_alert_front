/** @format */

import { getSvg } from "@/svgTypes";
import { METRICITEM, METRIGROUPCITEM, userState, rootState } from "@/type";
import { useEffect, useState } from "react";
import { defaultUrl } from "@/contanst";
import axios from "axios";
import Action from "../../action";
import "./index.less";
import Detail from "./Detail";
import React from "react";
import { Button, Input, notification } from "antd";
import { useNavigate, useParams } from "react-router";
import { shallowEqual, useSelector } from "react-redux";
import { setStrUpLower } from "@/pages/Utils";
export default React.memo(() => {
  const [groups, setGroups] = useState([]);
  const [detail, setDetail] = useState<{
    show: boolean;
    detail?: Record<string, any>;
  }>({
    show: false,
  });
  const [inputValue, setInputValue] = useState("");
  const params = useParams();
  const [showCard, setShowCard] = useState("conditions");
  const [subscribeData, setSubscribeDate] = useState<Record<string, any>>({});
  const Navigate = useNavigate();
  const userInfo: userState = useSelector(
    (state: rootState) => state.user,
    shallowEqual
  );

  useEffect(() => {
    if (params.sign && params.subscribeId) {
      axios
        .post(
          `${defaultUrl}/alerting/alerts/${params.subscribeId}/confirm-via-sign`,
          {
            sign: params.sign && decodeURIComponent(params.sign),
          }
        )
        .then(() => {
          load();
        })
        .catch(() => {
          load();
        });
    }
  }, [params.sign]);

  const load = () => {
    axios
      .get(`${defaultUrl}alerting/subscribes/${params.subscribeId}`)
      .then((res: any) => {
        const {
          notification_type,
          metric,
          user,
          name,
          notification_address,
          conditions,
        } = res.data;
        const data = {
          action: {
            [notification_type]: notification_address,
          },
          notification_type,
          notification_address,
          conditions,
          name,
          metric,
          user,
        };
        setInputValue(name);
        setSubscribeDate(data);
        setShowCard("all");
      });
  };

  useEffect(() => {
    if (params.subscribeId && !params.sign) {
      load();
    }
  }, [params.subscribeId, params.sign]);

  useEffect(() => {
    axios.get(`${defaultUrl}engine/metric-groups`).then((res) => {
      setGroups(res.data.results);
    });
  }, []);

  const handleChange = (type: string, value: Record<string, any>) => {
    switch (type) {
      case "conditions":
        setSubscribeDate({
          ...subscribeData,
          metric: value.metricId,
          conditions: value,
        });
        setShowCard(subscribeData?.notification_address ? "all" : "action");
        break;
      case "action":
        const key = Object.keys(value)[0];
        const actionObj = {
          notification_type: key,
          notification_address: value[key],
        };
        setSubscribeDate({ ...subscribeData, ...actionObj });
        setShowCard(subscribeData?.conditions?.metricId ? "all" : "conditions");

        break;
      default:
        break;
    }
    setDetail({ show: false, detail: undefined });
  };

  const handleCreate = () => {
    const payload: any = {
      ...subscribeData,
      name: inputValue,
      user: userInfo.id,
    };
    if (params.subscribeId) {
      axios
        .put(`${defaultUrl}alerting/subscribes/${params.subscribeId}`, {
          ...payload,
        })
        .then((res) => {
          Navigate("/subscribe");
        })
        .catch((res) => {
          if (res.response.data) {
            notification.open({
              message: "Network error",
              description: `${
                res.response.data[Object.keys(res.response.data)[0]]
              }`,
            });
          }
        });
    } else {
      axios
        .post(`${defaultUrl}alerting/subscribes`, { ...payload })
        .then((res) => {
          Navigate("/subscribe");
        })
        .catch((res) => {
          if (res.response.data) {
            if (Object.keys(res.response.data).length > 1) {
              let showContent = "";
              Object.keys(res.response.data).forEach((v) => {
                showContent =
                  showContent.length > 0
                    ? showContent + `<br />${v}:${res.response.data[v][0]}`
                    : `${v}:${res.response.data[v][0]}`;
              });

              notification.open({
                message: "Network error",
                description: (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: showContent,
                    }}
                  />
                ),
              });
            } else if (Object.keys(res.response.data).length === 1) {
              notification.open({
                message: "Network error",
                description: `${
                  res.response.data[Object.keys(res.response.data)[0]]
                }`,
              });
            }
          }
        });
    }
  };

  const handleClick = (item: any) => {
    setDetail({ show: true, detail: item });
  };

  const handleClickCard = (value: string) => {
    setShowCard(value);
  };

  return (
    <div className='ssv-subscribe'>
      <h3 className='title'>Subscription</h3>
      {showCard === "conditions" ? (
        <div className='ssv-subscribe-card'>
          <h3 className='title'>Choose a Metric</h3>
          <div className='ssv-subscribe-card-item'>
            {groups.map((item: METRIGROUPCITEM, index: number) => {
              return (
                <div className='metric_groups' key={index}>
                  <div className='metric_groups_header'>
                    {getSvg("metric_logo")}
                    <span className='name'>{item.name}</span>
                  </div>

                  <div className='metric_groups_content'>
                    {item.metrics.map((value: METRICITEM, index: number) => {
                      return (
                        <div
                          className='token-item'
                          key={index}
                          onClick={() =>
                            handleClick({ ...value, groupId: item.id })
                          }>
                          <span>{value.display}</span>
                          {/* {getSvg("addIcon")} */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div
          className='ssv-subscribe-card'
          onClick={() => {
            setSubscribeDate({ ...subscribeData, conditions: {} });
            handleClickCard("conditions");
          }}>
          <h3 className='title-text'>
            {subscribeData?.conditions?.displayName}
          </h3>
          {!subscribeData?.conditions?.showHtml && (
            <div>
              <h3 className='title'>Choose a Metric</h3>
              <span className='card-icons add-icons'>
                <span className='text'>+</span>
              </span>
            </div>
          )}
          <span
            className='title-detail'
            dangerouslySetInnerHTML={{
              __html: subscribeData?.conditions?.showHtml || "",
            }}></span>
          {subscribeData?.conditions?.showHtml && (
            <span className='card-icons'>{getSvg("right_arrow")}</span>
          )}
        </div>
      )}

      <Detail
        data={detail}
        onChange={handleChange}
        dataSource={(subscribeData && subscribeData?.conditions) || {}}
      />
      <div onClick={() => handleClickCard("action")}>
        {showCard === "action" ? (
          <Action
            onChange={handleChange}
            dataSource={(subscribeData && subscribeData?.action) || {}}
          />
        ) : (
          <>
            <h3 className='title'>Notification</h3>
            <div
              className='ssv-subscribe-card'
              onClick={() => handleClickCard("action")}>
              <h3 className='title-text'>
                {setStrUpLower(subscribeData["notification_type"])}
              </h3>
              {!subscribeData?.notification_type && (
                <div>
                  <h3 className='title'>Email/Discord/Wehook</h3>
                  <span className='card-icons add-icons'>
                    <span className='text'>+</span>
                  </span>
                </div>
              )}
              {subscribeData?.notification_type && (
                <span className='title-detail'>
                  Send {subscribeData?.notification_type} notifications to
                  <span style={{ marginLeft: 6, color: "#1ba5f8" }}>
                    {subscribeData?.notification_address || ""}
                  </span>
                </span>
              )}
              {subscribeData?.notification_address && (
                <span className='card-icons'>{getSvg("right_arrow")}</span>
              )}
            </div>
          </>
        )}
      </div>

      <Input
        value={inputValue}
        className='subscribe-label'
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Alert Nickname'
      />
      <Button className='default-btn subscribe-btn' onClick={handleCreate}>
        {params.subscribeId ? "Save" : "Create"}
      </Button>
      <Button
        className='subscribe-btn brack-btn'
        onClick={() => {
          Navigate(-1);
        }}>
        Return
      </Button>
    </div>
  );
});
