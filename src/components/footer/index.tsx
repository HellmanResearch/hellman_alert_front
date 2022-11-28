/** @format */
import logo from "@/assets/images/logo.webp";
import { linkList, listLinkType } from "@/contanst";
import { getSvg } from "@/svgTypes";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.less";
export default () => {
  const navigate = useNavigate();
  return (
    <div className='ssv-footer'>
      <div className='ssv-footer-left'>
        <div
          className='ssv-footer-logo'
          onClick={() => {
            navigate("/metrics");
          }}>
          <img className='logo_img' src={logo} />
          <span className='logo_text'>HellmanAlert</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open("https://ssv.network/");
          }}>
          <span className='logo_img' style={{ width: 25, marginLeft: 60 }}>
            {getSvg("ssv_svg")}
          </span>
          <span className='logo_text' style={{ fontSize: 14 }}>
            Powered by ssv.network
          </span>
        </div>
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
