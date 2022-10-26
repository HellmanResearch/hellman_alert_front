/** @format */
import { defaultUrl } from "@/contanst";
import "@/pages/style.less";
import { DelReq, getReq } from "@/server/axios";
import { getSvg } from "@/svgTypes";
import { Button, Pagination } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../style.less";

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
            <span
              className='default-border edit-btn'
              onClick={() => handleClick("remove", Record)}>
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
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);
  const load = () => {
    const payload = {
      page,
    };
    getReq(`${defaultUrl}alerting/subscribes`, payload).then((res: any) => {
      setData(res.data?.results || []);
      setTotal(res.count);
    });
  };
  useEffect(() => {
    load();
  }, []);

  const handleClick = (type: string, Record: any) => {
    if (type === "update") {
      Navigate(`/subscribe/${Record.id}`);
    } else if (type === "remove") {
      DelReq(`${defaultUrl}alerting/subscribes/${Record.id}`).then(
        (res: any) => {
          load();
        }
      );
    }
  };
  return (
    <div className='ssv-main'>
      <div className='ssv-main-header'>
        <h3 className='title'>Subscribed</h3>
        <Button
          className='default-btn add-btn'
          onClick={() => {
            Navigate(`/subscribe/add`);
          }}>
          Add
        </Button>
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
      <Pagination
        className='ssv-pagination'
        defaultCurrent={page}
        total={total}
      />
    </div>
  );
};
