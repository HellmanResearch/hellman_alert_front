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
    console.log("=====234", type, value);
    switch (type) {
      case "conditions":
        setSubscribeDate({ ...subscribeData, conditions: value });
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
      metric: 0,
      user: 0,
    };
    axios
      .post(`${defaultUrl}alerting/subscribes`, { ...payload })
      .then((res) => {
        console.log("========345436", res);
      });
  };

  const handleClick = (item: any) => {
    console.log("----3", item);
    setDetail({ show: true, detail: item });
  };

  const content = `When the balance of <span style=color:#1BA5F8>0xccf5...fc3e</span>  is <span style=color:#1BA5F8>below 20 USD</span>`;
  return (
    <div className='ssv-subscribe'>
      <h3 className='title'>Subscription</h3>
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
                        onClick={() => handleClick(value)}>
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
      <Detail
        data={detail}
        onChange={handleChange}
        dataSource={(subscribeData && subscribeData?.conditions) || {}}
      />
      <Action
        onChange={handleChange}
        dataSource={(subscribeData && subscribeData?.conditions) || {}}
      />
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
