import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Register from '../utils/Register';
import Login from '../utils/Login';
const AllRoutes = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/register' element={<Register/>}/> 
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default AllRoutes
