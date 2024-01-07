import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './coponents/Header'
import Home from './coponents/Home'
import Contact from './coponents/Contact'
import Exchanges from './coponents/Exchanges'
import CoinDetails from './coponents/CoinDetails'
import Coins from './coponents/Coins'
import Footer from './coponents/Footer'
function App() {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/contact' element={<Contact></Contact>}/>
            <Route path='/exchanges' element={<Exchanges/>}/>
            <Route path='/coin/:id' element={<CoinDetails/>}/>
            <Route path='/coins' element={<Coins/>}/>
        </Routes>
        <Footer></Footer>
    </Router>
    </>
  )
}

export default App