import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { BrowserRouter as Router } from "react-router-dom";

console.log(window.screen.width)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
