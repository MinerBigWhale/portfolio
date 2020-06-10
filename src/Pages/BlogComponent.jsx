import React from "react";
import "../assets/styles/Site.scss";
import "../assets/styles/Blog.scss";
import Slider from "../components/Slider";
import blogData from "../static/BlogData";
export class BlogComponent extends React.Component {
  componentDidMount() {
    if (window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }
  render() {
    return (
      <section className="blog_area single-post-area p_120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post row">
                <div className="col-lg-12">
                  <div className="jumbotron text-center">
                    <div id="logo"></div>
                    <h1 className="display-4 mb-3 name name-small name-small-small">
                      {blogData.MediumUserName}'s Posts
                    </h1>
                    <div className="main_title">
                      <p>
                        Here you can see only my last 10 blog articles. If you
                        want more posts click the below button
                      </p>
                    </div>
                    <a
                      className="banner_btn"
                      href={`https://medium.com/${blogData.MediumUserName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      role="button"
                    >
                      View All Posts <i className="fas fa-newspaper"></i>
                    </a>
                  </div>
                  <Slider />

                  <ul
                    id="pagin"
                    className="pagination justify-content-center"
                  ></ul>

                  <div className="text-center">
                    <div className="mb-5">
                      <a
                        className="banner_btn"
                        href={`https://medium.com/${blogData.MediumUserName}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View All Posts <i className="fas fa-newspaper"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
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

                <div className="br"></div>
                <aside className="single_sidebar_widget author_widget">
                  <div className="googleCalendar">
                    <iframe
                      title="GoogleCalnder"
                      src="https://calendar.google.com/calendar/b/0/embed?height=225&amp;wkst=1&amp;bgcolor=%23fbfaff&amp;ctz=Asia%2FColombo&amp;src=c2FiZXNhbjk5NkBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=bzg2cmN1YmJnbHN0OTQ3YnNrOHVnajNoMWt1b20wMWVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4ubGsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=c2FiZXNhbi4xNkBjc2UubXJ0LmFjLmxr&amp;color=%23009688&amp;color=%234285F4&amp;color=%23C0CA33&amp;color=%23D81B60&amp;color=%23009688&amp;showTitle=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
                      height="225"
                      frameBorder="0"
                      scrolling="no"
                    ></iframe>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
