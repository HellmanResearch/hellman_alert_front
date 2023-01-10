/** @format */

import { Header } from "antd/lib/layout/layout";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, Popover, Modal, Tooltip, Button } from "antd";
import { FileTextOutlined, ApiOutlined } from "@ant-design/icons";
import { defaultUrl, linkList, listLinkType } from "@/contanst";
import logo from "@/assets/images/logo.webp";
import { getSvg } from "@/svgTypes";
import Login from "../login";
import "./index.less";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { rootState } from "@/type";
import { loginSign } from "@/store/Server";
import editPng from "@/assets/images/edit.png";
import { DatePicker } from "antd";
import axios from "axios";
const { RangePicker } = DatePicker;

export default () => {
  const login = JSON.parse(localStorage.getItem("login") || "{}").id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("");
  const account = useSelector(
    (state: rootState) => state?.user.public_key,
    shallowEqual
  );
  useEffect(() => {
    if (!login) {
      // 链接钱包
      //loginSign();
    }
  }, []);

  const handleOut = () => {
    const data = JSON.parse(localStorage.getItem("login") || "");
    axios
      .post(`${defaultUrl}users/users/logout`, {
        ...data,
      })
      .then((res) => {
        //退出登录
        dispatch({
          type: "user/login",
          payload: { cancel: true },
        });
      });
  };
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
        {}
        <Tooltip title='Feedback'>
          <img
            src={editPng}
            alt=''
            style={{ width: 22, marginTop: -7 }}
            onClick={() => {
              window.open("https://forms.gle/fjFWvnYFVqf1TQ7s9");
            }}
          />
        </Tooltip>
        <Tooltip title='Documentation'>
          <FileTextOutlined
            style={{ fontSize: 22, color: "#fff", marginTop: -7 }}
            onClick={() => {
              window.open("/docs");
            }}
          />
        </Tooltip>
        <Tooltip title='API Swagger'>
          <ApiOutlined
            style={{ fontSize: 22, color: "#fff", marginTop: -7 }}
            onClick={() => {
              window.open("/swagger/");
            }}
          />
        </Tooltip>
      </div>
      {login ? (
        <div
          className='wallet-logged default-border'
          onClick={() => {
            setShow(true);
            axios.get(`${defaultUrl}users/users/token`).then((res) => {
              setToken(res.data?.token || "");
            });
          }}>
          <span className='icon'>{getSvg("wallect_Metamask")}</span>
          <span className='text'>{`${String(account).slice(0, 6)}...${String(
            account
          ).slice(-4)}`}</span>
        </div>
      ) : (
        <Login />
      )}
      <Modal
        open={show}
        title=''
        wrapClassName='ssv-modal'
        onCancel={() => setShow(false)}
        footer={null}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <p className='title' style={{ color: "#fff" }}>
            API Token:
            <span style={{ marginLeft: 10 }}>{token}</span>
          </p>
          <Button
            className='default-btn'
            style={{ marginTop: 20 }}
            onClick={handleOut}>
            Logout
          </Button>
        </div>
      </Modal>
    </Header>
  );
};
