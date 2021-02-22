import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from 'react-hot-loader';

import NextApp from './NextApp';
import registerServiceWorker from './registerServiceWorker';


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

registerServiceWorker();

render(NextApp);

if (module.hot) {
  module.hot.accept('./NextApp', () => {
    render(NextApp);
  });
}
