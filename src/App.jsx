import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Detail from './components/Detail/Detail'
import Cart from './components/Cart/Cart'

function App() {
  const [savatlar, setsavatlar] = useState(
    localStorage.getItem("savat") ?  JSON.parse(localStorage.getItem("savat")) : []
  )

  return (
    <BrowserRouter>
      <Header savatlar={savatlar} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail setsavatlar={setsavatlar} savatlar={savatlar} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App