import React from "react";
import CardOverview from "../card-overview/Card-Overview";
import "./overview.css";

const cardOverviewList = [
  {
    icon: "images/icon-facebook.svg",
    pageViews: "87",
    growths: 3,
    id: 1,
  },
  {
    icon: "images/icon-twitter.svg",
    pageViews: "5002",
    growths: 356,
    id: 2,
  },
  {
    icon: "images/icon-instagram.svg",
    pageViews: "5462",
    growths: 1375,
    id: 3,
  },
  {
    icon: "images/icon-youtube.svg",
    pageViews: "87",
    growths: 303,
    id: 4,
  },
];

function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {cardOverviewList.map(({ id, icon, pageViews, growths }) => (
            <CardOverview
              key={id}
              icon={icon}
              pageViews={pageViews}
              growths={growths}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
