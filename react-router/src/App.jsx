import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import PageNotFound from './PageNotFound'
import Products from './Products';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom'
import Mobile from './Mobile'
import Laptop from './Laptop'

function User(){

  const { id } = useParams()
  return <h2>{id}</h2>
}

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/Contact">Contact</Link><br/>
        <Link to="/user/">User</Link><br/>
        <Link to="/Product/">Products</Link>
        
      </nav>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route path='/user/:id?' element={<User/>}/>
        <Route path='/product' element={<Products/>}>
          <Route path='mobile' element={<Mobile/>}/>
          <Route path='laptop' element={<Laptop/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>

      </Routes>
    </Router>
  )
}

export default App