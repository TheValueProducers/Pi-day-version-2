import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from './pages/Register';
import Test from "./pages/Test"
import CreateAccount from "./pages/CreateAccount";
import ManageAccount from "./pages/ManageAccount";
import TestInstruction from "./pages/TestInstruction";
import UserAuth from './pages/UserAuth';
import AdminAuth from "./pages/AdminAuth"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/student/register" element = {<Register/>} />
        <Route exact path = "student/sign-in" element = {<UserAuth />}/>
        <Route exact path = "/student/test-instruction" element = {<TestInstruction />} />
        <Route exact path = "/student/test" element = {<Test />} />
        <Route exact path = "/admin/manage-account" element = {<ManageAccount />}/>
        <Route exact path = "/admin/create-account" element = {<CreateAccount />}  />
        <Route exact path = "/admin/sign-in" element = {<AdminAuth />} />
      </Routes>
    </Router>
  );
}

export default App;
