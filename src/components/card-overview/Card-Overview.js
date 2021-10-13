import React from "react";
import "./card-overview.css";

export default function CardOverview({ icon, pageViews, growths }) {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <img src={icon} alt="Icono de red social" />
      </p>
      <p className="card-small-number">{pageViews}</p>
      <p className="card-small-percentage">
        <span>
          <img src="images/icon-up.svg" alt="Icon arrow" />
          {growths}
        </span>
      </p>
    </div>
  );
}
