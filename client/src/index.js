import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ComputerContextProvider from "./context/computer-context"
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<ComputerContextProvider><BrowserRouter><App /></BrowserRouter></ComputerContextProvider>, document.getElementById("root"));
registerServiceWorker();
