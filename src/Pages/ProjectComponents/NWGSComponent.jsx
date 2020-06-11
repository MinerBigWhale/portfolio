import React from "react";
import pdf from "../../assets/images/Icons/pdf.svg";
import NWGSProjectDescription from "../../assets/Docs/NWGSProjectDescription.pdf";
import projectDetails from "../../static/ProjectData";

export const NWGSComponent = () => {
  const PageDatails = projectDetails.Projects[0].data;
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
                            href={NWGSProjectDescription}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="pdf"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">Description</font>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <span>
                      <h5>Project</h5>
                    </span>
                    : Click the icon to watch the project
                  </li>
                  <a
                    href="https://github.com/sabesansathananthan/Nozama_Warriors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <font color="black">
                      <i className="fab fa-github-square customSize"></i>
                    </font>
                  </a>
                  {/* end Document */}
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
