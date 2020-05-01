import React from "react";
import "../../assets/styles/Footer.scss";
import footerData from "../../static/FooterData";
import generalData from "../../static/GeneralData";
import "../../assets/styles/Site.scss";

export const Footer = () => {
  let parts = footerData.FooterLine.split("\n");

  return (
    <footer className="footer_area p_footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6">
            <aside className="f_widget ab_widget">
              <div className="f_title">
                <h3>{generalData.FirstName}</h3>
                <br />

                {parts.map((p, index) => (
                  <p className="no-margin-text" key={index}>
                    {p} <br key={index} />
                  </p>
                ))}
                <br />
                <p>
                  Copyright &copy;
                  {new Date().getFullYear()} {generalData.FullName}
                </p>
              </div>
            </aside>
          </div>
          <div className="col-lg-5">
            <aside className="f_widget social_widget">
              <div className="f_titlefooter">
                <h3>FollowMe</h3>
                <br />
                <p>Let us be social</p>
              </div>
              <ul className="list">
                {footerData.SociaMedia.map((media, index) => (
                  <a
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <img
                      border="0"
                      alt={media.Name}
                      src={media.ImgSrc}
                      width="88"
                      height="50"
                      key={index}
                    />
                  </a>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </footer>
  );
};
