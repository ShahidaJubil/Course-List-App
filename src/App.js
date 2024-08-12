import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseList from "./components/CourseList";
import Enquiries from "./components/Enquiries";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList/>} />
        <Route path="/enquiries" element={<Enquiries />} />
      </Routes>
    </Router>
  );
}

export default App;
