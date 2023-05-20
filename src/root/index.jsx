import React from "react";
import Helmet from "./helmet";
import { GlobalStyles } from "./style";
import Home from "./../pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import GetLang from "../resources/getLang.js";
import ToTopButton from "../components/ToTopButton";

const Root = () => {
  return (
    <>
      <Helmet />
      <GlobalStyles />
      <ToTopButton />
      <GetLang />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </>
  );
};

export default Root;
