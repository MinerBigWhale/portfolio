import React from "react";
import { Card, CardBody, CardFooter } from "shards-react";
import ShortenText from "../utils/ShortenText";
import ToText from "../utils/ToText";

// functional card component to display single item
export default function MediumCard(props) {
  const monthShortname = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const splitDate = props.pubDate.split(" ");
  const date = splitDate[0];
  const splitMonth = date.split("-");
  const finalDate =
    monthShortname[Number(splitMonth[1] - 1)] +
    " " +
    splitMonth[2] +
    "," +
    " " +
    splitMonth[0];

  let articletype = "";
  {
    props.source === "Medium"
      ? (articletype = "Medium")
      : (articletype = "Dev");
  }

  if (articletype === "Medium") {
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
              {ShortenText(props.title, 0, 100)}
            </a>
          </h5>
          <p className="card-text d-inline-block mb-3">
            {ShortenText(ToText(props.content), 0, 120) + "..."}
          </p>
        </CardBody>
        <CardFooter className="text-muted border-top py-3">
          <span className="text-dark">
            <i className="fas fa-user" style={{ marginRight: "0.5em" }}>
              {" "}
            </i>
            {props.author}
          </span>
          <span className="text-dark">
            {" "}
            in{" "}
            <a
              href={props.profilelink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              {props.source}
            </a>
          </span>
          <br />

          <span className="text-muted">
            <i
              className="fas fa-calendar-alt"
              style={{ marginRight: "0.5em" }}
            ></i>
            {finalDate}
          </span>
        </CardFooter>
      </Card>
    );
  } else {
    return (
      <Card small className="card-post h-100">
        <div
          className="card-post__image"
          style={{ backgroundImage: `url('${props.thumbnail}')` }}
        />
        <CardBody>
          <h5 className="card-title">
            <a
              className="text-fiord-blue"
              href={props.link}
              target="_blank"
              className="text-fiord-blue"
              rel="noopener noreferrer"
            >
              {ShortenText(props.title, 0, 100)}
            </a>
          </h5>
          <p className="card-text">
            {ShortenText(ToText(props.content), 0, 120) + "..."}
          </p>
        </CardBody>
        <CardFooter className="text-muted border-top py-3">
          <span className="text-dark">
            <i className="fas fa-user" style={{ marginRight: "0.5em" }}>
              {" "}
            </i>
            {props.author}
          </span>
          <span className="text-dark">
            {" "}
            in{" "}
            <a
              href={props.profilelink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              {props.source}
            </a>
          </span>

          <br />

          <span className="text-muted">
            <i
              className="fas fa-calendar-alt"
              style={{ marginRight: "0.5em" }}
            ></i>{" "}
            {finalDate}
          </span>
        </CardFooter>
      </Card>
    );
  }
}
