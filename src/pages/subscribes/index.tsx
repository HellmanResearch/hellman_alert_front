/** @format */
import { defaultUrl, page_size } from "@/contanst";
import "@/pages/style.less";
import { getSvg } from "@/svgTypes";
import { rootState } from "@/type";
import { Button, Pagination, Popconfirm } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router";
import "../style.less";
import { setStrUpLower } from "../Utils";

export default () => {
  const listType = [
    {
      title: "Name",
      dataIndex: "name",
      width: "35%",
    },

    {
      title: "Action",
      dataIndex: "notification_type",
      width: "25%",
      render: (Record: any) => setStrUpLower(Record["notification_type"]),
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
            <Popconfirm
              title='Are you sure to remove this task?'
              onConfirm={() => handleClick("remove", Record)}
              okText='Yes'
              cancelText='No'>
              <span className='default-border edit-btn'>
                {getSvg("delete_svg")}
                <span className='text'>remove</span>
              </span>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const [data, setData] = useState([]);
  const Navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const { account, max_subscribe } = useSelector(
    (state: rootState) => ({
      account: state?.user.public_key,
      max_subscribe: state?.user.max_subscribe,
    }),
    shallowEqual
  );

  const load = (current?: number) => {
    const payload = {
      page: current || page,
      page_size,
      ordering: "-id",
    };
    axios
      .get(
        `${defaultUrl}/alerting/subscribes?page=${payload.page}&page_size=${payload.page_size}&&ordering=-id`
      )
      .then((res: any) => {
        setData(res.data?.results || []);
        setTotal(res.data?.count);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (account) {
      setLoading(true);
      load();
    }
  }, [account]);

  const handleClick = (type: string, Record: any) => {
    if (type === "update") {
      Navigate(`/subscribe/${Record.id}`);
    } else if (type === "remove") {
      axios
        .delete(`${defaultUrl}alerting/subscribes/${Record.id}`)
        .then((res: any) => {
          load();
        });
    }
  };
  return (
    <div className='ssv-main'>
      <div className='ssv-main-header'>
        <h3 className='title'>Subscribed</h3>
        <div className='ssv-main-header-content'>
          <div className='limit'>
            <span className='limit-icon'>limit: </span>
            <span>
              {total} / {max_subscribe}
            </span>
          </div>
          <Button
            className='default-btn add-btn'
            onClick={() => {
              Navigate(`/subscribe/add`);
            }}>
            Add
          </Button>
        </div>
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
        {loading && (
          <div className='loading'>
            <LoadingOutlined style={{ fontSize: 50 }} />
          </div>
        )}
        {!loading && (
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
        )}
      </div>
      <Pagination
        className='ssv-pagination'
        defaultCurrent={page}
        defaultPageSize={page_size}
        total={total}
        onChange={(current) => {
          setPage(current);
          load(current);
        }}
      />
    </div>
  );
};
