import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"></Route>
        <Route path="/shop">
          <Route path="/shop/{id}"></Route>
        </Route>
        <Route path="/cart"></Route>
      </Routes>
    </div>
  );
}

export default App;
