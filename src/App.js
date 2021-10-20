import "./App.css";
import "./index.css";
import { Route, Switch, withRouter } from "react-router-dom";
import PageNotFound from "./containers/PagesNotFound";
import { renderRouteHome } from "./routes";
import LoginPage from "./containers/Home/LoginPage";
import ScrollToTop from "./components/ScrollToTop";
import { actTryLogin } from "./containers/Home/LoginPage/modules/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch actTryLogin
    dispatch(actTryLogin(props.history));
  }, []);

  return (
    <>
      <ScrollToTop />
      <Switch>
        {renderRouteHome()}
        <Route path="/login" component={LoginPage} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </>
  );
}

export default withRouter(App);
