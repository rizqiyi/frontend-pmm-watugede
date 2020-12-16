import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);
  const isSuccess = useSelector((state) => state.users.success);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && isSuccess ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
