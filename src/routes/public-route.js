import React from "react";
import { Route, Redirect } from "react-router-dom";
import checkAuth from "./check-auth";

const PublicRoute = ({ component: Component, ...rest }) => {
  console.log(`${checkAuth()} from public`);
  return (
    <Route
      {...rest}
      render={(props) => {
        return checkAuth() ? <Redirect to="/" /> : <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
