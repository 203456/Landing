import React from 'react';
import './Navbar.css'


export default function Navbar() {
  return (
    <nav className="navv" >
      <div className="navbar-brand">
        <a className="logo">
          <h1>Our logo</h1>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <a className="navbar-item">
            MENU
          </a>
          <a className="navbar-item">
            CONTACTO
          </a>
          <a className="navbar-item">
            UBICACIÓN
          </a>
          <a className="navbar-item">
            SOBRE NOSOTROS
          </a>

        </div>
      </div>
    </nav>
  );

}
