/** @format */

import { getSvg } from "@/svgTypes";
import { useState } from "react";
import Detail from "./Detail";
import "./index.less";

const listAction = [
  {
    title: "Discord",
    text: "Post a message to Discord",
    icon: getSvg("discode_bg"),
  },
  {
    title: "Email",
    text: "Send email Subject to Recipients",
    icon: getSvg("email_bg"),
  },
  {
    title: "Webhook",
    text: "Call a Webhook",
    icon: getSvg("webhook_bg"),
  },
];

export default ({
  onChange,
  dataSource,
}: {
  dataSource: Record<string, any>;
  onChange: (type: string, values: any) => void;
}) => {
  const [detail, setDetail] = useState({});
  const handleClick = (item: Record<string, any>) => {
    setDetail({ ...item, open: true });
  };

  const handleChange = (type: string, value: any) => {
    onChange(type, value);
    setDetail({ open: false });
  };
  return (
    <div className='action-card'>
      <h3 className='title'> Action</h3>
      <div className='action-card-content'>
        {listAction.map((item) => {
          return (
            <div
              key={item.title}
              className='action-card-content-item'
              onClick={() => handleClick(item)}>
              <span className='img-svg'>{item.icon}</span>
              <p className='item-text'>
                <span className='title'>{item.title}</span>
                <span className='text'>{item.text}</span>
              </p>
            </div>
          );
        })}
      </div>
      <Detail data={detail} onChange={handleChange} dataSource />
    </div>
  );
};
