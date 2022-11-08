/** @format */

import { Modal } from "antd";
import Echarts from "@/components/echarts";

export default ({
  show,
  options,
  onChange,
}: {
  show: boolean;
  options?: Record<string, any>;
  onChange: () => void;
}) => {
  return (
    <Modal
      open={show}
      onCancel={onChange}
      wrapClassName='ssv-modal'
      footer={null}>
      <Echarts options={options} />
    </Modal>
  );
};
