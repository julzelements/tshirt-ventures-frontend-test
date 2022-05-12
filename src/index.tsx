import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoices from "./routes/Invoices";
import Login from "./routes/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="invoices" element={<Invoices/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
