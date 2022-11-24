/** @format */

/** @format */

import { defaultUrl, page_size } from "@/contanst";
import { useEffect, useState } from "react";
import moment from "moment";
import { Button, Input, Pagination } from "antd";
import { LineChartOutlined } from "@ant-design/icons";
import "../style.less";
import { useNavigate } from "react-router";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
const { Search } = Input;

const data = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            color: "#a90000",
          },
        },
        150,
        80,
        70,
        110,
        130,
      ],
      type: "bar",
    },
  ],
};

export default () => {
  const [alertsData, setAlerts] = useState([]);
  // const [search, setSearch] = useState("");
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const columns = [
    { title: "Display", dataIndex: "display", width: "40%" },
    {
      title: "Group",
      dataIndex: "group__name",
      width: "40%",
    },
    // {
    //   title: "UpdateTime",
    //   dataIndex: "update_time",
    //   width: "20%",
    //   render: (text: string, record?: any) =>
    //     moment(text).format("YYYY-MM-DD hh:mm"),
    // },
    {
      title: "",
      dataIndex: "",
      width: "20%",
      render: (_text: string, _res: Record<string, any>) => {
        return (
          <span
            className='default-border edit-btn'
            style={{ cursor: "pointer", float: "right" }}
            onClick={() => {
              //setHistory(historyData);
              Navigate(`/history/${_res.id}`);
            }}>
            <span className='text'>
              <LineChartOutlined className='icon' />
              History
            </span>
          </span>
        );
      },
    },
  ];

  const load = (current?: number) => {
    const payload = {
      page: current || page,
      page_size,
      ordering: "-id",
    };

    axios
      .get(
        `${defaultUrl}engine/metrics?page=${payload.page}&page_size=${payload.page_size}&&ordering=-id`
      )
      .then((res: any) => {
        setAlerts(res?.data?.results);
        setTotal(res?.data?.count);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    setLoading(true);
    load();
  }, []);

  //   const onSearch = (e: any) => {
  //     setSearch(e.target.value);
  //   };
  return (
    <div className='ssv-main'>
      <div className='ssv-main-header'>
        <h3 className='title'>Metrics</h3>
        <Button
          className='default-btn add-btn'
          onClick={() => {
            Navigate(`/Subscribe/add`);
          }}>
          + Subscribe
        </Button>
        {/* <Input.Search
          placeholder='input search text'
          onChange={onSearch}
          onSearch={load}
          className='alert-search'
          style={{ width: 400 }}
        /> */}
      </div>
      <div className='ssv-main-content'>
        <ul className='header'>
          {columns.map((item, key) => {
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
            {alertsData.map((itemData, index) => {
              return (
                <li key={index} className='data-content-item'>
                  {columns.map((item) => {
                    const children = item.render
                      ? item.render(itemData[item.dataIndex], itemData)
                      : String(itemData[item.dataIndex]);
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
