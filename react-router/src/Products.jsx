import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams,Outlet, Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <Link to="/product/mobile">Mobile</Link><br/>
        <Link to="/product/laptop">Laptop</Link>
        <Outlet/>
    </div>
  )
}

export default Products