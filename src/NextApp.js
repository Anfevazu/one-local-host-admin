import React, { Suspense } from "react";
import { Provider } from 'react-redux'
import { FirebaseAppProvider } from 'reactfire';



import "styles/wieldy.less";
import "assets/vendors/style";
import initStore from './store/store';
import App from "./containers/App/index";
import { configFirebase } from './constants/config';
import Loader from './components/LoaderPage/LoaderPage';

const NextApp = () =>
  <Suspense fallback={<Loader />} >
    <FirebaseAppProvider firebaseConfig={configFirebase} >
      <Provider store={initStore()}>
          <App />
      </Provider>
    </FirebaseAppProvider>
  </Suspense>;


export default NextApp;
