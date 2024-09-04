import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './Cards.css';
import { PiStudentFill } from "react-icons/pi"; // Student icon
import { UilMoneyWithdrawal, UilClipboardAlt } from "@iconscout/react-unicons"; // Mentor and transaction icons

export const cardsData = [
  {
    title: "Students",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    png: PiStudentFill, // Student icon
  },
  {
    title: "Mentors",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal, // Mentor icon
  },
  {
    title: "Transactions",
    color: {
      backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt, // Transaction icon
  },
];

function Card({ title, color, barValue, value, png: Png }) {
  return (
    <div
      className="Card"
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
    >
      <div className="radialBar">
        <div className="titlecontainer">
          <span className="title">{title}</span>
          <Png className="icon" />
        </div>
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
      </div>
    </div>
  );
}

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => (
        <div className="parentContainer" key={id}>
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
