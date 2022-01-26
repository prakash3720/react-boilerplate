import React, { Component } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { Outlet, Navigate } from "react-router-dom";

export default class PrivateRoute extends Component {
  render() {
    let isLoggedIn = reactLocalStorage.get("authToken");
    if (isLoggedIn) {
      return <Outlet />;
    }
    return <Navigate to="/login" replace />;
  }
}
