import HomeTemplate from "../containers/Home";
import AboutPage from "../containers/Home/AboutPage";
import DetailMoviePage from "../containers/Home/DetailMoviePage";
import HomePage from "../containers/Home/HomePage";
import ListMovie from "../containers/Home/ListMoviePage";
import LoginPage from "../containers/Home/LoginPage";
import BookingTicketPage from "../containers/Home/BookingTicketPage";

const routesHome = [
  {
    eaxct: true,
    path: "/",
    component: HomePage,
  },
  {
    eaxct: false,
    path: "/about",
    component: AboutPage,
  },
  {
    eaxct: false,
    path: "/list-movie",
    component: ListMovie,
  },
  {
    eaxct: false,
    path: "/detail-movie/:id",
    component: DetailMoviePage,
  },
  {
    eaxct: false,
    path: "/booking/:id",
    component: BookingTicketPage,
  },
  {
    eaxct: false,
    path: "/login",
    component: LoginPage,
  },
];
const routesAdmin = [];

function renderRouteHome() {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.eaxct}
        path={route.path}
        Component={route.component}
      />
    );
  });
}
export { renderRouteHome };
