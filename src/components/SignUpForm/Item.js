import React from 'react';
import { Col, Row } from 'antd';

const Item = ({position, title, field}) => (
  <div className="item-form-signup" >
    <Row className="container-title-item-form-signup" >
      <Col span={24} >
        <span className="position-span-item-form-signup" >{position}.</span>
        <span className="title-label-item-form-signup" >{title}</span>
      </Col>
    </Row>
    <Row className="container-field-item-form-signup" >
      <Col span={24}>
        {field}
      </Col>
    </Row>
  </div>
);

export default Item;
