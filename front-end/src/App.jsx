import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Test from "./pages/Test";
import CreateAccount from "./pages/CreateAccount";
import ManageAccount from "./pages/ManageAccount";
import TestInstruction from "./pages/TestInstruction";
import UserAuth from "./pages/UserAuth";
import AdminAuth from "./pages/AdminAuth";
import CreateTest from "./pages/CreateTest";
import TestDashboard from "./pages/TestDashboard";
import TestTable from "./pages/TestTable";
import StudentData from "./pages/StudentData";
import HostTest from "./pages/HostTest";
import Leaderboard from "./pages/Leaderboard";
import UserAccount from "./pages/UserAccount"
import Home from './pages/Home'

// import  from './components/'
// import  from './components/'
import NavBarTester from './pages/NavBarTester'
import Contact from './pages/Contact'

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/home"         element={<><Home/></>} />
        <Route path="/register"      element={<><Register /></>} />
        <Route path="/sign-in" element={<><UserAuth /></>} />
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/admin/sign-in" element={<><AdminAuth /></>} />
        {/* Not protected */}

        {/* Protected Routes */}
        <Route
          path="/teacher/home"
          element={
            <>
              <h1>This is home!!!</h1>
            </>
          }
        />
        <Route
          path="/student/home"
          element={
            <>
              <h1>This is home!!!</h1>
            </>
          }
        />
                <Route
          path="/student/user-account"
          element={
            <>
              <UserAccount/>
            </>
          }
        />
                <Route
          path="/teacher/user-account"
          element={
            <>
              <UserAccount/>
            </>
          }
        />
          <Route
          path="/admin/user-account"
          element={
            <>
               <UserAccount/>
            </>
          }
        />
        <Route
          path="/student/leaderboard"
          element={
            <>
              <Leaderboard/>
            </>
          }
        />
        <Route
          path="/student/test-instruction"
          element={
            <>
              <TestInstruction />
            </>
          }
        />
        <Route
          path="/student/test"
          element={
            <>
              <Test />
            </>
          }
        />

        <Route
          path="/teacher/create-test"
          element={
            <>
              <CreateTest />
            </>
          }
        />

        <Route
          path="/teacher/host-test"
          element={
            <>
              <HostTest />
            </>
          }
        />

        <Route
          path="/teacher/leaderboard"
          element={
            <>
              <TestDashboard />
            </>
          }
        />
        <Route
          path="/teacher/leaderboard/:class"
          element={
            <>
              <TestTable />
            </>
          }
        />
        <Route
          path="/teacher/leaderboard/:class/:student_id"
          element={
            <>
              <StudentData />
            </>
          }
        />
        <Route
          path="/admin/home"
          element={
            <>
              <h1>This is home!!!</h1>
            </>
          }
        />
        <Route
          path="/admin/setting"
          element={
            <>
              <ManageAccount />
            </>
          }
        />
        <Route
          path="/admin/create-account"
          element={
            <>
              <CreateAccount />
            </>
          }
        />
        <Route
          path="/admin/leaderboard"
          element={
            <>
              <TestDashboard />
            </>
          }
        />
        <Route
          path="/admin/leaderboard/:class"
          element={
            <>
              <TestTable />
            </>
          }
        />
        <Route
          path="/admin/leaderboard/:class/:student_id"
          element={
            <>
              <StudentData />
            </>
          }
        />
      </Routes>
    </Router>



  );
}

export default App;