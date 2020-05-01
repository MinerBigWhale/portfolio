import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import generalData from "../../static/GeneralData";
import "../../assets/styles/headerTest.scss";

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProjects: false,
      breadCrumbs: [],
    };
  }

  componentDidMount() {
    this.breadCrumbLinks();
  }

  projectsList() {
    this.setState({ showProjects: true });
  }
  breadCrumbLinks() {
    this.props.onHeaderClick();
  }

  popupClose() {
    this.setState({ showProjects: false });
    this.breadCrumbLinks();
  }
  render() {
    return (
      <section className="navigation">
        <div
          className="nav-container"
          onClick={this.breadCrumbLinks.bind(this)}
        >
          <div className="brand">
            <Link to="/home">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle">
                <span></span>
              </a>
            </div>
            <ul className="nav-list">
              <li>
                <Link to="/home">{generalData.Pages.Home}</Link>
              </li>
              <li>
                <Link to="/about">{generalData.Pages.About}</Link>
              </li>
              <li>
                <Link to="/projects">{generalData.Pages.Projects}</Link>
                {/* <ul className="nav-dropdown">
                  <li>
                    <Link to="Project-Face Classification System">
                      Face Classification System
                    </Link>
                  </li>
                  <li>
                    <Link to="Project-Arthrocure">Arthrocure</Link>
                  </li>
                  <li>
                    <Link to="Project-Spell Me">Spell Me</Link>
                  </li>
                  <li>
                    <Link to="Project-E-Farming">E-Farming</Link>
                  </li>
                  <li>
                    <Link to="Project-Chatbot">Chatbot</Link>
                  </li>
                  <li>
                    <Link to="Project-Supply Chain Management System">
                      Supply Chain Management System
                    </Link>
                  </li>
                  <li>
                    <Link to="Project-Nursery Management System">
                      Nursery Management System
                    </Link>
                  </li>
                  <li>
                    <Link to="Project-Nano Processor Design">
                      Nano Processor Design
                    </Link>
                  </li>
                  <li>
                    <Link to="Project-Nozama Warrior Game Simulation">
                      Nozama Warrior Game Simulation
                    </Link>
                  </li>
                </ul>
               */}
              </li>
              <li>
                <Link to="/blog">{generalData.Pages.Blog}</Link>
              </li>
              <li>
                <Link to="/media">{generalData.Pages.Media}</Link>
              </li>
              <li>
                <Link to="/contact">{generalData.Pages.Contact}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}
