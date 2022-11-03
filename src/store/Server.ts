import { defaultUrl } from "@/contanst";
import { getReq } from "@/server/axios";
import axios from "axios";
import { useDispatch } from "react-redux";

import Web3 from "web3";
import store from ".";

//const dispatch = useDispatch()

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
                    `${defaultUrl}users/users/login-signature?public_key=${public_key}&signature=${sign}`,
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