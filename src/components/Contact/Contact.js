import React from "react";
import style from "./Contact.module.css";
import contact from "../../images/contact.png";

const Contact = () => {
  return (
    <div className={style.Contact}>
      <div className={style.left}>
        <h1>Get In Touch With Us To Connect</h1>
        <h2>Contact Us</h2>
        <form className={style.form}>
          <div className={style.data}>
            <label>Full name</label>
            <input type="text" />
          </div>
          <div className={style.data}>
            <label>Email Address</label>
            <input type="email" />
          </div>
          <div className={style.data}>
            <label>Phone No</label>
            <input type="number" />
          </div>
          <div className={style.data}>
            <label>Country</label>
            <input type="text" />
          </div>
          <div className={style.data}>
            <label>Stage</label>
            <input type="text" />
          </div>
        </form>
        <button className={style.button}>Submit</button>
      </div>
      <div className={style.right}>
        <img src={contact} />
      </div>
    </div>
  );
};

export default Contact;
