import { combineReducers } from "redux";
import addCarouselReducer from "../../containers/Home/_component/Carousel/modules/reducer";
import authReducer from "../../containers/Admin/AuthPage/modules/reducer";
import listMovieReducer from "../../containers/Home/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/Home/DetailMoviePage/modules/reducer";
import bookingTicketReducer from "../../containers/Home/BookingTicketPage/modules/reducer";
import logInReducer from "../../containers/Home/LoginPage/modules/reducer";
import signUpReducer from "../../containers/Home/SignUpPage/modules/reducer";
import thongTinRapReducer from "../../containers/Home/HomePage/modules/reducer";
import allMovieReducer from "../../containers/Home/AllMoviePage/modules/reducer";
import addMovieReducer from "../../containers/Admin/Film/addNewFilm/modules/reducer";
import addUserReducer from "../../containers/Admin/User/modules/reducer";
import userHistoryReducer from "../../containers/Home/MyPage/modules/reducer";

const rootReducer = combineReducers({
  addCarouselReducer,
  authReducer,
  listMovieReducer,
  detailMovieReducer,
  bookingTicketReducer,
  logInReducer,
  signUpReducer,
  thongTinRapReducer,
  allMovieReducer,
  addMovieReducer,
  addUserReducer,
  userHistoryReducer,
});

export default rootReducer;
