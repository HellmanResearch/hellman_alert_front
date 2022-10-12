/** @format */

import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import { NavLink } from "react-router-dom";
import { linkList } from "../../contanst";
import "./index.less";

export default () => {
  return (
    <Header className='layout-header'>
      <div>HellmanAlert</div>
      <div className='layout-header-router'>
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
      <div>
        <Button className='default-btn'>Login</Button>
      </div>
    </Header>
  );
};
