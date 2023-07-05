import React from 'react'
import "../Css/Navbar.css"
import { NavLink } from 'react-router-dom'
import { GoogleFont } from 'google-fonts';
import '@fortawesome/fontawesome-free/css/all.min.css';


export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="item">
        <NavLink className="navbtn" exact to="/"  activeClassName="active">
        <i className="fas fa-home"></i> Home
          </NavLink>
        </div>
        <div className="item">
        <NavLink className="navbtn" exact to="/Portfolio"  activeClassName="active">
        <i className="fas fa-images"></i> Gallery
          </NavLink>
        </div>
    </div>
  )
}
