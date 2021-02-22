import { AUTH_IN, AUTH_OUT } from '../actions/type.actions';

const initialState = {
  user: null,
  logged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_OUT: {
      return initialState;
    }
    case AUTH_IN: {
      return {
        logged: true,
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
