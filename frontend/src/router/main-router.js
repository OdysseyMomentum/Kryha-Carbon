import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from '../components/home';
import { Login } from '../components/login';
import { Layout } from '../components/layout';
import { ROUTES } from "./routes";
import ReportForm from "../components/report-form"

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route exact path={ROUTES.REPORT_FORM}>
        <Layout>
          <ReportForm />
        </Layout>
      </Route>
      <Route exact path={ROUTES.LOGIN}>
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
