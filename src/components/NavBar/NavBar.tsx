import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {

  return (
    <div className="NavBar">
      
      <Link to={"/login"}>
        <button className="link">Login</button>
      </Link>
      
    </div>
  );
};

export default NavBar;
