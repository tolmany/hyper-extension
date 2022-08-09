import React from "react";
import { Routes, Route } from "react-router-dom";
import ExtensionDetails from "../Pages/ExtensionDetails";
import Help from "../Pages/Help";
import Login from "../Pages/Login";
import MainPage from "../Pages/MainPage";
import NothingDisplay from "../Pages/NothingDisplay";

const RouterController = () => {
  return (
    <Routes>
      <Route path="/" element={<ExtensionDetails />} />
      <Route path="/help" element={<Help />} />
      <Route path="/login" element={<Login />} />
      <Route path="/nothing" element={<NothingDisplay />} />
      <Route path="/mainpage" element={<MainPage />} />
    </Routes>
  );
};

export default RouterController;
