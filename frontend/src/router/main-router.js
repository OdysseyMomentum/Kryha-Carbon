import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Login } from '../components/login';
import { Layout } from '../components/layout';
import { Reports } from '../components/reports';
import ReportForm from "../components/report-form"
import { Verify } from '../components/verify';
import { Products } from "../components/products";
import { ProductForm } from "../components/product-form";
import { ROUTES } from "./routes";
import VerifyForm from "../components/verify-form";
import {Graph} from '../components/nodedemo/graph'

export const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.LANDING}>
          <Login />
        </Route>
        <Route exact path={ROUTES.DEMO}>
        <Layout>
          <Graph/>
        </Layout>
      </Route>
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
        <Route exact path={ROUTES.VERIFY}>
          <Layout>
            <Verify />
          </Layout>
        </Route>
        <Route exact path={ROUTES.VERIFY_FORM}>
          <Layout>
            <VerifyForm />
          </Layout>
        </Route>
        <Route exact path={ROUTES.PRODUCTS}>
          <Layout>
            <Products />
          </Layout>
        </Route>
        <Route exact path={ROUTES.PRODUCT_FORM}>
          <Layout>
            <ProductForm />
          </Layout>
        </Route>
        <Route path="/">
          <Redirect to={ROUTES.REPORTS} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export default Router;
