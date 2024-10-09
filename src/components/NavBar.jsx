import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.darkM} bg-${props.darkM}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src="logo.png" alt="Logo" style={{ width: '30px', marginRight: '8px' }} />
          {props.title}
        </NavLink>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/about" 
                
              >
                {props.HomeTitle}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/contact" 
                
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://qubeknit.com" target="_blank" rel="noopener noreferrer">
                QubeKnit
              </a>
            </li>
          </ul>

          <div className={`form-check form-switch text-${props.darkM === 'light' ? 'dark' : 'light'}`}>
            <input 
              className="form-check-input custom-switch" 
              onClick={props.toogleMode} 
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckDefault" 
              // checked={props.darkM === 'dark'}  // Uncomment if needed
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable light Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}
