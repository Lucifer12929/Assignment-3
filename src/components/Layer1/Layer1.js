import React from "react";
import style from "./Layer1.module.css";
import layer1img from "../../images/layer1.png";

const Layer1 = () => {
  return (
    <div className={style.layer1}>
      <div className={style.text}>
        <div className={style.content}>
          <div>
            {" "}
            Making your <a>Real Estate</a> purchase journey faster and
            transparent
          </div>
        </div>
      </div>
      <img src={layer1img} />
    </div>
  );
};

export default Layer1;
