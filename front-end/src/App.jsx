import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import TestInstruction from "./pages/TestInstruction";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/student/register" />
        <Route exact path = "/student/test-instruction" element = {<TestInstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
