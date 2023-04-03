import React from "react";
import style from "./Footer.module.css";
import logo from "../../images/logof.png";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.top}>
        <img src={logo} className={style.logo} />
        <div className={style.company}>
          <h1>Company</h1>
          <p>Home</p>
          <p>Our Offering</p>
          <p>Our Team</p>
          <p>Contact US</p>
        </div>
        <div className={style.company}>
          <h1>Useful Links</h1>
          <p>Blogs</p>
          <p>FAQ'S</p>
        </div>
        <div className={style.contact}>
          <div className={style.eachx}>
            <div>
              <AiOutlineMail size={40} />
            </div>
            <div className={style.text}>
              <h4>Email:</h4>
              <h6>support@inreglobal.com</h6>
            </div>
          </div>
          <div className={style.eachx}>
            <div>
              <MdOutlinePhoneInTalk size={40} />
            </div>
            <div className={style.text}>
              <h4>Phone:</h4>
              <h6>+91 | 7019305889</h6>
            </div>
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <h2>Copyright 2023. Designed by INRE Global</h2>
        <div className={style.socials}>
          <div className={style.each}>
            <AiFillLinkedin />

            <h4>Linkedin</h4>
          </div>
          <div className={style.each}>
            <AiFillInstagram />

            <h4>Instagram</h4>
          </div>
          <div className={style.each}>
            <AiFillFacebook />

            <h4>Facebook</h4>
          </div>
          <div className={style.each}>
            <AiOutlineTwitter />

            <h4>Twitter</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
