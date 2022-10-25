import { defaultUrl } from "@/contanst";
import { getReq } from "@/server/axios";
import axios from "axios";

import Web3 from "web3";

const web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);

export const loginSign = (public_key:string) => {
    return new Promise((resove, reject) => { 
          axios.get(
              `${defaultUrl}users/users/signature-content?public_key=${public_key}`,
              {
                            withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
                        }
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
                    `${defaultUrl}users/users/login-signature?public_key=${public_key}&signature=${sign}`,
                    {
                            withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
                        }
                  )
                    .then((result) => {
                    resove(result)
                  });
              }
            });

    })

 }