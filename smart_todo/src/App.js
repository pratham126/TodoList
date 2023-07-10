import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
