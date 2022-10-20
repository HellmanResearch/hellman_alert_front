/** @format */

import { defaultUrl } from "@/contanst";
import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
  const [alertsData, setAlerts] = useState([]);
  useEffect(() => {
    axios.get(`${defaultUrl}alerting/alerts`).then((res) => {
      setAlerts(res.data);
    });
  }, []);

  return <div>alert</div>;
};
