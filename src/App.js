import React, { Fragment } from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './compnents/Navbar';
import Footer from './compnents/Footer';
import HeaderPage from './compnents/HeaderPage';


function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <HeaderPage />
        <div className="main-container">
          <Footer />
        </div>
      </Fragment>
    </Router>

  );
}

export default App;
