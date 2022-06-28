import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import {Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Routes>
        <Route path='/' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/work' element={<OurWork/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
