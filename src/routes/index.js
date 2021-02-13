import React, { Suspense, lazy } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Loader from '../components/LoaderPage/LoaderPage';


const SignInPage = lazy(() => import('../containers/SignIn'));

/* <div className="gx-main-content-wrapper">
</div> */
const App = () => (
  <Router>
    <Suspense fallback={<Loader />} >
      <Switch>
        <Route exact path='/signin' component={SignInPage}/>
        <Redirect exact from="*" strict to="signin" />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
