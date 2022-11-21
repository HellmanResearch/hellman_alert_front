/** @format */
import logo from "@/assets/images/logo.webp";
import { defaultUrl } from "@/contanst";
import { getSvg } from "@/svgTypes";
import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import "../style.less";
export default () => {
  const param = useParams();
  const [flag, setFlag] = useState("confirm_right");
  const [search] = useSearchParams();
  const name = search.get("name");
  const navigator = useNavigate();
  useEffect(() => {
    axios
      .post(`${defaultUrl}/alerting/alerts/${param.id}/confirm-via-sign`, {
        sign: param.sign && decodeURIComponent(param.sign),
      })
      .then((res) => {
        setFlag("confirm_right");
      })
      .catch((re) => {
        setFlag("confirm_error");
      });
  }, [param.id]);

  return (
    <div className='ssv-main confirm-body'>
      {getSvg(flag)}
      <h3 className='header-title'>
        {flag === "confirm_right"
          ? "Acknowledge successful"
          : "Acknowledge error"}
      </h3>
      <p className='p-label'>
        <span className='label'> ID:</span>
        <span>{param.id}</span>
      </p>
      {name && (
        <p className='p-label'>
          <span className='label'> Name:</span>
          <span>{decodeURIComponent(name)}</span>
        </p>
      )}

      <Button
        className='default-btn'
        onClick={() => {
          navigator("/alerts");
        }}>
        Go to list of alerts
      </Button>
    </div>
  );

  //   return (
  //     <div className='ssv-main'>
  //       <div className='ssv-main-header'>
  //         <h3 className='title'>Email</h3>
  //       </div>
  //       <div className='email-content'>
  //         <div className='header-content'>
  //           <span className='email_logo'>
  //             <img className='logo_img' src={logo} />
  //           </span>
  //           <h3 className='title'>Hellman Alert</h3>
  //         </div>
  //         <div className='email-body'>
  //           {["ID"].map((title) => {
  //             return (
  //               <div className='item'>
  //                 <span className='label'>{title}:</span>
  //                 <span>{param[title]}</span>
  //               </div>
  //             );
  //           })}
  //           {/* <Button className='default-btn email-btn' onClick={handleClick}>
  //             confirm
  //           </Button> */}
  //         </div>
  //       </div>
  //     </div>
  //   );
};
