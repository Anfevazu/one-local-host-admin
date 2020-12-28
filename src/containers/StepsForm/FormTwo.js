import React, { useContext } from "react";
import { Button, Card, Row, Col } from "antd";
import FormContext from "../FormContext";

const FormTwo = () => {
  const context = useContext(FormContext)
  const handledInput = (e) => context.setInput(e)
  const { form } = context

  const toggleChecked = () => {
    handledInput({ target: { name: 'bacanHost', value: !form.bacanHost } })
    handledInput({ target: { name: 'warnHost', value: !form.warnHost } })
    console.log(form)
  }

  return (
    <div className="gx-main-content">
      <Row style={{margin: "32px"}}>
        <Col span={12}>
          <Card style={{marginBottom: "0px"}} title="Bacan Host">
            <p>The point of using Lorem Ipsum making it look like readable English. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p>Various versions have evolved over the years, sometimes by accident. The point of using Lorem Ipsum as opposed
            to using 'Content here, content here', making it look like readable English.</p>
            <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, discovered
            the source.</p>
            <p>
              <Button
                type="primary"
                size="small"
                name="bacanHost"
                onClick={toggleChecked}
                disabled={!form.bacanHost}
              >
                Bacan Host
              </Button>
            </p>
          </Card>
        </Col>

        <Col span={12}>
          <Card style={{marginBottom: "0px"}} title="Warn Host">
            <p>The point of using Lorem Ipsum making it look like readable English. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p>Various versions have evolved over the years, sometimes by accident. The point of using Lorem Ipsum as opposed
            to using 'Content here, content here', making it look like readable English.</p>
            <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, discovered
            the source.</p>
            <p>
              <Button
                type="primary"
                size="small"
                name="warnHost"
                onClick={toggleChecked}
                disabled={!form.warnHost}
              >
                Bacan Host
              </Button>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FormTwo;

