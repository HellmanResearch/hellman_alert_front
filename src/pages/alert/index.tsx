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
    getReq(`${defaultUrl}alerting/alerts`).then((res: any) => {
      setAlerts(res.data);
    });
  }, []);

  return <Table dataSource={alertsData} />;
};
