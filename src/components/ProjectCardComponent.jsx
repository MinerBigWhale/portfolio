import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Site.scss";

export default function ProjectCardComponent({
  title,
  cardDescription,
  category,
  img,
}) {
  return (
    <div className={`col-lg-4 col-sm-6 ${category}`}>
      <div className="projects_item">
        <img className="img-fluid" src={img} alt="" />
        <div className="projects_text">
          <Link className="nav-link" to={`Project-${title}`}>
            <h4>{title}</h4>
          </Link>
          <p> {cardDescription}</p>
        </div>
      </div>
    </div>
  );
}
