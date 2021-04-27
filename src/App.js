import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import RestaurantRoute from "./routes/RestaurantRoute";
import ListRoute from "./routes/ListRoute";
import LandingRoute from "./routes/LandingRoute";
import UpdateRoute from "./routes/UpdateRoute";
import NotFoundRoute from "./routes/NotFoundRoute";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ContextProvider } from "./context";

function App() {
  return (
    <ContextProvider>
      <div className="App container">
        <Switch>
          <Route exact path={"/"} component={LandingRoute} />
          <Route exact path={"/restaurants"} component={ListRoute} />
          <Route exact path={"/restaurants/:id"} component={RestaurantRoute} />
          <Route
            exact
            path={"/restaurants/:id/update"}
            component={UpdateRoute}
          />
          <Route component={NotFoundRoute} />
        </Switch>
      </div>
    </ContextProvider>
  );
}

export default App;
