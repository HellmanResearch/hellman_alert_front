/** @format */

import { defaultUrl, page_size } from "@/contanst";
import { useEffect, useState } from "react";
import "../style.less";
import moment from "moment";
import { Button, Input, Pagination } from "antd";
import axios from "axios";
import { shallowEqual, useSelector } from "react-redux";
import { rootState } from "@/type";

export default () => {
  const [alertsData, setAlerts] = useState<any[]>([]);
  //   const [search, setSearch] = useState("");
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);
  const columns = [
    { title: "Name", dataIndex: "subscribe__name", width: "40%" },
    {
      title: "Triggered Time",
      dataIndex: "create_time",
      width: "20%",
      render: (text: string, record?: any) =>
        moment(text).format("YYYY-MM-DD hh:mm:ss"),
    },
    {
      title: "",
      dataIndex: "confirmed",
      width: "40%",
      aligin: "right",
      render: (text: string, record: any) => {
        const showText = text ? "Confirmed" : "Confirm";
        return (
          <div
            className={
              showText === "Confirm" ? "edit-btn default-border" : "edit-btn"
            }
            onClick={() => {
              if (showText === "Confirm") {
                handleConfirm(record.id);
              }
            }}
            style={{ textAlign: "right" }}>
            <span className='text'>{showText}</span>
          </div>
        );
      },
    },
  ];
  const account = useSelector(
    (state: rootState) => state?.user.public_key,
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
        `${defaultUrl}alerting/alerts?page=${payload.page}&page_size=${payload.page_size}&&ordering=-id`
      )
      .then((res: any) => {
        setAlerts(res?.data?.results);
        setTotal(res?.data.count);
      })
      .catch((error) => {
        console.log("===error", error);
      });
  };

  const handleConfirm = (type: string) => {
    if (type === "all") {
      axios.post(`${defaultUrl}alerting/alerts/confirm-all`).then((res) => {
        load();
      });
    } else {
      axios.post(`${defaultUrl}alerting/alerts/${type}/confirm`).then((res) => {
        const newData = res.data;
        const data: any[] = alertsData.map((v: any) => {
          if (v.id === newData.id) {
            return newData;
          }
          return { ...v };
        });
        setAlerts(data);
      });
    }
  };

  useEffect(() => {
    console.log("=====4", account);
    if (account) {
      load();
    }
  }, [account]);

  //   const onSearch = (e: any) => {
  //     setSearch(e.target.value);
  //   };

  return (
    <div className='ssv-main'>
      <div className='ssv-main-header'>
        <h3 className='title'>Triggered Alerts</h3>
        <Button
          style={{
            background: alertsData.find((v) => !v.confirmed) ? "" : "gray",
          }}
          className='default-btn add-btn'
          onClick={() => {
            handleConfirm("all");
          }}>
          Confirm All
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
                {columns.map((item: any) => {
                  const children = item.render
                    ? item.render(itemData[item.dataIndex], itemData)
                    : String(itemData[item.dataIndex]);
                  return (
                    <span
                      style={{
                        width: item.width,
                        textAlign: item.aligin || "left",
                      }}
                      key={item.dataIndex}>
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
    </div>
  );
};
