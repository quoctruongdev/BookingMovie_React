import "./App.css";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import { renderRouteHome } from "./routes";
import { renderRouteAdmin } from "./routes";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <Suspense
      fallback={
        <>
          <Loader />
        </>
      }
    >
      <Switch>
        {renderRouteHome()}
        {renderRouteAdmin()}

        <Route
          path="/auth"
          component={lazy(() => import("./containers/Admin/AuthPage"))}
        />
        <Route
          path=""
          component={lazy(() => import("./containers/PagesNotFound"))}
        />
      </Switch>
    </Suspense>
  );
}

export default App;
