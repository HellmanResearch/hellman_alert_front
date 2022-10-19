/** @format */

import { getSvg } from "@/svgTypes";
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

export default () => {
  return (
    <div className='action-card'>
      <h3 className='title'> Action</h3>
      <div className='action-card-content'>
        {listAction.map((item) => {
          return (
            <div className='action-card-content-item'>
              <span className='img-svg'>{item.icon}</span>
              <p className='item-text'>
                <span className='title'>{item.title}</span>
                <span className='text'>{item.text}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
