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
  const { detail } = data;

  const [form] = Form.useForm();

  const onFinish = () => {
    if (form) {
      const values = form.getFieldsValue();
      if (values) {
        onChange("conditions", {
          ...values,
          groupId: detail?.groupId,
          metricId: detail?.id,
          showText: [detail?.rule_template, detail?.rules_hint],
        });
      }
    }
  };

  useEffect(() => {
    handleChange();
  }, [data, dataSource]);

  const handleChange = () => {
    if (form) {
      const values = form.getFieldsValue();
      Object.keys(values).forEach((va) => {
        form.setFieldValue(va, "");
      });
    }
  };

  const renderChildren = (data: any) => {
    const options = (data?.choices || []).map((value: string[]) => {
      return { label: value[1], value: value[0] };
    });
    if (data.remote_url && !optiosData[data.remote_url]) {
      const url = `${tokenUrl}${data.remote_url}`;
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
            className='item-select default-border'
            popupClassName='item-select-wrap'
            options={
              options.length > 0 ? options : optiosData[data.remote_url]
            }></Select>
        );
      case "INPUT":
        return (
          <div className='show-input default-border'>
            <Input className='item-input' />
          </div>
        );

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
          {detail?.rule_template || ""}
          <span
            className='title-detail'
            dangerouslySetInnerHTML={{ __html: detail?.rules_hint }}></span>
        </p>
        {detail && (
          <Form
            form={form}
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
              <div
                className='default-border default-btn-border'
                onClick={handleChange}>
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
