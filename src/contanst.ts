

export const listLinkType = [
  { key: "twitter", link: " https://twitter.com/HellmanResearch" },
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
/*
window.location.protocol + "//" + window.location.host + "/api/v1/" ||
window.location.protocol + "//" + window.location.host ||
*/
//export const defaultUrl =  process.env.REACT_APP_BASE_URL ||'http://39.101.77.40/api/v1/';
export const tokenUrl = process.env.REACT_APP_TOKEN_URL || `http://39.101.77.40`
export const defaultUrl ='/api/v1/'