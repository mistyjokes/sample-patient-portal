import React from "react";
import {Link}from "react-router-dom";
import mdlogo from "../logoMD.png";
import "../Header.css";


const Header = () => (
 
  <div className="header">
      
        <Link to="/" > <img className="logo" src={mdlogo} alt="logo" />{" "}</Link>
      
    
    <div className="options">
         <Link className="option" to="/" style={{fontFamily:'Courier New'}}>SIGN OUT</Link>
      
      {/* <Link className="option" to="/hospitallogin">
        HOSPITAL PORTAL
      </Link>
      <Link className="option" to="/doctorlogin">
        DOCTOR PORTAL
      </Link> */}
    </div>
  </div>
);

export default Header;