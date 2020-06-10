import React from "react";
import blogData from "../static/BlogData";

export default class TwitterAPI extends React.Component {
  async componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <React.Fragment>
        <aside className="single_sidebar_widget author_widget">
          <a
            className="twitter-timeline"
            href={blogData.TwitterBannerLink}
            data-tweet-limit="3"
          >
            Tweets by {blogData.TwitterUserName}
          </a>
        </aside>
        <aside className="single_sidebar_widget popular_post_widget">
          <div className="blogAside1">
            <a
              href={blogData.TwitterButtonLink}
              className="twitter-mention-button"
              data-size="large"
              data-dnt="true"
              data-show-count="false"
            >
              Tweet to @{blogData.TwitterUserName}
            </a>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}
