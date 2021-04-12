import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import RestaurantDetailRoute from "./routes/RestaurantDetailRoute";
import ListRoute from "./routes/ListRoute";
import LandingRoute from "./routes/LandingRoute";
import UpdateRoute from "./routes/UpdateRoute";
import NotFoundRoute from "./routes/NotFoundRoute";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ContextProvider } from "./context";

// make sure to wrap App in context so that it can consume the context object
function App() {
  return (
    <ContextProvider>
      <div className="App container">
        <Switch>
          <Route exact path={"/"} component={LandingRoute} />
          <Route exact path={"/restaurants"} component={ListRoute} />
          <Route
            exact
            path={"/restaurants/:id"}
            component={RestaurantDetailRoute}
          />
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
