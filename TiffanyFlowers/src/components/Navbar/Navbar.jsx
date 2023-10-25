import React from 'react';
import "./navbar.css";


const Navbar = ({links}) => {
  return (
    <div className="container d-flex align-items-center justify-content-between position-relative">
      <div className="logo">
        <a href="index.html" target="_blank">
          <img src={myLogo} alt="logo" className=" img-fluid"/>
        </a>
      </div>
      <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link" href="#interior">PLANTAS DE INTERIOR</a></li>
        <li><a className="nav-link" href="#exterior">PLANTAS DE EXTERIOR</a></li>
        <li><a className="nav-link" href="#ramos">RAMOS</a></li>
        <li><a className="nav-link" href="#macetas"> MACETAS</a></li>
        <li><a className="nav-link" href="#floreros">FLOREROS </a></li>
        
      </ul>   
    </nav>
  </div>
  );
};

export default Navbar;
