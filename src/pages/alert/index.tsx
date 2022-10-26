/** @format */

import { defaultUrl } from "@/contanst";
import { getReq } from "@/server/axios";
import { useEffect, useState } from "react";
import "../style.less";
import moment from "moment";
import { Button, Input } from "antd";

const columns = [
  { title: "metric", dataIndex: "metric", width: "10%" },
  { title: "subscribe", dataIndex: "subscribe", width: "10%" },
  {
    title: "create_time",
    dataIndex: "create_time",
    width: "20%",
    render: (text: string, record?: any) =>
      moment(text).format("YYYY-MM-DD hh:mm:ss"),
  },
  {
    title: "confirm_time",
    dataIndex: "confirm_time",
    width: "20%",
    render: (text: string, record?: any) =>
      moment(text).format("YYYY-MM-DD hh:mm:ss"),
  },
  {
    title: "",
    dataIndex: "confirmed",
    width: "40%",
    aligin: "right",
    render: (text: string, record: any) => {
      const showText = text ? "Confirmed" : "Confirm";
      return (
        <div className='edit-btn default-border' style={{ textAlign: "right" }}>
          <span className='text'>{showText}</span>
        </div>
      );
    },
  },
];

const { Search } = Input;

export default () => {
  const [alertsData, setAlerts] = useState([]);
  const [search, setSearch] = useState("");

  const load = () => {
    // const payload = {
    //   search,
    // };

    getReq(`${defaultUrl}alerting/alerts`).then((res: any) => {
      setAlerts(res?.data?.results);
    });
  };
  useEffect(() => {
    load();
  }, []);

  const onSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className='ssv-main'>
      <div className='ssv-main-header'>
        <h3 className='title'>Triggered Alerts</h3>
        <Button className='default-btn add-btn' onClick={() => {}}>
          Confirm All
        </Button>
        {/* <Input.Search
          placeholder='input search text'
          onChange={onSearch}
          onSearch={load}
          className='alert-search'
          style={{ width: 400 }}
        /> */}
      </div>
      <div className='ssv-main-content'>
        <ul className='header'>
          {columns.map((item, key) => {
            return (
              <li
                key={key}
                style={{ width: item.width }}
                className='header-item'>
                {item.title}
              </li>
            );
          })}
        </ul>
        <ul className='data-content'>
          {alertsData.map((itemData, index) => {
            return (
              <li key={index} className='data-content-item'>
                {columns.map((item: any) => {
                  const children = item.render
                    ? item.render(itemData[item.dataIndex], itemData)
                    : String(itemData[item.dataIndex]);
                  return (
                    <span
                      style={{
                        width: item.width,
                        textAlign: item.aligin || "left",
                      }}
                      key={item.dataIndex}>
                      {children}
                    </span>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
