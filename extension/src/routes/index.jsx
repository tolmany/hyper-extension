import React from "react";
import { Routes, Route } from "react-router-dom";
import ExtensionDetails from "../Pages/ExtensionDetails";
import Login from "../Pages/Login";
import Help from "../Pages/Help";
import Search from "../Pages/Search";

const RouterController = () => {
  return (
    <Routes>
      <Route path="/" element={<ExtensionDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/help" element={<Help />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default RouterController;
