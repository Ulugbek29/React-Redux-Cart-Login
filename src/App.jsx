import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './views/HomePage'
import ProductPage from "./views/ProductPage"
import CartPage from "./views/CartPage"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index  element={<Navigate to="/home" />}/>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/products' element={<ProductPage />}/>
          <Route path='/catalog' element={<HomePage />}/>
          <Route path='/company' element={<HomePage />}/>
          <Route path='/news' element={<HomePage />}/>
          <Route path='/contacts' element={<HomePage />}/>
          <Route path='/cart' element={<CartPage />}/>
        </Route>
      </Routes>
    </div>
  )
}
