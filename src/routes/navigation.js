import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { MiniDrawer } from "../components/drawer/drawer";
import LoginPage from "../pages/login/login";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";
import PendudukDetailsPage from "../pages/penduduk/details/details";
import MutasiKeluarPage from "../pages/penduduk/mutasi-keluar/mutasi-keluar";
import DashboardPage from "../pages/dashboard/dashboard";
import { PendudukPage } from "../pages/penduduk/penduduk";
import PendudukInsertPage from "../pages/penduduk/insert/insert";
import { PendudukMasukPage } from "../pages/penduduk-masuk/penduduk-masuk";
import PendudukKeluarPage from "../pages/penduduk-keluar/penduduk-keluar";
import { KelahiranPage } from "../pages/kelahiran/kelahiran";
import { KematianPage } from "../pages/kematian/kematian";
import { ActivityPage } from "../pages/activity/activity";
import { PageNotFound } from "../pages/404-page/page-not-found";
import { PendudukKeluarDetailsPage } from "../pages/penduduk-keluar/details/penduduk-keluar-details";

const Navigations = () => {
  return (
    <>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} />
        <MiniDrawer>
          <Switch>
            <PrivateRoute component={DashboardPage} exact path="/" />
            <PrivateRoute component={PendudukPage} exact path="/penduduk" />
            <PrivateRoute
              component={PendudukDetailsPage}
              path="/penduduk/:id/d"
            />
            <PrivateRoute
              component={PendudukKeluarDetailsPage}
              path="/penduduk_keluar/:id/d"
            />
            <PrivateRoute
              component={MutasiKeluarPage}
              path="/penduduk/p/mutasi_keluar/:id"
            />
            <PrivateRoute
              component={PendudukInsertPage}
              path="/penduduk/insert"
            />
            <PrivateRoute
              component={PendudukMasukPage}
              path="/penduduk_masuk"
            />
            <PrivateRoute
              component={PendudukKeluarPage}
              path="/penduduk_keluar"
            />

            <PrivateRoute component={KelahiranPage} path="/kelahiran" />
            <PrivateRoute component={KematianPage} path="/kematian" />
            <PrivateRoute component={ActivityPage} path="/activity" />
            <PrivateRoute component={PageNotFound} path="/404" />
            <Redirect to="/404" />
          </Switch>
        </MiniDrawer>
      </Switch>
    </>
  );
};

export default Navigations;
