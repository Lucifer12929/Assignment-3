import React from "react";
import style from "./Offering.module.css";
import o1 from "../../images/o1.png";
import o2 from "../../images/o2.png";
import o3 from "../../images/o3.png";

const Offering = () => {
  return (
    <div className={style.Offering}>
      <div className={style.top}>
        <h1>Our Offering</h1>
        <p>
          This whole purchase journey can be divided into three stages. For more
          details, <a>Click Here</a>
        </p>
      </div>
      <div className={style.middle}>
        <div className={style.each}>
          <h1>1</h1>
          <p>Pre booking</p>
        </div>
        <div className={style.each}>
          <h1>2</h1>
          <p>Post-Booking & Pre-Registration</p>
        </div>
        <div className={style.each}>
          <h1>3</h1>
          <p>Post-Registration </p>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.card}>
          <img src={o1} />
          <h2>Background verification</h2>
          <p>
            Assuring your capital is in safe hands, we provide detailed
            verification reports of the project and developer. These are
            customized and detailed...
          </p>
          <button>Contact Us</button>
        </div>
        <div className={style.card}>
          <img src={o2} />
          <h2>Virtual site visit</h2>
          <p>
            It becomes imperative to observe your apartment or plot very closely
            before paying the booking amount. We are here to assist with an
            AI-enabled UAV...
          </p>
          <button>Contact Us</button>
        </div>
        <div className={style.card}>
          <img src={o3} />
          <h2>Title diligence</h2>
          <p>
            Due diligence is necessary to prevent real estate malpractices which
            have contributed to more than 20% of the civil cases in India. We
            have a panel of...
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Offering;
