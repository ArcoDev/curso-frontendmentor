import React from "react";
import Card from "../card/Card";
import "./top-card-list.css";

//Creacion de array para iterar la card
const cardListData = [
  {
    username: "@arcodev",
    id: 1,
    followers: 1483,
    todayFollower: 12,
    iconSocial: "images/icon-facebook.svg",
    nameColor: "facebook",
  },
  {
    username: "@arcodev",
    id: 2,
    followers: "28K",
    todayFollower: 20,
    iconSocial: "images/icon-twitter.svg",
    nameColor: "twitter",
  },
  {
    username: "@arcodev",
    id: 3,
    followers: "6K",
    todayFollower: 30,
    iconSocial: "images/icon-instagram.svg",
    nameColor: "instagram",
  },
  {
    username: "@arcodev",
    id: 4,
    followers: "12K",
    todayFollower: -10,
    iconSocial: "images/icon-youtube.svg",
    nameColor: "youtube",
  },
];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {/*Se puede hacer el destructuring al array y pasar cada uno de los parametros
            {cardListData.map(
                ({ id, username, followers, iconSocial, todayFollower }) => (
                <Card key={id} username={username} />
                )
           )}
           */}
          {/* Forma corta de recorrer el array con el spredSeparator */}
          {cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}

          {/*<article className="card twitter">
            <p className="card-title">
              <img src="images/icon-twitter.svg" alt="" />
              @LeonidasEsteban
            </p>
            <p className="card-followers">
              <span className="card-followers-number">28k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
          <article className="card instagram">
            <p className="card-title">
              <img src="images/icon-instagram.svg" alt="" />
              @LeonidasEsteban
            </p>
            <p className="card-followers">
              <span className="card-followers-number">6k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
          <article className="card youtube">
            <p className="card-title">
              <img src="images/icon-youtube.svg" alt="" />
              @LeonidasEsteban
            </p>
            <p className="card-followers">
              <span className="card-followers-number">12k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>*/}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
