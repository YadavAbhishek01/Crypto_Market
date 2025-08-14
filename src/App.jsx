import React from 'react'
import Header from './Componets/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Coin from './pages/Coin/Coin'
import Home from './pages/Home/Home'
import Footer from './Componets/Footer/Footer'

const url='CG-N96bzvrcgMhy2r93Zpvk6zAr'
const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/coin/:coinId" element={<Coin />} />           
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
