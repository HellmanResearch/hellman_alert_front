/** @format */

import { defaultUrl, page_size } from "@/contanst";
import { useEffect, useState } from "react";
import "../style.less";
import moment from "moment";
import { Button, Input, Pagination } from "antd";
import axios from "axios";
import { shallowEqual, useSelector } from "react-redux";
import { rootState } from "@/type";
import { useParams } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
export default () => {
  const [alertsData, setAlerts] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const param = useParams();

  useEffect(() => {
    if (param.id && param.sign) {
      axios
        .post(`${defaultUrl}/alerting/alerts/${param.id}/confirm-via-sign`, {
          sign: param.sign && decodeURIComponent(param.sign),
        })
        .then(() => {
          load();
        })
        .catch(() => {
          load();
        });
    }
  }, [param.id, param.sign]);

  const columns = [
    { title: "Name", dataIndex: "subscribe__name", width: "25%" },
    { title: "ID", dataIndex: "id", width: "20%" },
    {
      title: "Triggered Time",
      dataIndex: "create_time",
      width: "30%",
      render: (text: string, record?: any) =>
        moment.utc(text).format("YYYY-MM-DD hh:mm:ss") + " (UTC)",
    },
    {
      title: "",
      dataIndex: "confirmed",
      width: "25%",
      aligin: "right",
      render: (text: string, record: any) => {
        const showText = text ? "Acknowledged" : "Acknowledge";
        return (
          <div
            className={
              showText === "Acknowledge"
                ? "edit-btn default-border"
                : "edit-btn default-border disable-btn"
            }
            onClick={() => {
              if (showText === "Acknowledge") {
                handleConfirm(record.id);
              }
            }}
            style={{ textAlign: "right" }}>
            <span className={showText === "Acknowledge" ? "text" : "gary-text"}>
              {showText}
            </span>
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
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
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
    setLoading(true);
    if (account && !param.id) {
      load();
    }
  }, [account, param.id]);

  return (
    <div className='ssv-main'>
      <div className='ssv-main-header'>
        <h3 className='title'>Time Triggered</h3>
        <Button
          style={{
            background: alertsData.find((v) => !v.confirmed) ? "" : "gray",
          }}
          className='default-btn add-btn'
          onClick={() => {
            handleConfirm("all");
          }}>
          Acknowledge All
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
