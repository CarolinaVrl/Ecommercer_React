import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Cart from './assets/pages/Cart'
import Login from './assets/pages/Login'
import Products from './assets/pages/Products'
import ProductsDetails from './assets/pages/ProductsDetails'
import ProtectRouted from './assets/pages/ProtectRouted'
import Purchases from './assets/pages/Purchases'
import AppLoadingPage from './components/AppLoadingPage'
import AppNavBar from './components/AppNavBar'
import '../src/index.css'
import { useSelector } from 'react-redux'


function App() {
  const isLoading = useSelector(state=> state.isLoading)
  

  return (
    <HashRouter>
      <AppNavBar/>
      {isLoading && <AppLoadingPage/> }
      
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/products/:id' element={<ProductsDetails/>} />
        <Route path='/login' element={<Login/>}/>
        <Route element={<ProtectRouted/>}>
          
          <Route path='/purchase' element={<Purchases/>} />
          <Route path='/cart' element={<Cart/>} />
        </Route>
      </Routes>

    </HashRouter>
    
  )
}

export default App
