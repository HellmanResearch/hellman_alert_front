/** @format */

import { defaultUrl } from "@/contanst";
import { getReq } from "@/server/axios";
import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const columns = [
  { title: "metric", dataIndex: "metric" },
  { title: "prom_alert_id", dataIndex: "prom_alert_id" },
  { title: "confirmed", dataIndex: "confirmed" },
  { title: "subscribe", dataIndex: "subscribe" },
  { title: "user", dataIndex: "user" },
  { title: "create_time", dataIndex: "create_time" },
  { title: "confirm_time", dataIndex: "confirm_time" },
];

export default () => {
  const [alertsData, setAlerts] = useState([]);
  useEffect(() => {
    const payload = {
      page: 1,
    };
    getReq(`${defaultUrl}alerting/alerts`, {
      withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
    }).then((res: any) => {
      console.log("=====3", res);
      setAlerts(res.data);
    });
  }, []);

  return <Table dataSource={alertsData} />;
};
