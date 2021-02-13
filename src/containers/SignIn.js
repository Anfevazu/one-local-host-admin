import { Form } from "antd";
import { useHistory } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookFilled";

/* import {
  userSignIn,
  hideMessage,
  showAuthLoader,
  userGoogleSignIn,
  userTwitterSignIn,
  userFacebookSignIn,
} from "appReduxOld/actions/Auth"; */
import IntlMessages from "util/IntlMessages";
import useCommon from '../hooks/common.hook';
import Loader from "../components/LoaderPage/LoaderPage";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authUser } = useSelector(({ auth }) => auth);
  const { message: showMessage, setMessage, loading, toogleLoading } = useCommon();

  const buttonsSocialLogin = [
    {
      name: 'Google',
      icon: GoogleOutlined,
      onClick: () => {
        setMessage("HOLA MUNDO");
        /* dispatch(showAuthLoader());
        dispatch(userGoogleSignIn()); */
      }
    },
    {
      name: 'Facebook',
      icon: FacebookOutlined,
      onClick: () => {
        toogleLoading();
        /* dispatch(showAuthLoader());
        dispatch(userFacebookSignIn()); */
      }
    },
    {
      name: 'Twitter',
      icon: TwitterOutlined,
      onClick: () => {

        /* dispatch(showAuthLoader());
        dispatch(userTwitterSignIn()); */
      }
    }
  ]

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        /* dispatch(hideMessage()); */
      }, 100);
    }
  }, [showMessage, dispatch]);

  useEffect(() => {
    authUser !== null && false && history.push('/');
  }, [authUser, history]);


  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    console.log("finish", values)
    /* dispatch(showAuthLoader());
    dispatch(userSignIn(values)); */
  };

  const Banner = useMemo(() => (
    <div className="gx-app-logo-content">
      <div className="gx-app-logo-content-bg">
        <img
          src="https://images.unsplash.com/photo-1573790285658-87d7586eec7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt='Neature'
        />
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
  ), []);

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          {Banner}
          <div className="gx-app-login-content">
            <div className="gx-signin-form gx-form-row0" >
              <Form.Item>
                <span>
                  <IntlMessages id="appModule.iAccept" /> {' '}
                </span>
                <span className="gx-signup-form-forgot gx-link">
                  <IntlMessages id="appModule.termAndCondition" />
                </span>
              </Form.Item>
              {(buttonsSocialLogin) && buttonsSocialLogin.map((btn) => (
                <button
                  size="large" type="text" className={`button-login button-${btn.name.toLowerCase()}`}
                  onClick={btn.onClick}
                >
                  <btn.icon />
                  <IntlMessages id="app.userAuth.signIn" /> {` ${btn.name}`}
                </button>
              ))}
            </div>
          </div>
          {loading && <Loader />}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
