import React from "react";
import "./card.css";

function Card({username, followers, iconSocial, todayFollower, nameColor}) {
    const cardClass = `card ${nameColor}`
  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src={iconSocial} alt="Icon Red Social" />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src="images/icon-up.svg" alt="" />
        {todayFollower}
      </p>
    </article>
  );
}

export default Card;
