import React from "react";
import { Switch } from "react-router-dom";
import { MiniDrawer } from "../components/drawer/drawer";
import DashboardPage from "../pages/dashboard/dashboard";
import LoginPage from "../pages/login/login";
import { PendudukPage } from "../pages/penduduk/penduduk";
import PendudukDetailsPage from "../pages/penduduk/details/details";
import PendudukInsertPage from "../pages/penduduk/insert/insert";
import { PendudukMasukPage } from "../pages/penduduk-masuk/penduduk-masuk";
import { PendudukKeluarPage } from "../pages/penduduk-keluar/penduduk-keluar";
import { KelahiranPage } from "../pages/kelahiran/kelahiran";
import { KematianPage } from "../pages/kematian/kematian";
import { ActivityPage } from "../pages/activity/activity";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";
import MutasiKeluarPage from "../pages/penduduk/mutasi-keluar/mutasi-keluar";

const Navigations = () => {
  return (
    <React.Fragment>
      <Switch>
        <PublicRoute path="/login" exact component={LoginPage} />
        <MiniDrawer>
          <PrivateRoute exact component={DashboardPage} path="/" />
          <PrivateRoute exact component={PendudukPage} path="/penduduk" />
          <PrivateRoute
            component={PendudukDetailsPage}
            path="/penduduk/:id/d"
          />
          <PrivateRoute
            component={MutasiKeluarPage}
            path="/penduduk/p/mutasi_keluar/:id"
          />
          <PrivateRoute
            component={PendudukInsertPage}
            path="/penduduk/insert"
          />
          <PrivateRoute component={PendudukMasukPage} path="/penduduk_masuk" />
          <PrivateRoute
            component={PendudukKeluarPage}
            path="/penduduk_keluar"
          />
          <PrivateRoute component={KelahiranPage} path="/kelahiran" />
          <PrivateRoute component={KematianPage} path="/kematian" />
          <PrivateRoute component={ActivityPage} path="/activity" />
        </MiniDrawer>
      </Switch>
    </React.Fragment>
  );
};

export default Navigations;
