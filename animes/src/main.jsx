import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from './App'
import './index.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Movie from './components/Movie'
import Explorar from './components/Explorar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='explorar' element={<Explorar />}/>
          <Route path='movie/:id' element={<Movie />}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
