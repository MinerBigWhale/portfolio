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
            <Link to="/">
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
                <Link to="/">{generalData.Pages.Home}</Link>
              </li>
              <li>
                <Link to="/about">{generalData.Pages.About}</Link>
              </li>
              <li>
                <Link to="/projects">{generalData.Pages.Projects}</Link>
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
