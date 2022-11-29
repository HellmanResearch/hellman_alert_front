/** @format */

import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import { NavLink, useNavigate } from "react-router-dom";
import { defaultUrl, linkList, listLinkType } from "@/contanst";
import logo from "@/assets/images/logo.webp";
import { getSvg } from "@/svgTypes";
import Login from "../login";
import "./index.less";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { rootState } from "@/type";
import { loginSign } from "@/store/Server";
import editSvg from "@/assets/images/edit.svg";

export default () => {
  const login = JSON.parse(localStorage.getItem("login") || "{}").id;
  const navigate = useNavigate();
  const account = useSelector(
    (state: rootState) => state?.user.public_key,
    shallowEqual
  );
  useEffect(() => {
    if (!login) {
      // 链接钱包
      loginSign();
    }
  }, []);
  return (
    <Header className='ssv-header'>
      <div
        className='ssv-header-logo'
        onClick={() => {
          navigate("/metrics");
        }}>
        <img className='logo_img' src={logo} />
        <span className='logo_text'>
          HellmanAlert
          <span className='logo_text-test'>Beta</span>
        </span>
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
          if (item.type === "send") {
            return <a href={`mailto:${item.link}`}>{getSvg(item.key)}</a>;
          }
          return (
            <span
              key={item.key}
              onClick={() => {
                if (item.link) {
                  window.open(item.link);
                }
              }}>
              {getSvg(item.key)}
            </span>
          );
        })}
        {/* <img src={editSvg} alt='' /> */}
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
