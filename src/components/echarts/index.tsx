/** @format */

// 引入 ECharts 主模块
import * as echarts from "echarts";

// 引入柱状图
import "echarts/lib/chart/line";
// 引入提示框和标题组件
//import "echarts/lib/components/axis";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import { useEffect, useRef } from "react";

export default ({ options }: { options?: Record<string, any> }) => {
  const echartsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let myCharts: any;
    if (echartsRef && echartsRef.current) {
      const chart = echarts.getInstanceByDom(echartsRef.current);
      if (chart) {
        myCharts = chart;
        myCharts.setOption({
          xAxis: { ...options?.xAxis },
          yAxis: {
            type: "value",
            ...options?.yAxis,
          },
          tooltip: {
            show: true,
            formatter: function (params: any) {
              const showValue = Array.isArray(params.value)
                ? params.value[1]
                : params.value;
              return `${params.marker} ${params.name}:  ${
                Number(showValue) ? Number(showValue).toFixed(2) : showValue
              }`;
            },
          },
          dataZoom: {
            type: "inside",
          },

          series: options?.series,
        });
        console.log("===233", chart.getOption());
      } else {
        myCharts = echarts.init(echartsRef.current, "dark").setOption({
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            nameTextStyle: {
              color: "#fff",
            },

            data: options?.xAxis || [],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: options?.series || [],
              type: "line",
            },
          ],
        });
      }
    }
    return () => {
      if (myCharts) {
        myCharts.dispose();
      }
    };
  }, [echartsRef, options]);

  return (
    <div id='main' ref={echartsRef} style={{ width: 1000, height: 400 }}></div>
  );
};
