/** @format */

/** @format */

import { defaultUrl, page_size } from "@/contanst";
import { getReq } from "@/server/axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { Button, Input, Pagination } from "antd";
import "../style.less";
import { useNavigate } from "react-router";
import History from "./History";
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
  const [show, setShow] = useState(false);
  const [historyData, setHistory] = useState({ ...data });

  const columns = [
    { title: "Display", dataIndex: "display", width: "30%" },
    {
      title: "CreateTime",
      dataIndex: "create_time",
      width: "30%",
      render: (text: string, record?: any) =>
        moment(text).format("YYYY-MM-DD hh:mm"),
    },
    {
      title: "UpdateTime",
      dataIndex: "update_time",
      width: "30%",
      render: (text: string, record?: any) =>
        moment(text).format("YYYY-MM-DD hh:mm"),
    },
    {
      title: "",
      dataIndex: "",
      width: "10%",
      render: (_text: string, _res: Record<string, any>) => {
        return (
          <span
            onClick={() => {
              setHistory(historyData);
              setShow(true);
            }}>
            History
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

    getReq(`${defaultUrl}engine/metrics`, payload).then((res: any) => {
      setAlerts(res?.data?.results);
      setTotal(res?.data?.count);
    });
  };
  useEffect(() => {
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
      {/* <History
        show={show}
        options={historyData}
        onChange={() => {
          setShow(false);
        }}
      /> */}
    </div>
  );
};
