import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Test from "./pages/Test"
import TestInstruction from "./pages/TestInstruction";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/student/register" />
        <Route exact path = "/student/test-instruction" element = {<TestInstruction />} />
        <Route exact path = "/student/test" element = {<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
