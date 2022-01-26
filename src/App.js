import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

import ListFiles from "./App/List";
import ManageFile from "./App/ManageFile";

import PrivateRoute from "./Components/Routes/PrivateRoute";
import NonPrivateRoute from "./Components/Routes/NonPrivateRoute";

export default class MainRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/app/files" element={<ListFiles />} />
            <Route path="/app/files/:fileId" element={<ManageFile />} />
            <Route
              path="/app/*"
              element={<Navigate to="/app/files" replace />}
            />
          </Route>
          <Route
            path="/login"
            element={
              <NonPrivateRoute>
                <Login />
              </NonPrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <NonPrivateRoute>
                <Register />
              </NonPrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/app" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
