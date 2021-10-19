import * as ActionType from "./constants";

const initialStatae = {
  loading: false,
  data: null,
  error: null,
};

const cineManagementReducer = (state = initialStatae, action) => {
  switch (action.type) {
    case ActionType.CINEMA_MANAGEMENT_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.CINEMA_MANAGEMENT_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.CINEMA_MANAGEMENT_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default cineManagementReducer;
