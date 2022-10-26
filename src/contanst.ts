

export const listLinkType = [
  { key: "twitter", link: "" },
  { key: "githup", link: "" },
  { key: "discode", link: "" },
];

export const linkList: Record<string, string> = {
  //Dashboard: "/dashboard",
  Metrics: "metrics",
  Subscribe: "subscribe",
  Alerts: "alerts",
};
export const defaultUrl = process.env.REACT_APP_BASE_URL||'http://192.168.1.128:82/api/v1/';
export const tokenUrl =process.env.REACT_APP_TOKEN_URL ||`http://192.168.1.128:82`