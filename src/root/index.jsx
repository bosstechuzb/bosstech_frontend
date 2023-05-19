import React from "react";
import Helmet from "./helmet";
import { GlobalStyles } from "./style";
import Home from "./../pages/Home";

const Root = () => {
  return (
    <>
      <Helmet />
      <GlobalStyles />
      <Home />
    </>
  );
};

export default Root;
