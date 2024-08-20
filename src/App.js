import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import MCQTest from './components/MCQTest';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/mcq" element={<MCQTest />} />
          <Route path="/" element={<Register />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
