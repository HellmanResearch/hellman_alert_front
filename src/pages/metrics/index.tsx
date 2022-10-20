/** @format */
import { defaultUrl } from "@/contanst";
import "@/pages/style.less";
import { getSvg } from "@/svgTypes";
import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./index.less";

const objTest = {
  label: "Hellman operator",
  metric: "Alert (Account balance)",
  action: "Discord/Email/Webhook",
};

export default () => {
  const listType = [
    {
      title: "label",
      dataIndex: "name",
      width: "25%",
    },
    {
      title: "Metric",
      dataIndex: "metric",
      width: "15%",
    },
    {
      title: "Action",
      dataIndex: "notification_type",
      width: "20%",
    },
    {
      title: "",
      dataIndex: "edit",
      width: "40%",
      render: (Record: any) => {
        return (
          <div className='edit'>
            <span
              className='default-border edit-btn'
              onClick={() => handleClick("update", Record)}>
              {getSvg("update_svg")}
              <span className='text'>update</span>
            </span>
            <span className='default-border edit-btn'>
              {getSvg("delete_svg")}
              <span className='text'>remove</span>
            </span>
          </div>
        );
      },
    },
  ];

  const [data, setData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get(`${defaultUrl}alerting/subscribes`).then((res) => {
      console.log("-===3", res);
      setData(res.data);
    });
  }, []);

  const handleClick = (type: string, Record: any) => {
    if (type === "update") {
      Navigate(`/subscribe/${Record.id}`);
    }
  };
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
                  const children = item.render
                    ? item.render(itemData)
                    : itemData[item.dataIndex];
                  return (
                    <span style={{ width: item.width }} key={item.dataIndex}>
                      {children}
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
