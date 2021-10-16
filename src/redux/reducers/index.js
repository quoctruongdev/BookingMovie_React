import { combineReducers } from "redux";
import detailMovieReducer from "../../containers/Home/DetailMoviePage/modules/reducer";

const rootReducer = combineReducers({
    detailMovieReducer,
});

export default rootReducer;
