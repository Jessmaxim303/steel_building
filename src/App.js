import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './components/Home/Home.js';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
