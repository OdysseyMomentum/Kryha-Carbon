import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login } from '../components/login';
import { Layout } from '../components/layout';
import { ROUTES } from "./routes";
import ReportForm from "../components/report-form"
import { Verify } from '../components/verify';
import { NodeDemo } from "../components/nodedemo/demo";

export const Router = () => {
  console.log(ROUTES)
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.DEMO}>
        <Layout>
          <NodeDemo/>
        </Layout>
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
      <Route exact path={ROUTES.LOGIN}>
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>)
}

export default Router;
