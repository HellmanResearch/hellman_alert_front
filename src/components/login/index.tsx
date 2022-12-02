/** @format */

import { loginSign } from "@/store/Server";
import { getSvg } from "@/svgTypes";
import { Button, Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./index.less";

export default () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    // 链接钱包
    if (!window.ethereum) {
      //未下载钱包 下载钱包 链接钱包
      window.open(`https://metamask.io/`);
    } else {
      // 链接钱包
      window?.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res: any) => {
          loginSign(res[0]).then((res: any) => {
            dispatch({ type: "user/login", payload: res.data });
          });
          setShow(false);
        });
    }
  };
  return (
    <>
      <Button
        className='ssv-header-login default-btn'
        onClick={() => {
          setShow(true);
        }}>
        Login
      </Button>
      <Modal
        title=''
        open={show}
        wrapClassName={"login-wallect"}
        footer={null}
        onCancel={() => {
          setShow(false);
        }}>
        <p className='login-wallect-title'>Connect your wallet</p>
        <p className='login-wallect-text'>
          Connect your wallet to create the notifications
        </p>
        <Button
          className='default-btn wallect-btn header-wallect-btn'
          onClick={handleClick}>
          <span className='wallect-name'>Metamask</span>
          <span className='wallect-icon'>{getSvg("wallect_Metamask")}</span>
        </Button>
      </Modal>
    </>
  );
};
