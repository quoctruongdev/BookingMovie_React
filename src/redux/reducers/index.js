import { combineReducers } from "redux";
import addCarouselReducer from "../../containers/Home/_component/Carousel/modules/reducer";
import authReducer from "../../containers/Admin/AuthPage/modules/reducer";
import listMovieReducer from "../../containers/Home/ListMoviePage/modules/reducer";

const rootReducer = combineReducers({
  addCarouselReducer,
  authReducer,
  listMovieReducer,
});

export default rootReducer;
