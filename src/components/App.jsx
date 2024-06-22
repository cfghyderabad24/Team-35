import React from "react";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import BeforeReivew from "./BeforeReivew";
import ManagerDashboard from "./ManagerDashboard";
import EmployeeSatus from "./EmployeeStatus";
import NgoDetails from "./NgoDetails";
function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/beforevisit" element={<BeforeReivew/>}/>
                <Route path="/managerdashboard" element={<ManagerDashboard/>}/>
                <Route path="/employeestatus" element={<EmployeeSatus/>}/>
                <Route path="/pendingviews" element={<NgoDetails/>}/>

            </Routes>
    </Router>
  );
}

export default App;
