import React from "react";
import "../assets/styles/Site.scss";
import thiefImage from "../assets/images/Banner/404-thief.png";
import { Link } from "react-router-dom";

export class NotFoundComponent extends React.Component {
  render() {
    return (
      <div className="top-container" onClick={this.props.checkURL}>
        <nav className="breadcrumbs" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <section className="home_banner_area">
              <div className="banner_inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="home_left_img">
                        <img src={thiefImage} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="banner_content">
                        <h5>404 Page not found</h5>
                        <h2>Looks like someone stole this page</h2>
                        <p>Please come back while we try to catch the thief</p>
                        
                        <Link className="fonsS1 banner_btn" onClick={() => { window.history.back() }}>
                          Go Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ol>
        </nav>
      </div>
    );
  }
}
