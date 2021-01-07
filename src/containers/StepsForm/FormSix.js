import React from "react";
import { Card, Input, Select, Col, Row } from "antd";

const InputGroup = Input.Group;
const Option = Select.Option;

const FormSix = () => {

  return (
    <div className="gx-main-content">
      <Row style={{ margin: "32px" }}>
        <Col span={24}>
          <Card className="gx-card" title="Identity">
            <InputGroup compact className="gx-mb-3">
              <Select defaultValue="Zhejiang">
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
              <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
            </InputGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FormSix;

