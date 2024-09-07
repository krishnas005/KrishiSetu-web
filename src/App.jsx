import React from 'react';
import Home from './Home.jsx';
import Guide from './Guide.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </Router>
  )
}

export default App
