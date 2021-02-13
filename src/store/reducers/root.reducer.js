import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import commonReducer from './common.reducer';
import settingsReducer from './settings.reducer';

export default combineReducers({
  auth: authReducer,
  common: commonReducer,
  settings: settingsReducer,
});
