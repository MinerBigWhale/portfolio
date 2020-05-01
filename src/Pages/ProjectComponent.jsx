import React from "react";
import projectData from "../static/ProjectData";
import ProjectCardComponent from "../components/ProjectCardComponent";
import { ProjectCategoryComponent } from "../components/ProjectCategoryComponent";
export class ProjectComponent extends React.Component {
  breadCrumbLinks() {
    this.props.onHeaderClick();
  }
  addFilter(event) {
    const classN = event.target.id;
    const projTypes = Object.values(projectData.ProjectTypes);

    if (!!classN) {
      for (const x in projTypes) {
        this.addStyle(projTypes[x], "none");
      }
    }
    if (!!classN && classN !== projectData.ProjectTypes.AllCategories) {
      this.addStyle(classN, "block");
    } else {
      for (const x in projTypes) {
        this.addStyle(projTypes[x], "block");
      }
    }
  }

  addStyle(classN, styleTy) {
    const all = document.getElementsByClassName(classN);
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = styleTy;
    }
  }

  render() {
    return (
      <section className="projects_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>My Projects</h2>
            <p>{projectData.projectPageDescription}</p>

            <div className="projects_fillter">
              <ul className="filter list" onClick={this.addFilter.bind(this)}>
                {Object.values(projectData.ProjectTypes).map((val, key) => {
                  return (
                    <ProjectCategoryComponent
                      key={key}
                      val={val}
                    ></ProjectCategoryComponent>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className="projects_inner row"
            onClick={this.breadCrumbLinks.bind(this)}
          >
            {projectData.Projects.reverse().map((details, index) => {
              return (
                <ProjectCardComponent
                  key={index}
                  title={details.data.Title}
                  cardDescription={details.data.CardDescription}
                  category={details.data.Category}
                  img={details.data.ImageURL}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
