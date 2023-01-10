
export const listLinkType = [
  { key: "twitter", link: "https://twitter.com/HellmanResearch" },
  { key: "githup", link: "https://github.com/HellmanResearch" },
  { key: "email", link: "HellmanResearch@outlook.com",type:'send' },
];



export const linkList: Record<string, string> = {
  //Dashboard: "/dashboard",
  Metrics: "metrics",
  Subscriptions: "subscribe",
  Triggered: "alerts",
};

export const page_size = 5;
/*
window.location.protocol + "//" + window.location.host + "/api/v1/" ||
window.location.protocol + "//" + window.location.host ||
*/

//  export const defaultUrl = 'http://39.101.77.40/api/v1/';
// export const tokenUrl = 'http://39.101.77.40/api/v1/'

  export const tokenUrl =window.location.protocol + "//" + window.location.host || `http://39.101.77.40`
  export const defaultUrl = window.location.protocol + "//" + window.location.host + "/api/v1/" ;
