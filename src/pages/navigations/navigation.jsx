import React from "react";
import { Route, Switch } from "react-router-dom";
import { MiniDrawer } from "../../components/drawer/drawer";
import { DashboardPage } from "../dashboard/dashboard";
import LoginPage from "../login/login";
import { PendudukPage } from "../penduduk/penduduk";
import { PendudukMasukPage } from "../penduduk-masuk/penduduk-masuk";
import { PendudukKeluarPage } from "../penduduk-keluar/penduduk-keluar";
import { KelahiranPage } from "../kelahiran/kelahiran";
import { KematianPage } from "../kematian/kematian";
import { ActivityPage } from "../activity/activity";
import PrivateRoute from "../../components/private-routes/private-route";

export const Navigations = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <MiniDrawer>
          <PrivateRoute exact component={DashboardPage} path="/" />
          <PrivateRoute component={PendudukPage} path="/penduduk" />
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
