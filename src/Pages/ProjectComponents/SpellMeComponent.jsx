import React from "react";
import ppt from "../../assets/images/Icons/ppt.png";
import SpellMeFile from "../../assets/Docs/SpellMe.pptx";
import projectDetails from "../../static/ProjectData";

export const SpellMeComponent = () => {
  const PageDatails = projectDetails.Projects[6].data;
  const parts = PageDatails.Description.split("\n");

  return (
    <section className="portfolio_details_area p_120">
      <div className="container">
        <div className="portfolio_details_inner">
          <div className="row">
            <div className="col-md-6">
              <div className="left_img">
                <img className="img-fluid" src={PageDatails.ImageURL} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="portfolio_right_text">
                <h4>{PageDatails.Title}</h4>
                <p className="alignText">{PageDatails.ProjectIntro}</p>
                <ul className="list">
                  <li>
                    <span>Year</span>: {PageDatails.Year}
                  </li>
                  {PageDatails["Tools Used"] ? (
                    <li>
                      <span>
                        <h5>Tools Used</h5>
                      </span>
                    </li>
                  ) : null}
                  {PageDatails["Tools Used"].Software ? (
                    <li>
                      <span>Software</span>:{" "}
                      {PageDatails["Tools Used"].Software}
                    </li>
                  ) : null}
                  {PageDatails["Tools Used"].Hardware ? (
                    <li>
                      <span>Hardware</span>:{" "}
                      {PageDatails["Tools Used"].Hardware}
                    </li>
                  ) : null}
                  {PageDatails["Tools Used"].Environment ? (
                    <li>
                      <span>Environment</span>:{" "}
                      {PageDatails["Tools Used"].Environment}
                    </li>
                  ) : null}
                  {/* Start Document */}
                  <li>
                    <span>
                      <h5>Documents</h5>
                    </span>
                    : Click the icon to Download Documents
                  </li>
                  <div className="social_widget">
                    <ul className="list">
                      <li>
                        <figure>
                          <a
                            href={SpellMeFile}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="img-fluid"
                              src={ppt}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">Presentation</font>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <span>
                      <h5>Article</h5>
                    </span>
                    : Click the icon to read related article
                  </li>
                  <a
                    href="https://medium.com/datadriveninvestor/edutainment-game-spell-me-66fb21fb1b80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-medium customSize"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                  {/* End Document */}
                </ul>
              </div>
            </div>
          </div>
          {parts.map((p, key) => (
            <p className="alignText" key={key}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
