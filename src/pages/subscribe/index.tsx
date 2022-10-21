/** @format */

import { getSvg } from "@/svgTypes";
import { METRICITEM, METRIGROUPCITEM } from "@/type";
import { metric_groups } from "@/varible";
import { useEffect, useState } from "react";
import { defaultUrl } from "@/contanst";
import axios from "axios";
import Action from "../action";
import "./index.less";
import Detail from "./Detail";
import React from "react";
import { Button, Input } from "antd";
import { isKeyObject } from "util/types";
import { useParams } from "react-router";
export default React.memo(() => {
  const [groups, setGroups] = useState([]);
  const [detail, setDetail] = useState<{
    show: boolean;
    detail?: Record<string, string>;
  }>({
    show: false,
  });
  const [inputValue, setInputValue] = useState("");
  const params = useParams();
  const [showCard, setShowCard] = useState("conditions");
  console.log("=params===2", params);
  const [subscribeData, setSubscribeDate] = useState<Record<string, any>>({});
  const login = localStorage.getItem("login");

  useEffect(() => {
    if (params.id) {
      axios
        .get(`${defaultUrl}alerting/subscribes/${params.id}`)
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
            conditions,
            name,
            metric,
            user,
          };
          setInputValue(name);
          setSubscribeDate(data);
        });
    }

    axios.get(`${defaultUrl}engine/metric-groups`).then((res) => {
      setGroups(res.data);
      // setDetail({ show: true, detail: res.data[0].metrics[0] });
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
        break;
      case "action":
        const key = Object.keys(value)[0];
        const actionObj = {
          notification_type: key,
          notification_address: value[key],
        };
        setSubscribeDate({ ...subscribeData, ...actionObj });
        break;
      default:
        break;
    }
    setDetail({ show: false, detail: undefined });
  };

  const handleCreate = () => {
    const payload = {
      ...subscribeData,
      name: inputValue,
      user: 0,
    };
    axios
      .post(`${defaultUrl}alerting/subscribes`, { ...payload })
      .then((res) => {
        console.log("========345436", res);
      });
  };

  const handleClick = (item: any) => {
    setDetail({ show: true, detail: item });
  };

  const handleClickCard = (value: string) => {
    setShowCard(value);
  };

  console.log("====435", subscribeData);
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
                          {getSvg("addIcon")}
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
          onClick={() => handleClickCard("conditions")}>
          <h3 className='title-text'>
            {(subscribeData?.conditions?.showText &&
              subscribeData.conditions.showText[0]) ||
              "Metrics"}
          </h3>
          <span
            className='title-detail'
            dangerouslySetInnerHTML={{
              __html:
                (subscribeData?.conditions?.showText &&
                  subscribeData?.conditions?.showText[1]) ||
                "",
            }}></span>
          <span className='card-icons'>{getSvg("right_arrow")}</span>
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
            dataSource={(subscribeData && subscribeData?.conditions) || {}}
          />
        ) : (
          <>
            <h3 className='title'> Action</h3>
            <div
              className='ssv-subscribe-card'
              onClick={() => handleClickCard("action")}>
              <h3 className='title-text'>
                {subscribeData?.notification_type || "Action"}
              </h3>
              <span className='title-detail'>
                Send {subscribeData?.notification_type} to
                <span style={{ marginLeft: 6, color: "#1ba5f8" }}>
                  {subscribeData?.notification_address || ""}
                </span>
              </span>
              <span className='card-icons'>{getSvg("right_arrow")}</span>
            </div>
          </>
        )}
      </div>

      <Input
        value={inputValue}
        className='subscribe-label'
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='User Defined Label'
      />
      <Button className='default-btn subscribe-btn' onClick={handleCreate}>
        Create
      </Button>
    </div>
  );
});
