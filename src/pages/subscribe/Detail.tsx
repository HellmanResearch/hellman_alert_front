/** @format */

import { defaultUrl } from "@/contanst";
import { getSvg } from "@/svgTypes";
import { METRICITEM } from "@/type";
import { Modal } from "antd";
import axios from "axios";
import { useEffect } from "react";

interface PROPS {
  data: {
    show: boolean;
    detail?: Record<string, string>;
  };
  onChange: (type: boolean) => void;
}

export default (props: PROPS) => {
  const { data, onChange } = props;
  const { detail } = data;
  console.log("---f", data, detail);
  return (
    <Modal
      title=''
      open={data.show}
      wrapClassName='sbuscribe-detail'
      onCancel={() => onChange(false)}>
      <div className='sbuscribe-detail-card'>
        <h3 className='header'>
          {getSvg("metric_logo")}
          <span className='name'>{detail?.name || ""}</span>
        </h3>
        <div></div>
      </div>
    </Modal>
  );
};
