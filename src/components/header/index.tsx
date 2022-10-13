/** @format */

import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import { NavLink } from "react-router-dom";
import { linkList, listLinkType } from "@/contanst";
import logo from "@/assets/images/logo.webp";
import { getSvg } from "@/svgTypes";
import Login from "../login";
import "./index.less";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { rootState } from "@/store/type";

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
        .then((res: any) => {
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
        <div className='wallet-logged'>
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
