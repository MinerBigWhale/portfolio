import React from "react";
import pdf from "../../assets/images/Icons/pdf.svg";
import "../../assets/styles/Project.scss";
import Project_Proposal from "../../assets/Docs/Project_Proposal.pdf";
import Feasibility_report from "../../assets/Docs/Feasibility_report.pdf";
import Software_Requirements_Specification from "../../assets/Docs/Software_Requirements_Specification.pdf";
import Software_Architecture_Document from "../../assets/Docs/Software_Architecture_Document.pdf";
import Test_plan from "../../assets/Docs/Test_plan.pdf";
import Final_Report from "../../assets/Docs/Final_Report.pdf";
import projectDetails from "../../static/ProjectData";

export const FaceCSComponent = () => {
  const PageDatails = projectDetails.Projects[8].data;
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
                            href={Project_Proposal}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">Proposal</font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <a
                            href={Feasibility_report}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">Feasibility</font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <a
                            href={Software_Requirements_Specification}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">SRS</font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <a
                            href={Software_Architecture_Document}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">SAD</font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <a
                            href={Test_plan}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">Test Plan</font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <a
                            href={Final_Report}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="img-fluid"
                              src={pdf}
                              alt="ppt"
                              width="50"
                              height="45"
                            />
                          </a>
                          <figcaption>
                            <font size="1">Final Report</font>
                          </figcaption>
                        </figure>
                      </li>
                      {/* End Document */}
                    </ul>
                  </div>
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
