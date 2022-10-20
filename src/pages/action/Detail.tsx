/** @format */

import { Button, Form, Input, Modal } from "antd";
import { icons } from "antd/lib/image/PreviewGroup";
import { useEffect, useRef, useState } from "react";

const FormList = [{ name: "email", label: "Email address", require: true }];

export default (props: any) => {
  const { title, icon, open } = props.data;
  const [address, setAddress] = useState("");

  const onFinish = (values: any) => {
    if (props.onChange) {
      props.onChange("action", values);
    }
  };

  //useEffect(() => { },[da])

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
          layout='vertical'
          initialValues={props.dataSource}
          className='from-content'
          onFinish={onFinish}>
          {FormList.map((item) => {
            return (
              <Form.Item
                key={item.label}
                label={<span className='item-label'>{item.label}</span>}
                name={item.name}
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
      </div>
    </Modal>
  );
};
