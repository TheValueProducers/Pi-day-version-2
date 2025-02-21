import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// for testing purposes -- just delete when needed
import Register from './pages/Register'
import AdminAuth from './pages/AdminAuth';
import UserAuth from './pages/UserAuth';
import GeneralNav  from './components/GeneralNav'
import StudentNav  from './components/StudentNav'
import TeacherNav  from './components/TeacherNav'
import AdminNav  from './components/AdminNav'
import Footer from './components/Footer'

import Test from "./pages/Test"
import TestInstruction from "./pages/TestInstruction";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path = "/student/test-instruction" element = {<TestInstruction />} />
          <Route exact path = "/student/test" element = {<Test />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
