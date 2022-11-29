/** @format */

import { Checkbox, Input, Modal, Select, Space } from "antd";
import Echarts from "@/components/echarts";
import { useEffect, useState } from "react";
import axios from "axios";
import { defaultUrl, tokenUrl } from "@/contanst";
import { useParams } from "react-router";
import moment from "moment";
import "./index.less";
import { setStrUpLower } from "../Utils";
export default () => {
  const [data, setData] = useState<Record<string, any>>({});
  const [optiosData, setOptions] = useState<Record<string, any>>({});
  const [filterValue, setFilterValue] = useState<Record<string, any>>({});
  const [showName, setShowName] = useState("");
  const [options, setEchartsOptions] = useState<{
    xAxis?: Record<string, any>;
    series?: Record<string, any>;
    yAxis?: Record<string, any>;
  }>({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${defaultUrl}/engine/metrics/${id}`).then((res: any) => {
      setData(res.data);
    });
  }, [id]);

  const load = (values: any) => {
    axios
      .post(`${defaultUrl}/engine/metrics/${id}/history`, {
        key: data.key,
        display: data.display,
        fields_attr: data.fields_attr,
        rule_template: data.rule_template,
        rules_hint: data.rules_hint,
        query_attr: data.query_attr,
        query_template: data.query_template,
        group: data.group,
        ...values,
      })
      .then((res) => {
        let xAxis: Record<string, any> = {};
        let series: Record<string, any>[] = [
          {
            type: "line",
            data: [],
            symbolSize: 6,
          },
        ];
        let yAxis: Record<string, any> = {};
        let tooltip: Record<string, any> = {};
        if (Object.keys(res.data?.history_value_map).length > 0) {
          xAxis = {
            type: "category",
            data: [],
          };
          yAxis = {
            type: "category",
            axisLine: { onZero: false },
            data: [],
            splitLine: {
              show: true,
            },
          };
          Object.keys(res.data?.history_value_map)
            .reverse()
            .forEach((v) => {
              yAxis.data.push(res.data?.history_value_map[v]);
            });
          res.data.human_data.forEach((item: any[]) => {
            const timer: number = Number(item[0]) * 1000;
            const showTimer = moment.utc(timer).format("YYYY-MM-DD HH:mm:ss");
            xAxis.data.push(showTimer);
            const newItem = [showTimer, item[1]];
            series[0].data.push([...newItem]);
          });
        } else {
          yAxis = {
            type: "value",
            name: res.data?.history_y_unit,
          };
          xAxis = {
            type: "category",

            data: [],
          };

          res.data?.data.forEach((item: any[]) => {
            const timer: number = Number(item[0]) * 1000;
            xAxis.data.push(moment.utc(timer).format("YYYY-MM-DD HH:mm:ss"));
            series[0].data.push(item[1]);
          });
        }
        setShowName(res.data?.history_display_name);
        setEchartsOptions({
          xAxis: xAxis,
          series,
          yAxis,
        });
      });
  };

  const handleChange = (title: string, value: string) => {
    setFilterValue({ ...filterValue, [title]: value });
    load({ ...filterValue, [title]: value });
  };

  const renderChildren = (data: any, name: string) => {
    const options = (data?.choices || []).map((value: string[]) => {
      return { label: value[1], value: value[0] };
    });
    if (data.remote_url && !optiosData[data.remote_url] && data?.is_remote) {
      axios.get(`${tokenUrl}${data.remote_url}`).then((res: any) => {
        if (res.data) {
          const newOpt = {
            [data.remote_url]: res.data.map((va: any) => {
              return { label: va[1], value: va[0] };
            }),
          };
          handleChange(name, newOpt[data.remote_url][0].value);
          setOptions({ ...optiosData, ...newOpt });
        }
      });
    }

    switch (data.type) {
      case "CHOICE":
        return (
          <Checkbox.Group
            className='item-checkbox item-content'
            options={options}></Checkbox.Group>
        );
      case "SELECT":
        return (
          <Select
            showSearch
            onChange={(value) => handleChange(name, value)}
            className='item-select default-border item-content'
            popupClassName='item-select-wrap'
            filterOption={(input, option) =>
              String(option?.label ?? "")
                ?.toLowerCase()
                .includes(input.toLowerCase())
            }
            value={(filterValue && filterValue[name]) || ""}
            options={
              options.length > 0 ? options : optiosData[data.remote_url]
            }></Select>
        );
      case "INPUT":
        return <Input className='item-input default-border item-content' />;

      default:
        return null;
    }
  };
  return (
    <div className='ssv-content history-content'>
      <h3 className='title'>{showName}</h3>
      <div className='from-content history-card'>
        {data?.query_attr &&
          Object.keys(data?.query_attr)?.map((title: string, index: number) => {
            const item = data.query_attr[title];
            return (
              <div className='history-card-item' key={index}>
                <span className='item-title'>{setStrUpLower(title)}:</span>
                {renderChildren(item, title)}
              </div>
            );
          })}
      </div>
      <Echarts options={{ ...options }} />
    </div>
  );
};
