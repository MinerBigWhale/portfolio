import React from "react";
import aboutData from "../static/AboutData";
import { Link } from "react-router-dom";

export const AboutComponent = () => {
  const parts = aboutData.MySelf.split("\n");
  const sortedEmploymentDetails = []
    .concat(aboutData.EmploymentDetails)
    .sort((a, b) => {
      let EndDateA = a.EndDate === "Present" ? new Date() : new Date(a.EndDate);
      let EndDateB = b.EndDate === "Present" ? new Date() : new Date(b.EndDate);
      let StartDateA = new Date(a.StartDate);
      let StartDateB = new Date(b.StartDate);
      return EndDateA - EndDateB === 0
        ? StartDateB - StartDateA
        : EndDateB - EndDateA;
    });

  return (
    <div>
      {/* <!--================Welcome Area =================--> */}
      <section className="welcome_area p_120">
        <div className="container">
          <div className="row welcome_inner">
            <div className="col-lg-6">
              <div className="welcome_text">
                <h4>About Myself</h4>

                {parts.map((p, index) => (
                  <p className="no-margin-text" key={index}>
                    {p} <br key={index} />
                  </p>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="welcome_text">
                <h4>Education</h4>
                <p>{aboutData.Education}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================End Welcome Area =================--> */}

      {/* <!--================Feature Area =================--> */}
      <section className="feature_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>Employment</h2>
            <p>{aboutData.Employment}</p>
          </div>
          <div className="feature_inner row">
            {sortedEmploymentDetails.map((details, key) => (
              <div className="col-lg-4 col-md-6" key={key}>
                <div className="feature_item">
                  <i className={details.Icon}></i>
                  <h4>{details.CompanyName}</h4>
                  <h5>{details.Position}</h5>
                  <h6 className="text-muted">
                    {"("}
                    {details.StartDate}
                    {" - "}
                    {details.EndDate}
                    {")"}
                  </h6>
                  <p> {details.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!--================End Feature Area =================--> */}

      {/* <!--================Testimonials Area =================--> */}
      <section className="testimonials_area testi_two p_120">
        <div className="container">
          <div className="main_title">
            <h2>Download Documents</h2>
            <p>If you want my Resume or curriculum vitae click blow!</p>
          </div>
          <div className="button-group-area mt-40">
            <Link
              to={aboutData.Docs.CV}
              target="_blank"
              rel="noopener noreferrer"
              className="genric-btn success circle arrow"
            >
              Download CV
              <i className="fas fa-download"> </i>
            </Link>
            <Link
              to={aboutData.Docs.Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="genric-btn success circle arrow"
            >
              Download Résumé
              <i className="fas fa-download"> </i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
