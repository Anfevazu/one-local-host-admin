import { Popover, Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookFilled";

import useAuth from '../hooks/auth.hook';
import useSetting from '../hooks/settings.hook';
import IntlMessages from "../util/IntlMessages";
import languageData from '../constants/languageData';
import CustomScrollbars from '../util/CustomScrollbars';

const SignIn = () => {
  const history = useHistory();
  const { locale, setLocale } = useSetting();
  const { user, signIn: setAuth } = useAuth();

  const buttonsSocialLogin = [
    {
      name: 'Google',
      icon: GoogleOutlined,
      onClick: () => setAuth('google')
    },
    {
      name: 'Facebook',
      icon: FacebookOutlined,
      onClick: () => setAuth('facebook')
    },
    {
      name: 'Twitter',
      icon: TwitterOutlined,
      onClick: () => setAuth('twitter')
    }
  ]

  const languageMenu = () => (
    <CustomScrollbars className="gx-popover-lang-scroll">
      <ul className="gx-sub-popover">
        {languageData.map(language =>
          <li className="gx-media gx-pointer" key={JSON.stringify(language)} onClick={(e) => setLocale(language)}>
            <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`}/>
            <span className="gx-language-text">{language.name}</span>
          </li>
        )}
      </ul>
    </CustomScrollbars>);

  useEffect(() => {
    user && history.push('/');
  }, [user, history]);

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
      </div>
    ), [locale.locale]);

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          {Banner}
          <div className="gx-app-login-content">
            <div className="gx-signin-form gx-form-row0" >
              <Row >
                <Col span={6}></Col>
                <Col span={8} offset={8} >
                  <img alt="One Local Host" className="gx-signin-logo-image" src={require("assets/images/logo-one.png")} />
                </Col>
              </Row>
              <Row>
                <div>
                  <span>
                    <IntlMessages id="appModule.iAccept" />
                  </span>
                  <span className="gx-signup-form-forgot gx-link">
                    {' '} <IntlMessages id="appModule.termAndCondition" />
                  </span>
                </div>
              </Row>
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
            <Row>
              <Col span={12} >
                <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={languageMenu()}
                    trigger="click">
                  <span className="gx-pointer gx-flex-row gx-align-items-center">
                    <i className={`flag flag-24 flag-${locale.icon}`}/>
                    <span className="gx-pl-2 gx-language-name">{locale.name}</span>
                    <i className="icon icon-chevron-down gx-pl-2"/>
                  </span>
              </Popover>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
