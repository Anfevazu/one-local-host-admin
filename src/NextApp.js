import React from "react";
import { Provider } from 'react-redux'

import "styles/wieldy.less";
import "./firebase/firebase";
import "assets/vendors/style";
import initStore from './store/store';
import App from "./containers/App/index";


const NextApp = () =>
  <Provider store={initStore()}>
      <App />
  </Provider>;


export default NextApp;
