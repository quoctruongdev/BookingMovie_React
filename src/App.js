import "./App.css";
import "./index.css";
import { Route, Switch, withRouter } from "react-router-dom";
import { renderRouteHome, renderRouteAdmin } from "./routes";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
// import { actTryLogin } from "./containers/Home/LoginPage/modules/actions";
import { actTryLogin } from "./containers/Admin/AuthPage/modules/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actTryLogin(props.history));
  }, []);

  return (
    <Suspense
      fallback={
        <>
          <Loader />
        </>
      }
    >
      <ScrollToTop />
      <Switch>
        {renderRouteHome()}
        {renderRouteAdmin()}

        <Route
          path="/auth"
          component={lazy(() => import("./containers/Admin/AuthPage"))}
        />
        <Route
          path="/login"
          component={lazy(() => import("./containers/Home/LoginPage"))}
        />
        <Route
          path="/signup"
          component={lazy(() => import("./containers/Home/SignUpPage"))}
        />
        <Route
          path=""
          component={lazy(() => import("./containers/PagesNotFound"))}
        />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
