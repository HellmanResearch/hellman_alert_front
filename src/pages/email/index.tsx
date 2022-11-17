/** @format */
import logo from "@/assets/images/logo.webp";
import { Button } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import "../style.less";
export default () => {
  const param = useParams();

  //     useEffect(() => {

  //         axios.

  //   },[param.ID]);

  return (
    <div className='ssv-main'>
      <div className='ssv-main-header'>
        <h3 className='title'>Email</h3>
      </div>
      <div className='email-content'>
        <div className='header-content'>
          <span className='email_logo'>
            <img className='logo_img' src={logo} />
          </span>
          <h3 className='title'>Hellman Alert</h3>
        </div>
        <div className='email-body'>
          {["ID"].map((title) => {
            return (
              <div className='item'>
                <span className='label'>{title}:</span>
                <span>{param[title]}</span>
              </div>
            );
          })}
          {/* <Button className='default-btn email-btn' onClick={handleClick}>
            confirm
          </Button> */}
        </div>
      </div>
    </div>
  );
};
