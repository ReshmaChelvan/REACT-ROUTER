import Head from "./Component.jsx/Head"
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Fsd from "./Component.jsx/Router_File.jsx/Fsd"
import Cs from "./Component.jsx/Router_File.jsx/Cs"
import DS from "./Component.jsx/Router_File.jsx/DS"
import Courses from "./Component.jsx/Router_File.jsx/Courses"
import Rout from "./Component.jsx/Router_File.jsx/Routes"
import Foot from "./Component.jsx/FOOTER/Foot"

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Rout />} />
        <Route path="/Courses" element={<Courses />} />
      <Route path="/fullstackDevelopment" element={<Fsd />} />
      <Route path="/DataScience" element={<DS />} />
      <Route path="/CyberSecurity" element={<Cs />} />
    </Routes>
  </BrowserRouter>
  <Foot />
  </>
  )
}

export default App
