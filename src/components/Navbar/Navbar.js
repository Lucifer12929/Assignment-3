import React from "react";
import style from "./Navbar.module.css";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <img src={logo} />
      <div className={style.middle}>
        <p>Home</p>
        <p>Our offerings</p>
        <p>Our Team</p>
        <p>Contact US</p>
        <p>Blogs</p>
      </div>
      <button className={style.registerbutton}>Register Now</button>
    </div>
  );
};

export default Navbar;
