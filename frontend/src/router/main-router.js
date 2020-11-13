import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Routing
import { ROUTES } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
