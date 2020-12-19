import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./drawer.style";
import { AppBarComponent } from "../appbar/appbar";
import { ListItemComponent } from "../sidebar/sidebar";
import clsx from "clsx";
import PrivateRoute from "../../routes/private-route";
import { Switch } from "react-router-dom";
import DashboardPage from "../../pages/dashboard/dashboard";
import { PendudukPage } from "../../pages/penduduk/penduduk";
import PendudukDetailsPage from "../../pages/penduduk/details/details";
import PendudukInsertPage from "../../pages/penduduk/insert/insert";
import { PendudukMasukPage } from "../../pages/penduduk-masuk/penduduk-masuk";
import { PendudukKeluarPage } from "../../pages/penduduk-keluar/penduduk-keluar";
import { KelahiranPage } from "../../pages/kelahiran/kelahiran";
import { KematianPage } from "../../pages/kematian/kematian";
import { ActivityPage } from "../../pages/activity/activity";
import MutasiKeluarPage from "../../pages/penduduk/mutasi-keluar/mutasi-keluar";
import { PageNotFound } from "../../pages/404-page/page-not-found";

export const MiniDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <AppBarComponent handleDrawerOpen={handleDrawerOpen} open={open} />
      <ListItemComponent handleDrawerClose={handleDrawerClose} open={open} />
      <Box
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Box className={classes.toolbar} />
        <Switch>
          <PrivateRoute component={DashboardPage} exact path="/" />
          <PrivateRoute component={PendudukPage} path="/penduduk" />
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
          <PrivateRoute component={PageNotFound} />
        </Switch>
      </Box>
    </Box>
  );
};
