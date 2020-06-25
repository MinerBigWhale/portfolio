import React from "react";
import MapContainer from "../Layout/Components/GoogleMap";
import contactData from "../static/ContactData.js";
import ContactMe from "../components/ContactMe";

export default function ContactComponent() {
  const onMouseOut = (e) => {
    e.target.style.color = "#cccccc";
  };

  let call = contactData.MobileInfo.MobileNo.replace("(", "")
    .replace(/\s/g, "")
    .replace(")", "");

  return (
    <React.Fragment>
      <section className="contact_area p_120">
        <div className="container">
          <MapContainer></MapContainer>
          <div className="row">
            <div className="col-lg-3">
              <div className="contact_info">
                <div className="info_item">
                  <i className="lnr lnr-home"></i>
                  <h6>
                    {contactData.AddressInfo.City},{" "}
                    {contactData.AddressInfo.Country}
                  </h6>
                  <p>{contactData.AddressInfo.Address}</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-phone-handset"></i>
                  <h6>
                    <a href={`tel:${call}`}>
                      {contactData.MobileInfo.MobileNo}
                    </a>
                  </h6>
                  <p>{contactData.MobileInfo.ContactTime} </p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-envelope"></i>
                  <h6>
                    <a href={`mailto:${contactData.MailInfo.MailAddress}`}>
                      {contactData.MailInfo.MailAddress}
                    </a>
                  </h6>
                  <p>Send me your questions anytime!</p>
                </div>
                <div className="social_widget">
                  <ul className="list">
                    {contactData.SocialWidget.map((data, key) => {
                      return (
                        <li key={key}>
                          <a
                            onMouseOver={(e) => {
                              e.target.style.color = `${data.OnMouseOverColor}`;
                            }}
                            onMouseOut={onMouseOut}
                            href={data.ProfileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              className={`fontSize2 ${data.fontAwesomeIconName}`}
                            ></i>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <ContactMe />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
