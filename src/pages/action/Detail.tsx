/** @format */

import { Button, Form, Input, Modal } from "antd";
import { icons } from "antd/lib/image/PreviewGroup";
import { useEffect, useRef, useState } from "react";

const FormList = [{ name: "", label: " address", require: true }];

export default (props: any) => {
  const { title, key, icon, open } = props.data;
  const [address, setAddress] = useState("");
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    if (props.onChange) {
      props.onChange("action", values);
    }
  };

  //useEffect(() => { },[da])

  const handleChange = () => {
    if (form) {
      const values = form.getFieldsValue();
      Object.keys(values).forEach((va) => {
        form.setFieldValue(va, "");
      });
    }
  };

  return (
    <Modal
      title=''
      open={open}
      wrapClassName='ssv-modal action-modal-wrap'
      footer={null}
      onCancel={() => props.onChange("show", false)}>
      <div className='action-detail'>
        <div className='action-detail-title'>
          {icon}
          <span className='action-modal-lable'>{title}</span>
        </div>
        <div className='action-detail-header'>
          <h3 className='title'>Action</h3>
          <span className='detail'>
            Send email to Email{" "}
            <span style={{ color: "#1BA5F8" }}>{address}</span>
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
                label={<span className='item-label'>{title + item.label}</span>}
                name={key}
                required={item.require}>
                <Input
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
      </div>
    </Modal>
  );
};
