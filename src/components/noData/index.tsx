/** @format */

import default_png from "@/assets/images/default.webp";
import { Button } from "antd";
import "./index.less";

export default () => {
  return (
    <div className='ssv-noData'>
      <div className='left'>
        <h3 className='title'>Subscribed</h3>
        <p className='text'>No data has been added to this list.</p>
        <Button className='default-btn nodata-btn'>Add</Button>
      </div>
      <div className='right'>
        <img src={default_png} />
      </div>
    </div>
  );
};
