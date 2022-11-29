import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import EmployeeContext from "./components/employeeContext/EmployeeContext";

createRoot(document.getElementById("root")).render(
  <EmployeeContext>
    <App />
  </EmployeeContext>
);