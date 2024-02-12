import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Register from '../utils/Register';
import Login from '../utils/Login';
import Products from '../pages/Products';
import SingleProduct from '../pages/SingleProduct';
import Reset from '../pages/Reset';
import Forget from '../pages/Forget';
import OTPverification from '../pages/OTPverification';
import SetNewPassword from '../pages/SetNewPassword';
const AllRoutes = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/register' element={<Register/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:query' element={<Products/>}/>
        <Route path='/single/:query' element={<SingleProduct/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/forget-password' element={<Forget/>}/>
        <Route path='/otpVerification' element={<OTPverification/>}/>
        <Route path='/setNewPassword' element={<SetNewPassword/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default AllRoutes
