import React, { useEffect, useContext } from "react";
import { Button, Checkbox, message, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FormContext from './FormContext'

import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from "appRedux/actions/Auth";

import IntlMessages from "util/IntlMessages";
import CircularProgress from "components/CircularProgress/index";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";

const SignIn = () => {

  const dispatch = useDispatch();
  const { loader, alertMessage, showMessage, authUser } = useSelector(({ auth }) => auth);
  const history = useHistory();
  const formContext = useContext(FormContext)

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 100);
    }
    const userData = JSON.parse(localStorage.getItem('user'))
    if (authUser !== null && userData && userData.formCompleted) {
      history.push('/');
    }
    if (userData && !userData.formCompleted) {
      formContext.setForm(prevState => ({
        ...prevState,
        email: authUser.email,
        firstName: authUser.given_name,
        lastName: authUser.family_name,
        formCompleted: authUser.formCompleted
      }))

      history.push('/register');
    }
  });


  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    console.log("finish", values)
    dispatch(showAuthLoader());
    dispatch(userSignIn(values));
  };

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">

              <img src={"https://via.placeholder.com/272x395"} alt='Neature' />
            </div>
            <div className="gx-app-logo-wid">
              <h1><IntlMessages id="app.userAuth.signIn" /></h1>
              <p><IntlMessages id="app.userAuth.bySigning" /></p>
              <p><IntlMessages id="app.userAuth.getAccount" /></p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={require("assets/images/logo.png")} />
            </div>
          </div>
          <div className="gx-app-login-content">
            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0">

              <Form.Item>
                <Button block style={{ backgroundColor: "#F65314", color: "#FFF" }} className="gx-mb-0" htmlType="submit" onClick={() => {
                  dispatch(showAuthLoader());
                  dispatch(userGoogleSignIn());
                }}>
                  <GoogleOutlined style={{ margin: 10 }} />
                  <IntlMessages id="app.userAuth.signInGoogle" />
                </Button>
              </Form.Item>
              <Form.Item>
                <Button block style={{ backgroundColor: "#3B5998", color: "#FFF" }} className="gx-mb-0" htmlType="submit" onClick={() => {
                  dispatch(showAuthLoader());
                  dispatch(userFacebookSignIn());
                }}>
                  <FacebookOutlined style={{ margin: 10 }} />
                  <IntlMessages id="app.userAuth.signInFacebook" />
                </Button>
              </Form.Item>
              <Form.Item>
                <Button block style={{ backgroundColor: "#00ACEE", color: "#FFF" }} className="gx-mb-0" htmlType="submit" onClick={() => {
                  dispatch(showAuthLoader());
                  dispatch(userTwitterSignIn());
                }}>
                  <TwitterOutlined style={{ margin: 10 }} />
                  <IntlMessages id="app.userAuth.signInTwitter" />
                </Button>
              </Form.Item>
              <Form.Item>
                <Checkbox><IntlMessages id="appModule.iAccept" /></Checkbox>
                <span className="gx-signup-form-forgot gx-link"><IntlMessages
                  id="appModule.termAndCondition" /></span>
              </Form.Item>
            </Form>
          </div>

          {loader ?
            <div className="gx-loader-view">
              <CircularProgress />
            </div> : null}
          {showMessage ?
            message.error(alertMessage.toString()) : null}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
