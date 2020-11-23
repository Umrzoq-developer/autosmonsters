import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { adminLoginSuccessMine } from "../Redux/adminLogin/adminLoginSelector";

const AdminProtectedRoute = ({ component: Component, ...rest }) => {
  const admintToken = localStorage.getItem("token");
  const successLogin = useSelector(adminLoginSuccessMine);

  return (
    <Route
      {...rest}
      render={(props) =>
        admintToken || successLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/admin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AdminProtectedRoute;
