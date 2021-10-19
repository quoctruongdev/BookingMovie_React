import * as ActionType from "./constants";

const initialStatae = {
  loading: false,
  data2: null,
  error: null,
};

const cineNameReducer = (state = initialStatae, action) => {
  switch (action.type) {
    case ActionType.CINEMA_NAME_REQUEST:
      state.loading = true;
      state.data2 = null;
      state.error = null;
      return { ...state };

    case ActionType.CINEMA_NAME_SUCCESS:
      state.loading = false;
      state.data2 = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.CINEMA_NAME_FAILED:
      state.loading = false;
      state.data2 = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default cineNameReducer;
