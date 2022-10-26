/** @format */
import logo from "@/assets/images/logo.webp";
import { linkList, listLinkType } from "@/contanst";
import { getSvg } from "@/svgTypes";
import { NavLink } from "react-router-dom";
import "./index.less";
export default () => {
  return (
    <div className='ssv-footer'>
      <div className='ssv-footer-left'>
        <div className='ssv-footer-logo'>
          <img className='logo_img' src={logo} />
          <span className='logo_text'>HellmanAlert</span>
        </div>
        <div className='ssv-footer-icons'>
          {listLinkType.map((item) => {
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
