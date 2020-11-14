import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Reports } from '../components/reports';
import { Login } from '../components/login';
import { Layout } from '../components/layout';
import { ROUTES } from "./routes";
import ReportForm from "../components/report-form"

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.REPORTS}>
        <Layout>
          <Reports />
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
      <Route path="/">
        <Redirect to={ROUTES.REPORTS} />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
