import {
  Row,
  Col,
} from "antd";
import React from "react";

import Form from '../components/SignUpForm/Form';


const SignUp = () => {
  return (
    <div className="gx-app-signup-wrap">
      <div>
        <Row >
          <Col className="center-container-logo-signup" span={24} >
            <img alt="One Local Host" className="gx-signin-logo-image" src={require("assets/images/logo-one.png")} />
          </Col>
        </Row>
        <Form />
      </div>
    </div>
  );
};


export default SignUp;
