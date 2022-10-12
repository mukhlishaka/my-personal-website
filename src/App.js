import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import './App.css'
import React from "react"; 

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
