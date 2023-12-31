import React from 'react';
import "./navbar.css";
import Cartwidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const enlaces = [
    "PLANTAS DE INTERIOR",
    "PLANTAS DE EXTERIOR", 
    "RAMOS", 
    "MACETAS", 
    "FLOREROS"
  ]

  return (
    <div className="container d-flex align-items-center justify-content-between position-relative">
      
      <Link to={"/"}>
      <img src="../public/img/logo.jpg" alt="logo" className="logo" />
      </Link> 
      
      <ul className="navbar ul">
        {enlaces.map((e,id) => 
          <li className="navbar li" key={id}>
            <NavLink activeclassname="active" to={`${e}`}>
              {e}
            </NavLink>
          </li>
        )}
        
      </ul>
      <Cartwidget/>
    </div>
  );
};

export default Navbar;
