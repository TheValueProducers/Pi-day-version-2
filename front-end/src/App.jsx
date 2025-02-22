import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Test from "./pages/Test"
import TestInstruction from "./pages/TestInstruction";
import CreateAccount from "./pages/CreateAccount";
import ManageAccount from "./pages/ManageAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/student/register" />
        <Route exact path = "/student/test-instruction" element = {<TestInstruction />} />
        <Route exact path = "/student/test" element = {<Test />} />
        <Route exact path = "/admin/manage-account" element = {<ManageAccount />}/>
        <Route exact path = "/admin/create-account" element = {<CreateAccount />}  />
      </Routes>
    </Router>
  );
}

export default App;
