import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Demo from './utils/Join';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Demo/>
    </>
  )
}

export default App
