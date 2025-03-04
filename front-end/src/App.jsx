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
import ProtectedRoute from "./components/ProtectedRoute";
import UnProtectedRoute from "./components/UnProtectedRoute";
import NavBarTester from './pages/NavBarTester'
import Contact from './pages/Contact'

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/home"          element={<UnProtectedRoute><h1>This is home!!!</h1></UnProtectedRoute>} />
        <Route path="/register"      element={<UnProtectedRoute><Register /></UnProtectedRoute>} />
        <Route path="/sign-in" element={<UnProtectedRoute><UserAuth /></UnProtectedRoute>} />
        <Route path="/contact" element={<UnProtectedRoute><Contact /></UnProtectedRoute>} />
        <Route path="/admin/sign-in" element={<UnProtectedRoute><AdminAuth /></UnProtectedRoute>} />
        {/* Not protected */}

        {/* Protected Routes */}
        <Route
          path="/teacher/home"
          element={
            <ProtectedRoute>
              <h1>This is home!!!</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/home"
          element={
            <ProtectedRoute>
              <h1>This is home!!!</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/test-instruction"
          element={
            <ProtectedRoute>
              <TestInstruction />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/test"
          element={
            <ProtectedRoute>
              <Test />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/leaderboard"
          element={
            <ProtectedRoute>
              <TestDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/leaderboard/:class"
          element={
            <ProtectedRoute>
              <TestTable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/leaderboard/:class/:student_id"
          element={
            <ProtectedRoute>
              <StudentData />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/home"
          element={
            <ProtectedRoute>
              <h1>This is home!!!</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/setting"
          element={
            <ProtectedRoute>
              <ManageAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/create-account"
          element={
            <ProtectedRoute>
              <CreateAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/leaderboard"
          element={
            <ProtectedRoute>
              <TestDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/leaderboard/:class"
          element={
            <ProtectedRoute>
              <TestTable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/leaderboard/:class/:student_id"
          element={
            <ProtectedRoute>
              <StudentData />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>



  );
}

export default App;