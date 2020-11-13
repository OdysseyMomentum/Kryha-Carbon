import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from '../components/home';
import { ROUTES } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
