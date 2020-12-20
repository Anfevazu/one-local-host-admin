import React from "react";
import {
  Row,
  Col
} from 'antd';
import Registration from "./Registration";

const SamplePage = () => {
  return (
    <Row>
      <Col span={24}>
        <Registration/>
      </Col>
    </Row>
  );
};

export default SamplePage;
