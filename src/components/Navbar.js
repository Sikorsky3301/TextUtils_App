import React from "react";
import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    // using template literal or embedding javascript code into the class name  
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href='#'>
          {props.title}
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='#'>
                Home
              </a>
            </li>
            {/* <li className="nav-item"> */}
              {/* <NavLink className="nav-link" to="/about">
                {props.about}
              </NavLink> */}
            {/* </li> */}
          </ul>
        </div>
             <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}  id="darkModeSwitch"`}>
                <input className="form-check-input" onClick = {props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Darkmode</label>
            </div>
        </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = { title: "Set title here", 
                        about: "About " };
