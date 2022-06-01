import logo from './logo.svg';
import './App.css';
import Header from './compoinent/Header.js';
import Navbar from './compoinent/Navbar.js';
import Content from './compoinent/content/Content.js';
import Footer from './compoinent/Footer.js';
import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import MyNews from './compoinent/MyNews';
function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <BrowserRouter>
        <div className="App"> */}
      <Navbar />
      {/* <Routes>
            <Route path="/Mynews" element={<MyNews />} />
          </Routes>
        </div>
      </BrowserRouter> */}
      <Content />
      <Footer />
    </React.Fragment>
  )
};

export default App;
