import * as ActionType from "./constants";
import {apiFront} from "./../../../../../utils/apiUtils";

export const actFetchCineName = (id) => {
  return (dispatch) => {
    dispatch(actCineNameRequest());
    apiFront
      .get(`LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`)
      .then((result) => {
        dispatch(actCineNameSuccess(result.data.content));
      })
      .catch((err) => {
        dispatch(actCineNameFailed(err));
      });
  };
};

const actCineNameRequest = () => {
  return {
    type: ActionType.CINEMA_NAME_REQUEST,
  };
};

const actCineNameSuccess = (data) => {
  return {
    type: ActionType.CINEMA_NAME_SUCCESS,
    payload: data,
  };
};

const actCineNameFailed = (error) => {
  return {
    type: ActionType.CINEMA_NAME_FAILED,
    payload: error,
  };
};
