

export const listLinkType = [
  { key: "twitter", link: "" },
  { key: "githup", link: "https://github.com/HellmanResearch/ssv-front" },
  { key: "discode", link: "" },
];

export const linkList: Record<string, string> = {
  //Dashboard: "/dashboard",
  Metrics: "metrics",
  Subscribe: "subscribe",
  Alerts: "alerts",
};

export const page_size = 5;
export const defaultUrl = process.env.REACT_APP_BASE_URL||'http://192.168.1.128:82/api/v1/';
export const tokenUrl =process.env.REACT_APP_TOKEN_URL ||`http://192.168.1.128:82`