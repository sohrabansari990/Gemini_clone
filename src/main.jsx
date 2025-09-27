import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Contextprovider from "./context/Contextprovider";
import 'remixicon/fonts/remixicon.css'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Contextprovider>
    <App />
  </Contextprovider>
);
