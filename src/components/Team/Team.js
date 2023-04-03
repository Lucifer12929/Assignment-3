import React from "react";
import style from "./Team.module.css";
import t1 from "../../images/t1.png";
import t2 from "../../images/t2.png";
import t3 from "../../images/t3.png";

const Team = () => {
  return (
    <div className={style.Team}>
      <div className={style.top}>
        <h1>Our Team Members</h1>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <img src={t1} />
          <h2>Brajesh Pathak</h2>
          <p>
            A Chartered Accountant & Company Secretary, has over a decade of
            experience in managing realty focused venture capital funds, and was
            heading Azure Capital Advisors Private Limited. He has also been...
          </p>
          <button>View more</button>
        </div>
        <div className={style.card}>
          <img src={t2} />
          <h2>Deepak Shukla</h2>
          <p>
            Deepak Shukla has completed his B.Tech (hons.) from the Indian
            Institute of Technology (IIT) Kharagpur and obtained an MBA from the
            Indian Institute of Management (IIM) Ahmedabad, India. He has an
            overall experience..
          </p>
          <button>View more</button>
        </div>
        <div className={style.card}>
          <img src={t3} />
          <h2>Alok Kumar Singh</h2>
          <p>
            Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25
            years of experience in management responsibilities in top tier
            companies including Infosys, Infosys BPO and Azure Capital.
            Co-Founded Azure Capital..
          </p>
          <button>View more</button>
        </div>
      </div>
    </div>
  );
};

export default Team;
