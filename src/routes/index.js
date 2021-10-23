import { lazy } from "react";

import HomeTemplate from "../containers/Home";
import AdminTemplate from "../containers/Admin";
const routesHome = [
  {
    eaxct: true,
    path: "/",
    component: lazy(() => import("../containers/Home/HomePage")),
  },
  {
    eaxct: false,
    path: "/about",
    component: lazy(() => import("../containers/Home/AboutPage")),
  },
  {
    eaxct: false,
    path: "/list-movie",
    component: lazy(() => import("../containers/Home/ListMoviePage")),
  },
  {
    eaxct: false,
    path: "/detail-movie/:id",
    component: lazy(() => import("../containers/Home/DetailMoviePage")),
  },
  {
    eaxct: false,
    path: "/booking/:id",
    component: lazy(() => import("../containers/Home/BookingTicketPage/")),
  },
  {
    eaxct: false,
    path: "/mypage",
    component: lazy(() => import("../containers/Home/MyPage/")),
  },
];
const routesAdmin = [
  {
    eaxct: false,
    path: "/dashboard",
    component: lazy(() => import("../containers/Admin/Dashboard")),
  },
  {
    eaxct: false,
    path: "/add-user",
    component: lazy(() => import("../containers/Admin/AddUserPage")),
  },
  {
    eaxct: false,
    path: "/dashboard/film",
    component: lazy(() => import("../containers/Admin/Film/film")),
  },
  {
    eaxct: false,
    path: "/dashboard/user",
    component: lazy(() => import("../containers/Admin/User")),
  },
  {
    eaxct: false,
    path: "/dashboard/adduser",
    component: lazy(() => import("../containers/Admin/User/AddUser")),
  },
  {
    eaxct: false,
    path: "/dashboard/show",
    component: lazy(() => import("../containers/Admin/Showtime")),
  },
];

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
function renderRouteAdmin() {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.eaxct}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

export { renderRouteHome, renderRouteAdmin };
