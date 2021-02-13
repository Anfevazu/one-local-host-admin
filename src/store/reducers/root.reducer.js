import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import settingsReducer from './settings.reducer';

export default combineReducers({
  auth: authReducer,
  settings: settingsReducer,
});
