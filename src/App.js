import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantDetailRoute from "./routes/RestaurantDetailRoute";
import HomeRoute from "./routes/HomeRoute";
import LandingRoute from "./routes/LandingRoute";
import UpdateRoute from "./routes/UpdateRoute";
import NotFoundRoute from "./routes/NotFoundRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={LandingRoute} />
        <Route exact path={"/home"} component={HomeRoute} />
        <Route
          exact
          path={"/restaurants/:id"}
          component={RestaurantDetailRoute}
        />
        <Route exact path={"/restaurants/:id/update"} component={UpdateRoute} />
        <Route component={NotFoundRoute} />
      </Switch>
    </div>
  );
}

export default App;
