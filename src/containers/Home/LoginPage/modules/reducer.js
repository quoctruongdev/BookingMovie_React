import * as ActionType from "./constants";

const initialState = {
  loading: false,
  errorLogin: null,
  dataLogin: null,
  dataSignUp: null,
  errorSignUp: null,
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      state.loading = true;
      state.dataLogin = null;
      state.errorLogin = null;
      return { ...state };

    case ActionType.LOGIN_SUCCESS:
      state.loading = false;
      state.dataLogin = action.payload;
      state.errorLogin = null;
      return { ...state };

    case ActionType.LOGIN_FAILED:
      state.loading = false;
      state.dataLogin = null;
      state.errorLogin = action.payload;
      return { ...state };

    case ActionType.SIGNUP_REQUEST:
      state.loading = true;
      state.dataSignUp = null;
      state.errorSignUp = null;
      return { ...state };

    case ActionType.SIGNUP_SUCCESS:
      state.loading = false;
      state.dataSignUp = action.payload;
      state.errorSignUp = null;
      return { ...state };

    case ActionType.SIGNUP_FAILED:
      state.loading = false;
      state.dataSignUp = null;
      state.errorSignUp = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default logInReducer;
