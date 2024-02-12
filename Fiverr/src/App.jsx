import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from 'react-router-dom'
import Home from './pages/Home'
import Demo from './utils/Join';
import AllRoutes from './allRoutes/AllRoutes';
import Products from './pages/Products';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AllRoutes/>
    {/* <Products/> */}
    </>
  )
}

export default App
