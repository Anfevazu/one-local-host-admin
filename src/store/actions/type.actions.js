
// AUTH
export const AUTH_IN = 'AUTH_IN';
export const AUTH_OUT = 'AUTH_OUT';

// commons
// Customizer const
export const WINDOW_WIDTH = 'WINDOW-WIDTH';
export const SWITCH_LANGUAGE = 'SWITCH-LANGUAGE';
export const TOGGLE_COLLAPSED_NAV = 'TOGGLE_COLLAPSE_MENU';
//Contact Module const
export const FETCH_START = 'fetch_start';
export const FETCH_ERROR = 'fetch_error';
export const FETCH_SUCCESS = 'fetch_success';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';
export const ON_SHOW_LOADER = 'ON_SHOW_LOADER';
export const ON_HIDE_LOADER = 'ON_HIDE_LOADER';

export const getAction = (type, payload = null) => ({
  type,
  payload,
});
