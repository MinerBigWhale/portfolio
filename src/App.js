import React from "react";
import HeaderComponent from "./Layout/Components/Header";
import { Footer } from "./Layout/Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeComponent } from "./Pages/HomeComponent";
import { AboutComponent } from "./Pages/AboutComponent";
import { BreadCrumbsComponent } from "./Layout/Components/BreadCrumbs";
import { BlogComponent } from "./Pages/BlogComponent";
import ContactComponent from "./Pages/ContactComponent";
import { FaceCSComponent } from "./Pages/ProjectComponents/FaceCSComponent";
import { ArthrocureComponent } from "./Pages/ProjectComponents/ArthrocureComponent";
import { ChatbotComponent } from "./Pages/ProjectComponents/ChatbotComponent";
import { EFarmingComponent } from "./Pages/ProjectComponents/EFarmingComponent";
import { NPDComponent } from "./Pages/ProjectComponents/NPDComponent";
import { NWGSComponent } from "./Pages/ProjectComponents/NWGSComponent";
import { NurseryMSComponent } from "./Pages/ProjectComponents/NurseryMSComponent";
import { SpellMeComponent } from "./Pages/ProjectComponents/SpellMeComponent";
import { SupplyChainMSComponent } from "./Pages/ProjectComponents/SupplyChainMSComponent";
import { MediaComponent } from "./Pages/MediaComponent";
import { ProjectComponent } from "./Pages/ProjectComponent";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breadCLinks: [],
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll(event) {
    let header = document.getElementById("myHeader");
    if (!!header) {
      let sticky = !!header ? header.offsetTop : 0;
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }

  breadCrumbsLink() {
    const windowURL = window.location.href;
    const urlArr = windowURL.split("/");
    const url = !!urlArr && urlArr.length > 0 ? urlArr.pop() : "";
    const links = [
      {
        name: "Home",
        click: "/",
      },
    ];
    switch (url) {
      case "":
      case "home":
        break;
      case "about": {
        links.push({
          name: "About Me",
          click: "/about",
        });
        break;
      }
      case "blog": {
        links.push({
          name: "Blog",
          click: "/blog",
        });
        break;
      }
      case "contact": {
        links.push({
          name: "Contact",
          click: "/contact",
        });
        break;
      }
      case "media": {
        links.push({
          name: "Gallery",
          click: "/media",
        });
        break;
      }
      case "projects": {
        links.push({
          name: "Project",
          click: "/projects",
        });
        break;
      }
      case "Project-Face%20Classification%20System": {
        links.push({
          name: "Project",
          click: "/projects",
        });links.push({
          name: "Face Classification System",
          click: "/Project-Face Classification System",
        });
        break;
      }
      case "Project-Arthrocure": {
        links.push({
          name: "Project",
          click: "/projects",
        });links.push({
          name: "Arthrocure",
          click: "/Project-Arthrocure",
        });
        break;
      }
      case "Project-Spell%20Me": {
        links.push({
          name: "Project",
          click: "/projects",
        });links.push({
          name: "Spell Me",
          click: "/Project-Spell Me",
        });
        break;
      }
      case "Project-E-Farming": {
        links.push({
          name: "Project",
          click: "/projects",
        });links.push({
          name: "E-Farming",
          click: "/Project-E-Farming",
        });
        break;
      }
      case "Project-Chatbot": {
        links.push({
          name: "Project",
          click: "/projects",
        });links.push({
          name: "Chatbot",
          click: "/Project-Chatbot",
        });
        break;
      }
      case "Project-Supply%20Chain%20Management%20System": {
        links.push({
          name: "Project",
          click: "/projects",
        });links.push({
          name: "Supply Chain Management System",
          click: "/Project-Supply Chain Management System",
        });
        break;
      }
      case "Project-Nursery%20Management%20System": {
        links.push({
          name: "Project",
          click: "/projects",
        });links.push({
          name: "Nursery Management System",
          click: "/Project-Nursery Management System",
        });
        break;
      }
      case "Project-Nano%20Processor%20Design": {
        links.push({
          name: "Project",
          click: "/projects",
        });links.push({
          name: "Nano Processor Design",
          click: "/Project-Nano Processor Design",
        });
        break;
      }
      case "Project-Nozama%20Warrior%20Game%20Simulation": {
        links.push({
          name: "Project",
          click: "/projects",
        });links.push({
          name: "Nozama Warrior Game Simulation",
          click: "/Project-Nozama Warrior Game Simulation",
        });
        break;
      }
      default: {
        links.push({
          name: "Page not found",
          click: "404",
        });
        break;
      }
    }
    this.setState({ breadCLinks: links });
  }
  render() {
    return (
      <BrowserRouter>
        <HeaderComponent onHeaderClick={this.breadCrumbsLink.bind(this)} />
        <BreadCrumbsComponent
          breadCLinks={this.state.breadCLinks}
          checkURL={this.breadCrumbsLink.bind(this)}
        />
        <Switch>
          <Route path="/about" component={AboutComponent}></Route>
          <Route path="/blog" component={BlogComponent}></Route>
          <Route path="/contact" component={ContactComponent}></Route>
          <Route path="/media" component={MediaComponent}></Route>
          <Route
            path="/projects"
            render={(props) => (
              <ProjectComponent
                onHeaderClick={this.breadCrumbsLink.bind(this)}
                {...props}
              />
            )}
          ></Route>
          <Route
            path="/Project-Face Classification System"
            component={FaceCSComponent}
          ></Route>
          <Route
            path="/Project-Arthrocure"
            component={ArthrocureComponent}
          ></Route>
          <Route path="/Project-Spell Me" component={SpellMeComponent}></Route>
          <Route
            path="/Project-E-Farming"
            component={EFarmingComponent}
          ></Route>
          <Route path="/Project-Chatbot" component={ChatbotComponent}></Route>
          <Route
            path="/Project-Supply Chain Management System"
            component={SupplyChainMSComponent}
          ></Route>
          <Route
            path="/Project-Nursery Management System"
            component={NurseryMSComponent}
          ></Route>
          <Route
            path="/Project-Nano Processor Design"
            component={NPDComponent}
          ></Route>
          <Route
            path="/Project-Nozama Warrior Game Simulation"
            component={NWGSComponent}
          ></Route>
          <Route
            path="/"
            render={(props) => (
              <HomeComponent onHeaderClick={this.breadCrumbsLink.bind(this)} />
            )}
          ></Route>
          
          <Route component={AboutComponent} 
           render={(props) => (
            <AboutComponent onHeaderClick={this.breadCrumbsLink.bind(this)} />
           )}
          ></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
