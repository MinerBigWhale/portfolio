import React from "react";
import { Col, Row } from "shards-react";
import MediumCard from "./MediumCard";
import "../assets/styles/shards-dashboards.1.1.0.min.css";
import blogData from "../static/BlogData";
import "../assets/styles/Site.scss";

// wrapper for items

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemRows: [], avatar: "", profileLink: "", counterList: [], selectedRow: 0, showRows: [] };
  }
  mediumURL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${blogData.MediumUserName}`;

  componentDidMount() {
    fetch(this.mediumURL)
      .then((res) => res.json())
      .then((data) => {
        // create two-dimensional array with 2 elements per inner array
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0);

        this.setState({ avatar: avatar, profileLink: profileLink });
        const itemRows = [];
        posts.forEach((item, i) => {
          item["avatar"] = this.state.avatar; // push avatar inside the json
          item["profilelink"] = this.state.profileLink; // push profile link inside the JSON
          const row = Math.floor(i / 2);
          if (!itemRows[row]) itemRows[row] = [];
          itemRows[row].push(item);
        });
        this.setState({ itemRows: itemRows });
        this.changeRows(this.state.selectedRow);
        if (itemRows.length > 0) {
          const counter = Math.ceil(itemRows.length / 2);
          this.createList(counter);
        }
      });
  }
  createList(counter) {
    const tmep = [];
    for (var i = 1; i <= counter; i++) {
      tmep.push(i);
    }
    this.setState({ counterList: tmep });
  }
  selectPage(event) {
    this.setState({ selectedRow: event.target.id });
    this.changeRows(event.target.id);
    var rmv = document.querySelector('.page-item.active');
    if(!!rmv) {
      rmv.classList.remove('active');
    }
    var addCls = document.getElementById(`${event.target.id}li`);
    addCls.classList.add('active');

  }
  changeRows(pageNo) {
    let rows = [];
    rows = this.state.itemRows.slice(pageNo * 2, (pageNo * 2) + 2);
    this.setState({ showRows: rows });
  }
  render() {
    return (
      <div className="blog__slider">
        {
          this.state.showRows.map((row, i) => (
            <Row key={i}>
              {row.map((item, j) => (
                <Col key={j} lg="6" md="6" sm="12" className="mb-4">
                  <MediumCard {...item} />
                </Col>
              ))}
            </Row>
          ))
        }
        {
          <ul className="justify-content-center pagination customStyle">
            {(this.state.counterList.length > 0) ?
              this.state.counterList.map((val, i) => (
                <li className="page-item" key={i} id={`${i}li`}>
                  <a className="page-link" onClick={this.selectPage.bind(this)} id={i}>{val}</a></li>
              ))
              : null}
          </ul>
        }


      </div>
    );
  }
}
export default Slider;
