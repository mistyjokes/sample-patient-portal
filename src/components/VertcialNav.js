import React from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import {Link} from "react-router-dom";
import "../VerticalNav.css";

const VerticalNav = () => (
  <div className="verticalNav linedUp">
  
      <li>
          <Link to="/"> <b>Home</b> </Link>
      </li>
    
      <li>
          <Link to={{pathname:"/patient"}}> <b>Applications</b> </Link>
      </li>
      <li>
          <Link to="/"> <b> Prescriptions</b> </Link>
      </li>


  
  </div>
 
);

export default VerticalNav;