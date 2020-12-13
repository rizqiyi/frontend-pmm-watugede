import React from "react";
import { Route, Switch } from "react-router-dom";
import { MiniDrawer } from "../../components/drawer/drawer";
import { DashboardPage } from "../dashboard/dashboard";
import { LoginPage } from "../login/login";
import { PendudukPage } from "../penduduk/penduduk";
import { PendudukMasukPage } from "../penduduk-masuk/penduduk-masuk";
import { PendudukKeluarPage } from "../penduduk-keluar/penduduk-keluar";
import { KelahiranPage } from "../kelahiran/kelahiran";
import { KematianPage } from "../kematian/kematian";
import { ActivityPage } from "../activity/activity";

export const Navigations = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <MiniDrawer>
          {/* {["/dashboard","/penduduk", "penduduk"]} */}
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/penduduk" component={PendudukPage} />
          <Route path="/penduduk_masuk" component={PendudukMasukPage} />
          <Route path="/penduduk_keluar" component={PendudukKeluarPage} />
          <Route path="/kelahiran" component={KelahiranPage} />
          <Route path="/kematian" component={KematianPage} />
          <Route path="/activity" component={ActivityPage} />
        </MiniDrawer>
      </Switch>
    </React.Fragment>
  );
};
