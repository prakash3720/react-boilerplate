import React, { Component } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { Navigate } from "react-router-dom";

export default class NonPrivateRoute extends Component {
  render() {
    let isLoggedIn = reactLocalStorage.get("authToken");
    let { children } = this.props;
    if (!isLoggedIn) {
      return children;
    }
    return <Navigate to="/app" replace />;
  }
}
