import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/navBarComponets/Navbar';
import "./global.css"
import Home from './components/pages/Home';
import { ToastContainer } from "react-toastify";
import CreateEmp from './components/emloyeeComponents/CreateEmp';
import "react-toastify/dist/ReactToastify.css";
import Employee from './components/emloyeeComponents/Employee';
import EditEmp from './components/emloyeeComponents/EditEmp';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<Employee/>} />
        <Route path="/edit/:id" element={<EditEmp/>} />
        <Route path="/add" element={<CreateEmp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
