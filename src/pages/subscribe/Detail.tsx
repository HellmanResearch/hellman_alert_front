/** @format */

import { tokenUrl } from "@/contanst";
import { getReq } from "@/server/axios";
import { getSvg } from "@/svgTypes";
import { Checkbox, Form, Select, Input, Modal, Button, InputRef } from "antd";
import { useEffect, useRef, useState } from "react";
import { getStr } from "../Utils";

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
  const [content, setContent] = useState("");
  const [fromLabel, setLable] = useState<Record<string, boolean | string>>({});
  const { detail } = data;
  const inputRef = useRef<InputRef>(null);

  const [form] = Form.useForm();

  const onFinish = () => {
    if (form) {
      const values = form.getFieldsValue();
      if (values) {
        onChange("conditions", {
          ...values,
          groupId: detail?.groupId,
          metricId: detail?.id,
          showHtml: content,
          rule_template: detail?.rule_template,
        });
      }
    }
  };

  useEffect(() => {
    handleChange("cancel", dataSource);
  }, [data, dataSource]);

  const handleChange = (type: string, value?: any) => {
    if (type === "change") {
      const key = Object.keys(value)[0];
      if (fromLabel[key]) {
        const show = getStr(value[key]);
        changeContent(key, show);
        setLable({ ...fromLabel, [key]: value[key] });
      }
    } else if (type === "cancel") {
      if (form) {
        const values = form.getFieldsValue();
        Object.keys(values).forEach((va) => {
          form.setFieldValue(va, (value && value[va]) || "");
        });
      }
    }
  };

  const changeContent = (value: string, data?: string) => {
    const text1 = detail?.rules_hint.replace(/\`/g, "");
    const text2 = text1?.replace(/\$/g, "");
    const content = text2?.replace(
      new RegExp(`{ form.confitions.${value} }`, "g"),
      data
    );
    const text = content?.replace(/\{.*?\}/g, "");
    setContent(text);
  };

  useEffect(() => {
    const text1 = detail?.rules_hint.replace(/\`/g, "");
    const text2 = text1?.replace(/\$/g, "");
    const text3 = text2?.replace(/\{.*?\}/g, "");
    const text: Record<string, boolean> = {};
    text2?.match(/\{.*?\}/g)?.forEach((v: string) => {
      const label = v?.split("form.confitions.")[1];
      const key = label.split(" }")[0];
      text[key] = true;
    });
    setLable(text);
    setContent(text3);
  }, [detail]);

  const renderChildren = (data: any, name?: string) => {
    const options = (data?.choices || []).map((value: string[]) => {
      return { label: value[1], value: value[0] };
    });
    if (data.remote_url && !optiosData[data.remote_url]) {
      const url = `${tokenUrl}${data.remote_url}`;
      getReq(`${tokenUrl}${data.remote_url}`).then((res: any) => {
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
    console.log(
      "====3",
      form.getFieldsValue(),
      name && form.getFieldValue(name)
    );

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
          <Input
            className='item-input default-border'
            defaultValue={(name && form?.getFieldValue(name)) || ""}
          />
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
            id='title-detail-back'
            dangerouslySetInnerHTML={{
              __html: dataSource.showHtml || content,
            }}
          />
        </p>
        {detail && (
          <Form
            form={form}
            onFinish={onFinish}
            layout='vertical'
            initialValues={dataSource}
            onValuesChange={(changedValues) =>
              handleChange("change", changedValues)
            }
            className='from-content sbuscribe-detail-card-content'>
            {Object.keys(detail.fields_attr || {}).map((title: string) => {
              return (
                <Form.Item
                  name={title}
                  key={title}
                  label={<span className='item-label'>{title}</span>}
                  rules={[{ required: true }]}>
                  {renderChildren(detail?.fields_attr[title], title)}
                </Form.Item>
              );
            })}
            <Form.Item className='from-btns' wrapperCol={{ span: 24 }}>
              <div
                className='default-border default-btn-border'
                onClick={() => handleChange("cancel")}>
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
