import React from "react";
import { Route, Redirect } from "react-router-dom";
import checkAuth from "./check-auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(`${checkAuth()} from private`);
  return (
    <Route
      {...rest}
      render={(props) => {
        return checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
