import * as ActionType from "./constants";
import { api } from "./../../../../../utils/apiUtils";

export const actAddMovie = (movie) => {
  return (dispatch) => {
    dispatch(actAddMovieRequest());
    api
      .post("QuanLyPhim/CapNhatPhimUpload", movie)
      .then((result) => {
        dispatch(actAddMovieSuccess(result.data.content));
      })
      .catch((err) => {
        dispatch(actAddMovieFailed(err));
      });
  };
};

const actAddMovieRequest = () => {
  return {
    type: ActionType.ADD_MOVIE_REQUEST,
  };
};

const actAddMovieSuccess = (data) => {
  return {
    type: ActionType.ADD_MOVIE_SUCCESS,
    payload: data,
  };
};

const actAddMovieFailed = (error) => {
  return {
    type: ActionType.ADD_MOVIE_FAILED,
    payload: error,
  };
};
