import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import { BrowserRouter as Router } from "react-router-dom";
import RootContext from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RootContext>
    <Router>
      <Root />
    </Router>
  </RootContext>
);
