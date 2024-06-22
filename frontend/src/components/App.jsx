import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import BeforeReivew from "./BeforeReivew";
import ManagerDashboard from "./ManagerDashboard";
import EmployeeSatus from "./EmployeeStatus";
import NgoDetails from "./NgoDetails";
import ChatbaseChatbot from "./ChatbaseChatbotEmbed";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/beforevisit" element={<BeforeReivew />} />
          <Route path="/managerdashboard" element={<ManagerDashboard />} />
          <Route path="/employeestatus" element={<EmployeeSatus />} />
          <Route path="/pendingviews" element={<NgoDetails />} />
        </Routes>
        <ChatbaseChatbot />
      </div>
    </Router>
  );
}

export default App;
