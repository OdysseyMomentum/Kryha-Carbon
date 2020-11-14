import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Login } from '../components/login';
import { Layout } from '../components/layout';
import { ROUTES } from "./routes";
import ReportForm from "../components/report-form"
import { Verify } from '../components/verify';
import { Product } from "../components/product";

export const Router = () => {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.LANDING}>
        <Login />
      </Route>
      <Route exact path={ROUTES.REPORT}>
        <Layout>
          <ReportForm />
        </Layout>
      </Route>
      <Route exact path={ROUTES.PRODUCT}>
      <Layout>
        <Product />
      </Layout>
    </Route>
      <Route exact path={ROUTES.VERIFY}>
        <Layout>
          <Verify />
        </Layout>
      </Route>
      <Route path="/">
        <Redirect to={ROUTES.LANDING} />
      </Route>
    </Switch>
  </BrowserRouter>)
}


export default Router;
