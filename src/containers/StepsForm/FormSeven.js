import React from "react";
import { Card, Row, Col, Input, Select, Form } from "antd";

const Option = Select.Option;

const FormSeven = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function handleBlur() {
    console.log('blur');
  }

  function handleFocus() {
    console.log('focus');
  }

  function onChange() {
    console.log('onChange');
  }

  return (
    <div className="gx-main-content">
      <Row style={{ margin: "32px" }}>
        <Col span={12}>
          <Card style={{ marginBottom: "0px" }} title="Mercado Pago">
            <Input placeholder="Email" />
          </Card>
        </Col>

        <Col span={12}>
          <Card style={{ marginBottom: "0px" }} title="Datos Bancarios">
            <Col span={24}>
              <Form.Item name="bank" rules={[{ required: true, message: 'Please input your bank!\'}' }]}>
                <Select
                  showSearch
                  placeholder="Select a bank"
                  optionFilterProp="children"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Option value="BBVA">BBVA</Option>
                  <Option value="Banco de Bogota">Banco de Bogota</Option>
                  <Option value="Bancolombia">Bancolombia</Option>
                </Select>
              </Form.Item>
              <Form.Item name="bank" rules={[{ required: true, message: 'Please input your bank!\'}' }]}>
                <Select placeholder="Select a bank type" onChange={handleChange}>
                  <Option value="Ahorros">Ahorros</Option>
                  <Option value="Corriente">Corriente</Option>
                </Select>
              </Form.Item>
              <Form.Item name="bank" rules={[{ required: true, message: 'Please input your bank!\'}' }]}>
                <Input type="number" placeholder="No. Bank" onChange={onChange} />
              </Form.Item>
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FormSeven;
