import React, { lazy } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

const SignInPage = lazy(() => import('../containers/SignIn'));
const SignUpPage = lazy(() => import('../containers/SignUp'));
const Home = lazy(() => import('../containers/Home'));

/* <div className="gx-main-content-wrapper">
</div> */
const App = () => (
  <Router>
    <Switch>
      <Route exact path='/signin' component={SignInPage}/>
      <Route exact path='/signup' component={SignUpPage}/>
      <Route exact path='/' component={Home} />
      <Redirect exact from="*" strict to="signin" />
    </Switch>
  </Router>
);

export default App;
