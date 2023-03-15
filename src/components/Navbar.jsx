import React from 'react';
import image from '../assets/fondo1.png';


export default function Navbar() {

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation" >
      <div className="navbar-brand">
        <a className="navbar-item">
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
