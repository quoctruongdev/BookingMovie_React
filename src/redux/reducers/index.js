import { combineReducers } from "redux";
import detailMovieReducer from "../../containers/Home/DetailMoviePage/modules/reducer";
import bookingTicketReducer from "../../containers/Home/BookingTicketPage/modules/reducer";

const rootReducer = combineReducers({
    detailMovieReducer,
    bookingTicketReducer,
});

export default rootReducer;
