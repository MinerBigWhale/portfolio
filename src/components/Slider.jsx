import React from "react";
import PostCard from "./PostCard";
import blogData from "../static/BlogData";
import "../assets/styles/Site.scss";
import axios from "axios";
import { Grid } from "@material-ui/core";
// wrapper for items

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemRows: [],
      avatar: "",
      profileLink: "",
      counterList: [],
      selectedRow: 0,
      showRows: [],
      mediumPostList: [],
      devPostList: [],
    };
  }
  mediumURL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${blogData.MediumUserName}`;
  blogURL = `https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed/${blogData.DevToUserName}`;

  async componentDidMount() {
    let postList = [];
    let sortPostlist;
    const itemRows = [];
    await axios
      .get(this.mediumURL)
      .then(async (res) => await res.data)
      .then((data) => {
        // create two-dimensional array with 2 elements per inner array
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0);

        this.setState({ avatar: avatar, profileLink: profileLink });
        const postRows = [];
        posts.forEach((item, i) => {
          item["avatar"] = this.state.avatar; // push avatar inside the json
          item["profilelink"] = this.state.profileLink; // push profile link inside the JSON
          item["source"] = "Medium";
          // const row = Math.floor(i / 2);
          // if (!itemRows[row]) itemRows[row] = [];
          // itemRows[row].push(item);
          postRows.push(item);
        });
        this.setState({ mediumPostList: postRows });
      });

    await axios
      .get(this.blogURL)
      .then(async (res) => await res.data)
      .then((data) => {
        // create two-dimensional array with 2 elements per inner array
        const profileLink = data.feed.link;
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0);

        this.setState({ profileLink: profileLink });
        const postRows = [];
        posts.forEach((item, i) => {
          item["profilelink"] = this.state.profileLink; // push profile link inside the JSON
          item["source"] = "Dev";
          // const row = Math.floor(i / 2);
          // if (!itemRows[row]) itemRows[row] = [];
          // itemRows[row].push(item);
          postRows.push(item);
        });
        this.setState({ devPostList: postRows });
        postList.push(...this.state.mediumPostList, ...this.state.devPostList);
        sortPostlist = postList.sort(this.compare);
        sortPostlist.forEach((item, i) => {
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

  compare(a, b) {
    if (a.pubDate < b.pubDate) {
      return 1;
    }
    if (a.pubDate > b.pubDate) {
      return -1;
    }
    return 0;
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
    var rmv = document.querySelector(".page-item.active");
    if (!!rmv) {
      rmv.classList.remove("active");
    }
    var addCls = document.getElementById(`${event.target.id}li`);
    addCls.classList.add("active");
  }
  changeRows(pageNo) {
    let rows = [];
    rows = this.state.itemRows.slice(pageNo * 2, pageNo * 2 + 2);
    this.setState({ showRows: rows });
  }
  render() {
    const { showRows, counterList } = this.state;
    return (
      <div className="blog__slider">
        {showRows.map((row, i) => (
          <Grid container spacing={1} key={i}>
            {row.map((item, j) => (
              <PostCard {...item} key={j} />
            ))}
          </Grid>
        ))}
        {
          <ul className="justify-content-center pagination customStyle">
            {counterList.length > 0
              ? counterList.map((val, i) => (
                  <li className="page-item" key={i} id={`${i}li`}>
                    <a
                      className="page-link"
                      onClick={this.selectPage.bind(this)}
                      id={i}
                    >
                      {val}
                    </a>
                  </li>
                ))
              : null}
          </ul>
        }
      </div>
    );
  }
}
export default Slider;
