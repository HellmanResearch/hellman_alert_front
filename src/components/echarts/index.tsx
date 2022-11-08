/** @format */

// 引入 ECharts 主模块
import * as echarts from "echarts/lib/echarts";

// 引入柱状图
import "echarts/lib/chart/bar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import { JSXElementConstructor, useEffect, useRef } from "react";

const defaultOptios = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

export default ({ options }: { options?: Record<string, any> }) => {
  const echartsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("---3", options);
    let myCharts: any;
    if (echartsRef && echartsRef.current) {
      const chart = echarts.getInstanceByDom(echartsRef.current);
      if (chart) {
        myCharts = chart;
        myCharts.setOption({ ...options });
      } else {
        myCharts = echarts
          .init(echartsRef.current)
          .setOption({ ...(options || defaultOptios) });
      }
    }
    return () => {
      if (myCharts) {
        myCharts.dispose();
      }
    };
  }, [echartsRef, options]);

  return (
    <div id='main' ref={echartsRef} style={{ width: 400, height: 400 }}></div>
  );
};
