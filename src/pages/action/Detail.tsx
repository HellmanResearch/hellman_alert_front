/** @format */

import { defaultUrl } from "@/contanst";
import { Button, Form, Input, message, Modal, Tooltip } from "antd";
import { QuestionCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const FormList = [{ name: "", label: "address", require: true }];

export default (props: any) => {
  const { title, key, detailTitle, placeholder, detailLabel, icon, open } =
    props.data;
  const { dataSource } = props;
  const [address, setAddress] = useState("");
  const [form] = Form.useForm();
  const [btnLoad, setBtnLoad] = useState(false);

  const onFinish = (values: any) => {
    if (props.onChange) {
      props.onChange("action", values);
    }
  };

  //useEffect(() => { },[da])
  useEffect(() => {
    handleChange("default", dataSource);
  }, [dataSource]);

  const handleChange = (type: string, values?: Record<string, string>) => {
    if (form) {
      if (type === "test") {
        setBtnLoad(true);
        axios
          .post(`${defaultUrl}alerting/subscribes/action-test`, {
            notification_address: address,
            notification_type: title.toLocaleLowerCase(),
          })
          .then((res) => {
            setBtnLoad(false);
            // message.success("send success");
          })
          .catch(() => {
            setBtnLoad(false);
          });
      } else if (values && type === "default") {
        const values = form.getFieldsValue();
        Object.keys(values).forEach((va) => {
          form.setFieldValue(va, values[va]);
        });
      }
    }
  };

  return (
    <Modal
      title=''
      open={open}
      wrapClassName='ssv-modal action-modal-wrap'
      footer={null}
      width={580}
      onCancel={() => props.onChange("show", false)}>
      <div className='action-detail'>
        <div className='action-detail-title'>
          {icon}
          <span className='action-modal-lable'>{title}</span>
        </div>
        <div className='action-detail-header'>
          <h3 className='title'>{detailTitle}</h3>
          <span className='detail'>
            Send notifications to
            <span style={{ color: "#1BA5F8", marginLeft: "3px" }}>
              {address}
            </span>
          </span>
        </div>
        <Form
          form={form}
          layout='vertical'
          initialValues={props.dataSource}
          className='from-content'
          onFinish={onFinish}>
          {FormList.map((item) => {
            return (
              <Form.Item
                key={item.label}
                label={
                  <span className='item-label'>
                    {detailLabel ? detailLabel : `${title} ${item.label}`}
                    {detailLabel && (
                      <Tooltip
                        placement='topLeft'
                        title='How to set up Webhook automated messages?'>
                        <QuestionCircleOutlined
                          style={{ marginLeft: 6, cursor: "pointer" }}
                          onClick={() => {
                            window.open(
                              "https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"
                            );
                          }}
                        />
                      </Tooltip>
                    )}
                  </span>
                }
                name={key}
                required={item.require}>
                <Input
                  placeholder={placeholder}
                  className='item-input default-border'
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </Form.Item>
            );
          })}
          <Form.Item className='from-btns' wrapperCol={{ span: 24 }}>
            <div
              className='default-border default-btn-border'
              style={{ minWidth: 140, textAlign: "center" }}
              onClick={() => handleChange("test")}>
              <span className='text'>
                {btnLoad ? (
                  <LoadingOutlined style={{ color: "#fff" }} />
                ) : (
                  "Test send"
                )}
              </span>
            </div>
            <Button
              className='default-btn'
              type='primary'
              htmlType='submit'
              onClick={onFinish}>
              Confirm
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
