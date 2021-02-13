import React from "react";
import {Layout} from "antd";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

import Sidebar from "../Sidebar/index";
import AboveHeader from "../Topbar/AboveHeader/index";
import BelowHeader from "../Topbar/BelowHeader/index";
import InsideHeader from "../Topbar/InsideHeader/index";
import HorizontalDark from "../Topbar/HorizontalDark/index";
import HorizontalDefault from "../Topbar/HorizontalDefault/index";

import Topbar from "../Topbar/index";

import {
  NAV_STYLE_FIXED,
  NAV_STYLE_DRAWER,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
} from "../../constants/ThemeSetting";
import {footerText} from "util/config";
import NoHeaderNotification from "../Topbar/NoHeaderNotification/index";

const {Content, Footer} = Layout;

const MainApp = ({ children }) => {

  const { navStyle } = useSelector(({settings}) => settings);

  const getContainerClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DARK_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-container-wrap";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-container-wrap";
      default:
        return '';
    }
  };
  const getNavStyles = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL :
        return <HorizontalDefault/>;
      case NAV_STYLE_DARK_HORIZONTAL :
        return <HorizontalDark/>;
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL :
        return <InsideHeader/>;
      case NAV_STYLE_ABOVE_HEADER :
        return <AboveHeader/>;
      case NAV_STYLE_BELOW_HEADER :
        return <BelowHeader/>;
      case NAV_STYLE_FIXED :
        return <Topbar/>;
      case NAV_STYLE_DRAWER :
        return <Topbar/>;
      case NAV_STYLE_MINI_SIDEBAR :
        return <Topbar/>;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR :
        return <NoHeaderNotification/>;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR :
        return <NoHeaderNotification/>;
      default :
        return null;
    }
  };


  return (
    <Layout className="gx-app-layout">
      <Sidebar/>
      <Layout>
        {getNavStyles(navStyle)}
        <Content className={`gx-layout-content ${getContainerClass(navStyle)} `}>
          {children}
          <Footer>
            <div className="gx-layout-footer-content">
              {footerText}
            </div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  )
};

MainApp.protTypes = {
  children: PropTypes.element,
};

export default MainApp;

