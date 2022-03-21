import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />}/>
    </Routes>
  );
}

export default React.memo(App);
