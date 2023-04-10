import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Appcontextprovider from "./Context/Appcontext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

 <Appcontextprovider>
  <App></App>
 </Appcontextprovider>
);
