import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login } from '../components/login';
import { Layout } from '../components/layout';
import { ROUTES } from "./routes";
import ReportForm from "../components/report-form"
import { Verify } from '../components/verify';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.LOGIN}>
      <ReportForm />
      </Route>
      <Route exact path={ROUTES.REPORT}>

        <Layout>
          <ReportForm />
        </Layout>
      </Route>
      <Route exact path={ROUTES.VERIFY}>
        <Layout>
          <Verify />
        </Layout>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
