import { defaultUrl } from "@/contanst";
import { message,notification } from "antd";
import axios, { AxiosRequestConfig } from "axios";

import Web3 from "web3";
import store from ".";


axios.interceptors.response.use(
  (response) => {
    if (response.status > 299) {
      // Message.warning('接口调用失败');
      throw new Error(response.data?.err_msg || '接口错误');
    }
    return response;
  },
  (err) => {
    if (err.response?.status == 401) {
      message.warning('无权限访问资源');
    } else if (err.response?.status == 403) {
      message.warning('登录过期, 请重新登录');
      setTimeout(() => {
        location.href = '/login';
      }, 2000);
    } else {
      notification.error({
        message: '网络请求错误',
        description: `${err.response?.data?.message || err.response?.data || err}`,
      });
    }
    return Promise.reject(err);
  }
);



const web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);

export const loginSign = (public_key?: string) => {
    if (public_key) { 
        return new Promise((resove,reject) => { 
             axios.get(
              `${defaultUrl}users/users/signature-content?public_key=${public_key}`,
            )
              .then(async (response:any) => {
              const sign = await web3.eth.personal.sign(
                response.data.signature_content,
                public_key,
                "test password!"
              );
              //login
              if (sign) {
                axios.get(
                  `${defaultUrl}users/users/login-signature?public_key=${public_key}&signature=${sign}`, {
                    headers: {
                      'Cookie':'sessionid=g2kgiwg46urlojurpicv99p2rnx8wnse'
                    }
                  }
                  )
                    .then((result) => {
                        resove(result)
                        store.dispatch({ type: "user/login", payload: result.data });
                  });
              }
            });
        })
    }
    
    return new Promise((resove, reject) => { 
        window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (res: any) => {
            const public_key = res[0];
            axios.get(
              `${defaultUrl}users/users/signature-content?public_key=${public_key}`,
            )
              .then(async (response: any) => {
              const sign = await web3.eth.personal.sign(
                response.data.signature_content,
                public_key,
                "test password!"
              );
              //login
                if (sign) {
                axios.get(
                  `${defaultUrl}users/users/login-signature?public_key=${public_key}&signature=${sign}`,
                  
                  )
                    .then((result) => {
                        resove(result)
                        store.dispatch({ type: "user/login", payload: result.data });
                  });
              }
            });

        })
    });

 }