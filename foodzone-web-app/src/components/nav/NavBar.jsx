import React from "react";
import { Nav } from "./Styles";

const NavBar = () => {
  return (
    <Nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="logo">
              <img src="../../../assets/foodzone_logo.png"></img>
              <a href="/">FoodZone</a>
            </div>
          </div>
          <div className="auth-btns col-md-7">
            <button className="btn sign-up">Sign Up</button>
            <button className="btn sign-in">Sign In</button>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
