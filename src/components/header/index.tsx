/** @format */

import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import { NavLink } from "react-router-dom";
import { defaultUrl, linkList, listLinkType } from "@/contanst";
import logo from "@/assets/images/logo.webp";
import { getSvg } from "@/svgTypes";
import Login from "../login";
import "./index.less";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { rootState } from "@/type";
import axios from "axios";
import Web3 from "web3";

const web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);
export default () => {
  const login = localStorage.getItem("login");
  const account = useSelector(
    (state: rootState) => state?.user.account,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (login) {
      // 链接钱包
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (res: any) => {
          axios
            .get(
              `${defaultUrl}users/users/signature-content?public_key=${res[0]}`
            )
            .then(async (response) => {
              console.log("====45", response);
              const from = res[0];
              const sign = await web3.eth.personal.sign(
                response.data.signature_content,
                from,
                "test password!"
              );
              console.log("==sign==3", sign, JSON.stringify(sign));

              //login
              if (sign) {
                axios
                  .get(
                    `${defaultUrl}users/users/login-signature?public_key=${res[0]}&signature=${sign}`
                  )
                  .then((result) => {
                    console.log("===========34653", response);
                  });
              }
            });
          dispatch({
            type: "user/login",
            payload: {
              account: res[0],
            },
          });
        });
    }
  }, []);
  return (
    <Header className='ssv-header'>
      <div className='ssv-header-logo'>
        <img className='logo_img' src={logo} />
        <span className='logo_text'>HellmanAlert</span>
      </div>
      <div className='ssv-header-router'>
        {Object.keys(linkList).map((item: string) => {
          return (
            <NavLink to={linkList[item]} key={item}>
              {({ isActive }) => (
                <div className='link-item'>
                  <span>{item}</span>
                  {isActive && <span className='active-icon'></span>}
                </div>
              )}
            </NavLink>
          );
        })}
      </div>
      <div className='ssv-header-icons'>
        {listLinkType.map((item) => {
          return <span key={item.key}>{getSvg(item.key)}</span>;
        })}
      </div>
      {login ? (
        <div className='wallet-logged default-border'>
          <span className='icon'>{getSvg("wallect_Metamask")}</span>
          <span className='text'>{`${String(account).slice(0, 6)}...${String(
            account
          ).slice(-4)}`}</span>
        </div>
      ) : (
        <Login />
      )}
    </Header>
  );
};
