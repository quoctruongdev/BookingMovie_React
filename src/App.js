import "./App.css";
import "./index.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import PageNotFound from "./containers/PagesNotFound";
import { renderRouteHome } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRouteHome()}

        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
