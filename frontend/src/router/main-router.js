import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from '../components/home';
import { ROUTES } from "./routes";
import ReportForm from "../components/report-form"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.REPORT_FORM}>
          <ReportForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
