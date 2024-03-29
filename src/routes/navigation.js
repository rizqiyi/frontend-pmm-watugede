import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { MiniDrawer } from "../components/drawer/drawer";
import LoginPage from "../pages/login/login";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";
import DashboardPage from "../pages/dashboard/dashboard";
import PendudukMasukPage from "../pages/penduduk-masuk/penduduk-masuk";
import PendudukMasukInsertPage from "../pages/penduduk-masuk/insert/insert";
import DetailPendudukMasukPage from "../pages/penduduk-masuk/details/details";
import InsertPendudukMasukAnggotaPage from "../pages/penduduk-masuk/details/insert/insert";
import UpdateAnggotaPendudukMasukPage from "../pages/penduduk-masuk/details/update-data/update";
import PendudukKeluarPage from "../pages/penduduk-keluar/penduduk-keluar";
import PendudukKeluarDetailPage from "../pages/penduduk-keluar/details/details";
import PendudukDetailsPage from "../pages/penduduk/details/details";
import InsertKeteranganKeluarPage from "../pages/penduduk-keluar/insert-keterangan/insert-keterangan";
import KelahiranPage from "../pages/kelahiran/kelahiran";
import KelahiranDetailsPage from "../pages/kelahiran/details/details";
import PreviewPdfKelahiranPage from "../pages/kelahiran/preview-pdf/preview-pdf";
import KelahiranInsertPage from "../pages/kelahiran/insert-page/insert-page";
import KematianPage from "../pages/kematian/kematian";
import KematianDetailsPage from "../pages/kematian/details/details";
import PreviewPdfKematianPage from "../pages/kematian/preview-pdf/preview-pdf";
import AdminActivityPage from "../pages/activity/activity";
import { PageNotFound } from "../pages/404-page/page-not-found";
import KartuKeluargaPage from "../pages/kartu-keluarga/kartu-keluarga";
import DetailKartuKeluargaPage from "../pages/kartu-keluarga/details/details";
import DetailKartuKeluargaInsertPage from "../pages/kartu-keluarga/details/insert/insert";
import DetailKartuKeluargaUpdatePage from "../pages/kartu-keluarga/details/update-keluarga/update-keluarga";
import KartuKeluargaInsertPage from "../pages/kartu-keluarga/insert/insert";
import Users from "../pages/users";
import PreviewPdfPendudukKeluarPage from "../pages/penduduk-keluar/preview-pdf/preview-pdf";

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
              path="/kartu_keluarga/:id_kk/i"
            />
            <PrivateRoute
              component={DetailKartuKeluargaUpdatePage}
              path="/kartu_keluarga/:id/d/update"
            />
            <PrivateRoute
              component={DetailKartuKeluargaPage}
              path="/kartu_keluarga/:id_kk/d"
            />
            <PrivateRoute
              component={UpdateAnggotaPendudukMasukPage}
              path="/penduduk_masuk/:id/u/:id_kk"
            />
            <PrivateRoute
              component={InsertPendudukMasukAnggotaPage}
              path="/penduduk_masuk/:id_kk/i"
            />
            <PrivateRoute
              component={DetailPendudukMasukPage}
              path="/penduduk_masuk/:id_kk/d"
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
              component={PreviewPdfPendudukKeluarPage}
              path="/penduduk_keluar/:id/d/preview"
            />
            <PrivateRoute
              component={PendudukKeluarDetailPage}
              path="/penduduk_keluar/:id/d"
            />
            <PrivateRoute
              component={InsertKeteranganKeluarPage}
              path="/penduduk_keluar/:id/i/k"
            />
            <PrivateRoute
              component={PendudukKeluarPage}
              path="/penduduk_keluar"
            />
            <PrivateRoute
              component={KelahiranInsertPage}
              path="/kelahiran/insert"
            />
            <PrivateRoute
              component={PreviewPdfKelahiranPage}
              path="/kelahiran/:id/d/preview"
            />
            <PrivateRoute
              component={KelahiranDetailsPage}
              path="/kelahiran/:id/d"
            />
            <PrivateRoute component={KelahiranPage} path="/kelahiran" />
            <PrivateRoute
              component={PreviewPdfKematianPage}
              path="/kematian/:id/d/preview"
            />
            <PrivateRoute
              component={KematianDetailsPage}
              path="/kematian/:id/d"
            />
            <PrivateRoute component={KematianPage} path="/kematian" />
            <PrivateRoute component={AdminActivityPage} path="/activity" />
            <PrivateRoute
              component={PendudukDetailsPage}
              path="/penduduk/:id/d"
            />
            <PrivateRoute component={Users} path="/users" />
            <PrivateRoute component={PageNotFound} path="/404" />
            <Redirect to="/404" />
          </Switch>
        </MiniDrawer>
      </Switch>
    </>
  );
};

export default Navigations;
