import { combineReducers } from "redux";
import addCarouselReducer from "../../containers/Home/_component/Carousel/modules/reducer";
import authReducer from "../../containers/Admin/AuthPage/modules/reducer";
import listMovieReducer from "../../containers/Home/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/Home/DetailMoviePage/modules/reducer";
import cineManagementReducer from "../../containers/Home/CinemaMagement/modules/reducer";
import cineNameReducer from "../../containers/Home/_component/HomeMenu/modules/reducer";
import bookingTicketReducer from "../../containers/Home/BookingTicketPage/modules/reducer";
import logInReducer from "../../containers/Home/LoginPage/modules/reducer";
import addMovieReducer from "../../containers/Admin/Film/addNewFilm/modules/reducer";

const rootReducer = combineReducers({
  addCarouselReducer,
  authReducer,
  listMovieReducer,
  detailMovieReducer,
  cineManagementReducer,
  cineNameReducer,
  bookingTicketReducer,
  logInReducer,
  addMovieReducer,
});

export default rootReducer;
