/** @format */

import { defaultUrl, tokenUrl } from "@/contanst";
import { getSvg } from "@/svgTypes";
import { METRICITEM } from "@/type";
import { Checkbox, Form, Select, Input, Modal, Button } from "antd";
import axios from "axios";
import { useEffect } from "react";

interface PROPS {
  data: {
    show: boolean;
    detail?: Record<string, any>;
  };
  onChange: (type: boolean) => void;
}

export default (props: PROPS) => {
  const { data, onChange } = props;
  const { detail } = data;

  const renderChildren = (data: any) => {
    const options =
      (data?.choices || []).map((value: string[]) => {
        return { label: value[1], value: value[0] };
      }) || [];
    if (data.remote_url) {
      axios.get(`${tokenUrl}${data.remote_url}`).then((res: any) => {
        console.log("-----456res", res);
      });
    }
    switch (data.type) {
      case "CHOICE":
        return (
          <Checkbox.Group
            className='item-content'
            options={options}></Checkbox.Group>
        );
      case "SELECT":
        return (
          <Select
            //open={true}
            className='item-content item-select default-border'
            popupClassName='item-select-wrap'
            options={options}></Select>
        );
      case "INPUT":
        return <Input className='item-content item-input default-border' />;
      default:
        return null;
    }
  };

  useEffect(() => {
    console.log("====325", detail);
  }, [detail]);

  return (
    <Modal
      title=''
      open={data.show}
      wrapClassName='sbuscribe-detail'
      footer={
        <>
          <div className='default-border default-btn-border '>
            <span className='text'>change</span>
          </div>
          <Button className='default-btn'>confirm</Button>
        </>
      }
      onCancel={() => onChange(false)}>
      <div className='sbuscribe-detail-card'>
        <h3 className='header'>
          {getSvg("metric_logo")}
          <span className='name'>{detail?.display || ""}</span>
        </h3>
        <p className='title'>
          display
          <span className='title-detail'>
            When the balance of 0xccf5...fc3e is below 20 USD
          </span>
        </p>
        {detail && (
          <Form layout='vertical' className='sbuscribe-detail-card-content'>
            {Object.keys(detail.fields_attr || {}).map((title: string) => {
              return (
                <Form.Item
                  name={title}
                  label={<span className='item-label'>{title}</span>}
                  rules={[{ required: true }]}>
                  {renderChildren(detail?.fields_attr[title])}
                </Form.Item>
              );
            })}
          </Form>
        )}
      </div>
    </Modal>
  );
};
