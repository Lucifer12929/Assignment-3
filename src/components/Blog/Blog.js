import React, { useState } from "react";
import style from "./Blog.module.css";
import b1 from "../../images/b1.png";
import b2 from "../../images/b2.png";
import b3 from "../../images/b3.png";
import { BsCalendarEvent } from "react-icons/bs";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const cards = [
  { id: 1, image: b1 },
  { id: 2, image: b2 },
  { id: 3, image: b3 },
  { id: 4, image: b1 },
  { id: 5, image: b2 },
  { id: 6, image: b3 },
];

const Blog = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 3 >= cards.length) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex === 0) {
      setStartIndex(cards.length - 3);
    } else {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className={style.Blog}>
      <div className={style.top}>
        <h1>Blogs</h1>
      </div>
      <div className={style.container}>
        <button className={style.prev} onClick={handlePrev}>
          <HiArrowSmLeft className={style.icon} />
        </button>
        <div className={style.cards}>
          {cards.slice(startIndex, startIndex + 3).map((card) => (
            <div key={card.id} className={style.card}>
              <img src={card.image} alt={card.title} />
              <h4>Real Estate , Analysis</h4>
              <div className={style.mid}>
                <div className={style.cal}>
                  <BsCalendarEvent />
                  <h3>09 June 2022</h3>
                </div>
                <h3>By Admin</h3>
              </div>
              <h2>Guide for personal property Buying </h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                do eiusmod temp incididuut labore dolore magna aliqua do
                eiusmod...
              </p>
              <button>View More</button>
            </div>
          ))}
        </div>
        <button className={style.prev} onClick={handleNext}>
          <HiArrowSmRight className={style.icon} />
        </button>
      </div>
    </div>
  );
};

export default Blog;
