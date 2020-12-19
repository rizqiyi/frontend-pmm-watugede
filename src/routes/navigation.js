import React from "react";
import { Switch } from "react-router-dom";
import { MiniDrawer } from "../components/drawer/drawer";
import LoginPage from "../pages/login/login";
import PublicRoute from "./public-route";

const Navigations = () => {
  return (
    <>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} />
        <MiniDrawer />
      </Switch>
    </>
  );
};

export default Navigations;
