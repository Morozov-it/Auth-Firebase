import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import React from 'react';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';


const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />}/>
    </Routes>
  );
}

export default React.memo(App);
