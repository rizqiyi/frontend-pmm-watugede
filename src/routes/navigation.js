import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { MiniDrawer } from "../components/drawer/drawer";
import LoginPage from "../pages/login/login";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";
import PendudukDetailsPage from "../pages/penduduk/details/details";
import DashboardPage from "../pages/dashboard/dashboard";
import { PendudukPage } from "../pages/penduduk/penduduk";
import PendudukInsertPage from "../pages/penduduk/insert/insert";
import PendudukMasukPage from "../pages/penduduk-masuk/penduduk-masuk";
import PendudukMasukInsertPage from "../pages/penduduk-masuk/insert/insert";
import DetailPendudukMasukPage from "../pages/penduduk-masuk/details/details";
import InsertPendudukMasukAnggotaPage from "../pages/penduduk-masuk/details/insert/insert";
import UpdateAnggotaPendudukMasukPage from "../pages/penduduk-masuk/details/update-data/update";
import PendudukKeluarPage from "../pages/penduduk-keluar/penduduk-keluar";
import PendudukKeluarDetailPage from "../pages/penduduk-keluar/details/details";
import { KelahiranPage } from "../pages/kelahiran/kelahiran";
import KematianPage from "../pages/kematian/kematian";
import AdminActivityPage from "../pages/activity/activity";
import { PageNotFound } from "../pages/404-page/page-not-found";
import KartuKeluargaPage from "../pages/kartu-keluarga/kartu-keluarga";
import DetailKartuKeluargaPage from "../pages/kartu-keluarga/details/details";
import DetailKartuKeluargaInsertPage from "../pages/kartu-keluarga/details/insert/insert";
import DetailKartuKeluargaUpdatePage from "../pages/kartu-keluarga/details/update-keluarga/update-keluarga";
import KartuKeluargaInsertPage from "../pages/kartu-keluarga/insert/insert";

const Navigations = () => {
  return (
    <>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} />
        <MiniDrawer>
          <Switch>
            <PrivateRoute component={DashboardPage} exact path="/" />
            <PrivateRoute
              component={KartuKeluargaPage}
              exact
              path="/kartu_keluarga"
            />
            <PrivateRoute
              component={KartuKeluargaInsertPage}
              path="/kartu_keluarga/insert"
            />
            <PrivateRoute
              component={DetailKartuKeluargaInsertPage}
              path="/kartu_keluarga/:id_kk/d/:id_kepala/i"
            />
            <PrivateRoute
              component={DetailKartuKeluargaUpdatePage}
              path="/kartu_keluarga/:id/d/update"
            />
            <PrivateRoute
              component={DetailKartuKeluargaPage}
              path="/kartu_keluarga/:id_kk/d/:id_kepala"
            />
            <PrivateRoute
              component={PendudukKeluarDetailPage}
              path="/penduduk_keluar/:id/d"
            />
            <PrivateRoute component={PendudukPage} path="/penduduk" />
            <PrivateRoute
              component={PendudukDetailsPage}
              path="/penduduk/:id/d"
            />
            <PrivateRoute
              component={PendudukInsertPage}
              path="/penduduk/insert"
            />
            <PrivateRoute
              component={UpdateAnggotaPendudukMasukPage}
              path="/penduduk_masuk/a/:id/update"
            />
            <PrivateRoute
              component={InsertPendudukMasukAnggotaPage}
              path="/penduduk_masuk/:id_kk/d/:id_kepala/insert"
            />
            <PrivateRoute
              component={DetailPendudukMasukPage}
              path="/penduduk_masuk/:id_kk/d/:id_kepala"
            />
            <PrivateRoute
              component={PendudukMasukInsertPage}
              path="/penduduk_masuk/insert/kk"
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
            <PrivateRoute component={AdminActivityPage} path="/activity" />
            <PrivateRoute component={PageNotFound} path="/404" />
            <Redirect to="/404" />
          </Switch>
        </MiniDrawer>
      </Switch>
    </>
  );
};

export default Navigations;
