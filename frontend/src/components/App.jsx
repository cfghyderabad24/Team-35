import React from "react";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import BeforeReivew from "./BeforeReivew";
import ManagerDashboard from "./ManagerDashboard";
import EmployeeSatus from "./EmployeeStatus";
import NgoDetails from "./NgoDetails";
import Hero from "./Hero";
import AfterReivew from "./AfterReview"

import ChatbaseChatbot from "./ChatbaseChatbotEmbed";


function App() {
  return (
    <Router>
      <div className="app-container">
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/review1" element={<BeforeReivew/>}/>
                <Route path="/review2" element={<AfterReivew/>}/>

                <Route path="/managerdashboard" element={<ManagerDashboard/>}/>
                <Route path="/employeestatus" element={<EmployeeSatus/>}/>
                <Route path="/pendingviews" element={<NgoDetails/>}/>

            </Routes>
            <ChatbaseChatbot />

        </div>
    </Router>
  );
}

export default App;
