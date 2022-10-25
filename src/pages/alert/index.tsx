/** @format */

import { defaultUrl } from "@/contanst";
import { getReq } from "@/server/axios";
import { useEffect, useState } from "react";
import "./index.less";
import moment from "moment";
import { Input } from "antd";

const columns = [
  { title: "metric", dataIndex: "metric", width: "10%" },
  { title: "prom_alert_id", dataIndex: "prom_alert_id", width: "20%" },
  { title: "confirmed", dataIndex: "confirmed", width: "10%" },
  { title: "subscribe", dataIndex: "subscribe", width: "10%" },
  { title: "user", dataIndex: "user", width: "10%" },
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
];

const { Search } = Input;

export default () => {
  const [alertsData, setAlerts] = useState([]);
  const [search, setSearch] = useState("");

  const load = () => {
    const payload = {
      search,
    };

    getReq(`${defaultUrl}alerting/alerts`, payload).then((res: any) => {
      setAlerts(res.data);
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
        <h3 className='title'>Alert</h3>
        <Input.Search
          placeholder='input search text'
          onChange={onSearch}
          onSearch={load}
          className='alert-search'
          style={{ width: 400 }}
        />
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
                {columns.map((item) => {
                  const children = item.render
                    ? item.render(itemData[item.dataIndex], itemData)
                    : String(itemData[item.dataIndex]);
                  return (
                    <span style={{ width: item.width }} key={item.dataIndex}>
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
