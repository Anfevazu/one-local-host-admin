import React, { useContext } from "react";
import { Card, Row, Col, Input, Select, Form } from "antd";
import FormContext from "../FormContext";


const Option = Select.Option;

const FormSeven = () => {
  const context = useContext(FormContext)
  const handledInput = (e) => context.setInput(e)

  const handleChangeType = (value) => {
    handledInput({ target: { name: 'documentType', value } })
  }

  const handleChangeBank = (value) => {
    handledInput({ target: { name: 'documentType', value } })
  }

  return (
    <div className="gx-main-content">
      {/* <Row style={{ margin: "32px" }}>
        <Col span={12}>
          <Card style={{ marginBottom: "0px" }} title="Mercado Pago">
            <Form.Item name="emailMercadoPago" rules={[{ required: true, message: 'Please input your email registred in MercadoPago!\'}' }]}>
              <Input placeholder="Email" name="emailMercadoPago" onChange={(e) => handledInput(e)} />
            </Form.Item>
          </Card>
        </Col>

        <Col span={12}>
          <Card style={{ marginBottom: "0px" }} title="Datos Bancarios">
            <Col span={24}>
              <Form.Item name="accountBank" rules={[{ required: true, message: 'Please input your bank!\'}' }]}>
                <Select
                  showSearch
                  placeholder="Select a bank"
                  optionFilterProp="children"
                  onChange={handleChangeBank}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Option value="BBVA">BBVA</Option>
                  <Option value="Banco de Bogota">Banco de Bogota</Option>
                  <Option value="Bancolombia">Bancolombia</Option>
                </Select>
              </Form.Item>
              <Form.Item name="accountType" rules={[{ required: true, message: 'Please input your account type!\'}' }]}>
                <Select placeholder="Select a bank type" onChange={handleChangeType}>
                  <Option value="Ahorros">Ahorros</Option>
                  <Option value="Corriente">Corriente</Option>
                </Select>
              </Form.Item>
              <Form.Item name="accountNumber" rules={[{ required: true, message: 'Please input your account number!\'}' }]}>
                <Input type="number" placeholder="No. Bank" name="accountNumber" onChange={(e) => handledInput(e)} />
              </Form.Item>
            </Col>
          </Card>
        </Col>
      </Row> */}
    </div>
  )
}

export default FormSeven;
