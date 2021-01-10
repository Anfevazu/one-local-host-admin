import React, { useContext } from "react";
import { Card, Input, Select, Col, Row, Form } from "antd";
import FormContext from "../FormContext";

const InputGroup = Input.Group;
const Option = Select.Option;

const FormSix = () => {
  const context = useContext(FormContext)
  const handledInput = (e) => context.setInput(e)
  const { form } = context

  const handleChange = (value) => {
    handledInput({ target: { name: 'documentType', value } })
  }

  return (
    <div className="gx-main-content">
      <Row style={{ margin: "32px" }}>
        <Col span={24}>
          <Card className="gx-card" title="Identity">
            <InputGroup compact className="gx-mb-3">
              <Select defaultValue="Select document type" value={form.documentType || "C.C."} onChange={handleChange} >
                <Option value="C.C.">C.C.</Option>
                <Option value="D.N.I">D.N.I</Option>
                <Option value="C.E.">C.E.</Option>
                <Option value="Passport">Passport</Option>
              </Select>
              <Form.Item noStyle name="documentNumber" rules={[{ required: true, message: 'Please input your document number!\'}' }]}>
                <Input style={{ width: '50%' }} placeholder="No Document" name="documentNumber" onChange={(e) => handledInput(e)} />
              </Form.Item>
            </InputGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FormSix;

