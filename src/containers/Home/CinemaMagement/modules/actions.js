import * as ActionType from "./constants";
import {apiFront} from "./../../../../utils/apiUtils";

export const actFetchCineManagement = () => {
  return (dispatch) => {
    dispatch(actCineManagementRequest());
    apiFront
      .get("QuanLyRap/LayThongTinHeThongRap")
      .then((result) => {
        dispatch(actCineManagementSuccess(result.data.content));
      })
      .catch((err) => {
        dispatch(actCineManagementFailed(err));
      });
  };
};

const actCineManagementRequest = () => {
  return {
    type: ActionType.CINEMA_MANAGEMENT_REQUEST,
  };
};

const actCineManagementSuccess = (data) => {
  return {
    type: ActionType.CINEMA_MANAGEMENT_SUCCESS,
    payload: data,
  };
};

const actCineManagementFailed = (error) => {
  return {
    type: ActionType.CINEMA_MANAGEMENT_FAILED,
    payload: error,
  };
};


