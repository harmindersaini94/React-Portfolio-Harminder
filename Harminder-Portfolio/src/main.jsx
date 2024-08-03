import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Experience from './Components/Experience.jsx'
import Projects from './Components/Projects.jsx'
import TechStack from './Components/TechStack.jsx'
import Navbar from './Components/Header/Navbar.jsx'

const route = createBrowserRouter(
  createRoutesFromElements([
  <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/' element={<Navbar />} ></Route>
      <Route path='/About' element={<About />} ></Route>
      <Route path='/Contact' element={<Contact />} ></Route>
      <Route path='/Experience' element={<Experience />} ></Route>
      <Route path='/Projects' element={<Projects />} ></Route>
      <Route path='/TechStack' element={<TechStack />} ></Route>
  </Route>  
]
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
   <App />
  </React.StrictMode>,
)
