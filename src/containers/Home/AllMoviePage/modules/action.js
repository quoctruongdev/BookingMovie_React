import * as ActionType from "./constants";
import { apiClient } from "../../../../utils/apiUtils";

export const actFetchAllMovie = () => {
  return (dispatch) => {
    dispatch(actAllMovieRequest());
    apiClient
      .get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP11")
      .then((result) => {
        dispatch(actAllMovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actAllMovieFailed(error));
      });
  };
};

const actAllMovieRequest = () => {
  return {
    type: ActionType.ALL_MOVIE_REQUEST,
  };
};

const actAllMovieSuccess = (data) => {
  return {
    type: ActionType.ALL_MOVIE_SUCCESS,
    payload: data,
  };
};

const actAllMovieFailed = (error) => {
  return {
    type: ActionType.ALL_MOVIE_FAILED,
    payload: error,
  };
};
