/** @format */
import "@/pages/style.less";
import { Button } from "antd";
import "./index.less";

const listType = [
  {
    title: "label",
    dataIndex: "label",
    width: "20%",
  },
  {
    title: "Metric",
    dataIndex: "metric",
    width: "20%",
  },
  {
    title: "Action",
    dataIndex: "action",
    width: "20%",
  },
  {
    title: "",
    dataIndex: "edit",
    width: "40%",
  },
];

const objTest = {
  label: "Hellman operator",
  metric: "Alert (Account balance)",
  action: "Discord/Email/Webhook",
};

export default () => {
  const data: any[] = [];
  for (let i = 0; i < 10; i++) {
    const obj = { ...objTest };
    obj.label = objTest.label + i;
    data.push(obj);
  }
  return (
    <div className='ssv-main'>
      <div className='ssv-main-header'>
        <h3 className='title'>Subscribed</h3>
        <Button className='default-btn add-btn'>Add</Button>
      </div>
      <div className='ssv-main-content'>
        <ul className='header'>
          {listType.map((item, key) => {
            return (
              <li
                key={key}
                style={{ width: item.width }}
                className='header-item'>
                {item.title}
              </li>
            );
          })}
        </ul>
        <ul className='data-content'>
          {data.map((itemData, index) => {
            return (
              <li key={index} className='data-content-item'>
                {listType.map((item) => {
                  return (
                    <span style={{ width: item.width }}>
                      {itemData[item.dataIndex]}
                    </span>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
