import React, { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function Navbar() {
  const { user } = useContext(AuthContext);
  //console.log(user);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo" style={{ color: "white", listStyle: "none" }}>
            HoBook
          </span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navList">
            <button className="navButton">Register</button>
            <button className="navButton" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
