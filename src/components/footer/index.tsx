/** @format */
import logo from "@/assets/images/logo.webp";
import { linkList, listLinkType } from "@/contanst";
import { getSvg } from "@/svgTypes";
import { FileTextOutlined, ApiOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.less";
import editPng from "@/assets/images/edit.png";

export default () => {
  const navigate = useNavigate();
  return (
    <div className='ssv-footer'>
      <div className='ssv-footer-left'>
        <div
          className='ssv-footer-logo'
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open("https://ssv.network/");
            // navigate("/metrics");
          }}>
          <span className='logo_img'>{getSvg("ssv_svg")}</span>
          {/* <img className='logo_img' src={logo} /> */}
          <span className='logo_text'>Powered by ssv.network</span>
        </div>
        {/* <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open("https://ssv.network/");
          }}>
          <span className='logo_text' style={{ fontSize: 14 }}>
            Powered by ssv.network
          </span>
        </div> */}
        <div className='ssv-footer-icons'>
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
          <img
            src={editPng}
            alt=''
            style={{ width: 22, marginTop: -7 }}
            onClick={() => {
              window.open("https://forms.gle/fjFWvnYFVqf1TQ7s9");
            }}
          />
          <FileTextOutlined
            style={{ fontSize: 22, color: "#fff", marginTop: -7 }}
            onClick={() => {
              window.open("/docs");
            }}
          />
          <ApiOutlined
            style={{ fontSize: 22, color: "#fff", marginTop: -7 }}
            onClick={() => {
              window.open("/swagger/");
            }}
          />
        </div>
      </div>
      <div className='ssv-footer-right'>
        <div className='ssv-footer-router'>
          {Object.keys(linkList).map((item: string) => {
            return (
              <NavLink to={linkList[item]} key={item}>
                {item}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
