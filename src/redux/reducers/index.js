import { combineReducers } from "redux";
import detailMovieReducer from "../../containers/Home/DetailMoviePage/modules/reducer";
import bookingTicketReducer from "../../containers/Home/BookingTicketPage/modules/reducer";
import logInReducer from "../../containers/Home/LoginPage/modules/reducer";

const rootReducer = combineReducers({
    detailMovieReducer,
    bookingTicketReducer,
    logInReducer,
});

export default rootReducer;
