import React from "react";
import { Routes, Route } from "react-router-dom";
import ExtensionDetails from "../Pages/ExtensionDetails";
import Help from "../Pages/Help";
import Login from "../Pages/Login";
import NothingDisplay from "../Pages/NothingDisplay";

const RouterController = () => {
  return (
    <Routes>
      <Route path="/" element={<ExtensionDetails />} />
      <Route path="/help" element={<Help />} />
      <Route path="/login" element={<Login />} />
      <Route path="/nothing" element={<NothingDisplay />} />
    </Routes>
  );
};

export default RouterController;
