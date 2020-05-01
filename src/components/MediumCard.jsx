import React from "react";
import { Card, CardBody } from "shards-react";
import ShortenText from "../utils/ShortenText";
import ToText from "../utils/ToText";

// functional card component to display single item
export default function MediumCard(props) {
  const shortMonthName = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format;
  let date = new Date(props.pubDate);
  const publishDate =
    shortMonthName(date) +
    " " +
    date.getDate() +
    "," +
    " " +
    date.getFullYear();
  return (
    <Card small className="card-post card-post--1">
      <div
        className="card-post__image"
        style={{ backgroundImage: `url(${props.thumbnail})` }}
      >
        <div className="card-post__author d-flex">
          <a
            href={props.profilelink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-post__author-avatar card-post__author-avatar--small"
            style={{
              backgroundImage: `url(${props.avatar})`,
            }}
          >
            Written by {props.author}
          </a>
        </div>
      </div>
      <CardBody>
        <h5 className="card-title">
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fiord-blue"
          >
            {ShortenText(props.title, 0, 50)}
          </a>
        </h5>
        <p className="card-text d-inline-block mb-3">
          {ShortenText(ToText(props.content), 0, 120) + "..."}
        </p>
        <br />
        <span className="text-dark">
          <i className="fas fa-user" style={{ marginRight: "0.5em" }}>
            {" "}
          </i>
          {props.author}
        </span>
        <br />

        <span className="text-muted">
          <i
            className="fas fa-calendar-alt"
            style={{ marginRight: "0.5em" }}
          ></i>
          {publishDate}
        </span>
      </CardBody>
    </Card>
  );
}
