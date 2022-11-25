/** @format */

import { tokenUrl } from "@/contanst";
import { getSvg } from "@/svgTypes";
import {
  Checkbox,
  Form,
  Select,
  Input,
  Modal,
  Button,
  InputRef,
  InputNumber,
} from "antd";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { getStr } from "@/pages/Utils";
import { DefaultOptionType } from "antd/lib/select";
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
          displayName: detail?.display,
          rule_template: detail?.rule_template,
        });
      }
    }
  };

  useEffect(() => {
    handleChange("cancel", "", dataSource);
  }, [dataSource]);

  const handleChange = (
    type: string,
    title: string,
    value?: any,
    showValue?: any
  ) => {
    if (type === "change") {
      if (fromLabel[title]) {
        const show = Array.isArray(value)
          ? showValue.join("/")
          : getStr(showValue || value);
        changeContent(title, show);
        setLable({ ...fromLabel, [title]: show });
      }
    } else if (type === "cancel") {
      if (form) {
        const values = form.getFieldsValue();
        Object.keys(values).forEach((key) => {
          form.setFieldValue(key, (value && value[key]) || "");
        });
      }
    }
  };

  const changeContent = (value: string, data?: string) => {
    const text1 = detail?.rules_hint.replace(/\`/g, "");
    const text2 = text1?.replace(/\$/g, "");
    let showContent = "";
    Object.keys(fromLabel).forEach((v) => {
      const replaceText = showContent || text2;
      let showValue: any =
        typeof fromLabel[v] !== "boolean" ? fromLabel[v] : "";
      if (v === value) {
        showValue = data;
      }
      showContent = replaceText?.replace(
        new RegExp(`{ form.confitions.${v} }`, "g"),
        showValue
      );
    });
    setContent(showContent);
  };

  useEffect(() => {
    const rules_hint = detail?.rules_hint;
    if (rules_hint) {
      const text1 = rules_hint.replace(/\`/g, "");
      const text2 = text1?.replace(/\$/g, "");
      const text3 = text2?.replace(/\{.*?\}/g, "");
      const text: Record<string, boolean> = {};
      text2?.match(/\{.*?\}/g)?.forEach((v: string) => {
        const label = v?.split("form.confitions.")[1];
        const key = label.split(" }")[0];
        text[key] = true;
      });
      setLable(text);
      setContent(dataSource?.showHtml ? dataSource.showHtml : text3);
    }
  }, [detail, dataSource]);

  const renderChildren = (data: any, name: string) => {
    const options = (data?.choices || []).map((value: string[]) => {
      return { label: value[1], value: value[0] };
    });
    if (data.remote_url && !optiosData[data.remote_url] && data.is_remote) {
      const url = `${tokenUrl}${data.remote_url}`;
      axios.get(`${tokenUrl}${data.remote_url}`).then((res: any) => {
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
            onChange={(changedValues: any) => {
              const showValues: string[] = [];
              changedValues?.forEach((value: number) => {
                const item = options.find((opt: any) => opt.value === value);
                if (item) {
                  showValues.push(item.label);
                }
              });
              handleChange("change", name, changedValues, showValues);
            }}
            className='item-checkbox'
            options={options}></Checkbox.Group>
        );
      case "SELECT":
        return (
          <Select
            showSearch
            onChange={(changedValues, option: any) => {
              handleChange("change", name, changedValues);
            }}
            filterOption={(input, option) =>
              String(option?.label ?? "")
                ?.toLowerCase()
                .includes(input.toLowerCase())
            }
            className='item-select default-border'
            popupClassName='item-select-wrap'
            options={
              options.length > 0 ? options : optiosData[data.remote_url]
            }></Select>
        );
      case "INPUT":
        return (
          <InputNumber
            addonAfter={null}
            style={{ width: "100%" }}
            onChange={(value) => {
              handleChange("change", name, value);
            }}
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
          <span
            className='title-detail'
            id='title-detail-back'
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </p>
        {detail && (
          <Form
            form={form}
            onFinish={onFinish}
            layout='vertical'
            initialValues={dataSource}
            // onValuesChange={(changedValues, values) =>
            //   handleChange("change", changedValues, values)
            // }
            className='from-content sbuscribe-detail-card-content'>
            {Object.keys(detail.fields_attr || {}).map((title: string) => {
              const showTitle = detail.fields_attr[title].display;
              return (
                <Form.Item
                  name={title}
                  key={title}
                  label={<span className='item-label'>{showTitle}</span>}
                  rules={[{ required: true }]}>
                  {renderChildren(detail?.fields_attr[title], title)}
                </Form.Item>
              );
            })}
            <Form.Item className='from-btns' wrapperCol={{ span: 24 }}>
              <Button
                className='default-btn'
                type='primary'
                htmlType='submit'
                onClick={onFinish}>
                Confirm
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </Modal>
  );
};
