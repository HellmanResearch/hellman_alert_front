/** @format */

import { defaultUrl, tokenUrl } from "@/contanst";
import { getSvg } from "@/svgTypes";
import { METRICITEM } from "@/type";
import { Checkbox, Form, Select, Input, Modal, Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

interface PROPS {
  data: {
    show: boolean;
    detail?: Record<string, any>;
  };
  dataSource: Record<string, any>;
  onChange: (type: string, value: any) => void;
}

export default (props: PROPS) => {
  const { data, dataSource, onChange } = props;
  const [optiosData, setOptions] = useState<Record<string, any>>({});
  const [initialValues, setInitValues] = useState({});
  const { detail } = data;

  const onFinish = (values: any) => {
    if (values) {
      console.log("====435", values);
      onChange("conditions", { ...values, metricId: detail?.id });
    }
  };

  useEffect(() => {
    setInitValues(dataSource || {});
  }, [data, dataSource]);

  const renderChildren = (data: any) => {
    const options = (data?.choices || []).map((value: string[]) => {
      return { label: value[1], value: value[0] };
    });
    if (data.remote_url && !optiosData[data.remote_url]) {
      axios.get(`${tokenUrl}${data.remote_url}`).then((res) => {
        if (res.data) {
          const newOpt = {
            [data.remote_url]: res.data.map((va: any) => {
              return { label: va[1], value: va[0] };
            }),
          };
          setOptions({ ...optiosData, ...newOpt });
        }
      });
    }

    switch (data.type) {
      case "CHOICE":
        return (
          <Checkbox.Group
            className='item-checkbox'
            options={options}></Checkbox.Group>
        );
      case "SELECT":
        return (
          <Select
            //open={true}
            className='item-select default-border'
            popupClassName='item-select-wrap'
            options={
              options.length > 0 ? options : optiosData[data.remote_url]
            }></Select>
        );
      case "INPUT":
        return <Input className='item-input default-border' />;
      default:
        return null;
    }
  };

  return (
    <Modal
      title=''
      open={data.show}
      wrapClassName='ssv-modal sbuscribe-detail'
      footer={null}
      onCancel={() => onChange("show", false)}>
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
          <Form
            onFinish={onFinish}
            layout='vertical'
            initialValues={dataSource}
            className='from-content sbuscribe-detail-card-content'>
            {Object.keys(detail.fields_attr || {}).map((title: string) => {
              return (
                <Form.Item
                  name={title}
                  key={title}
                  label={<span className='item-label'>{title}</span>}
                  rules={[{ required: true }]}>
                  {renderChildren(detail?.fields_attr[title])}
                </Form.Item>
              );
            })}
            <Form.Item className='from-btns' wrapperCol={{ span: 24 }}>
              <div className='default-border default-btn-border '>
                <span className='text'>change</span>
              </div>
              <Button
                className='default-btn'
                type='primary'
                htmlType='submit'
                onClick={onFinish}>
                confirm
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </Modal>
  );
};
