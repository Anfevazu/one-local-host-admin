import React, { useState, useContext } from "react";
import FormContext from './FormContext'
import { Button, Card, Steps, Form, Row, Col } from "antd";
import FormOne from './StepsForm/FormOne'
import FormTwo from './StepsForm/FormTwo'
import FormThree from './StepsForm/FormThree'
import FormFour from "./StepsForm/FormFour";
import FormFive from "./StepsForm/FormFive";
import FormSix from "./StepsForm/FormSix";
import FormSeven from "./StepsForm/FormSeven";

import "./index.css";

const steps = [
  {
    title: 'Information',
    content: <FormOne />,
  },
  {
    title: 'Type Host',
    content: <FormTwo />,
  },
  {
    title: 'Experiences',
    content: <FormThree />,
  },
  {
    title: 'Language',
    content: <FormFour />,
  },
  {
    title: 'Banners',
    content:  <FormFive />,
  },
  {
    title: 'Identity',
    content: <FormSix />,
  },
  {
    title: 'Payment',
    content: <FormSeven />,
  },
  {
    title: 'Completed',
    content: 'Form is Completed',
  }
];
const Step = Steps.Step;

const Register = () => {
  const formContext = useContext(FormContext)
  const [state, setState] = useState({
    current: 0,
  });

  const next = () => {
    const current = state.current + 1;
    setState({ current });
  }

  const prev = () => {
    const current = state.current - 1;
    setState({ current });
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = () => {
    console.log('Received values of form: ', formContext);
  };

  return (
    <Row justify="center" align="middle">
      <Col span={18}>
        <Card className="gx-card" title="Switch Step">
          <Steps current={state.current}>
            {steps.map(item => <Step key={item.title} title={item.title} />)}
          </Steps>
          <Form
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            scrollToFirstError
          >
            <div className="steps-content">{steps[state.current].content}</div>
            <div className="steps-action">
              {
                state.current < steps.length - 1
                &&
                <Button type="primary" onClick={() => next()}>Next</Button>
              }
              {
                state.current === steps.length - 1
                &&
                <Button type="primary" htmlType="submit">
                  Done
              </Button>
              }
              {
                state.current > 0
                &&
                <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
                  Previous
            </Button>
              }
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
