import ProjectsCta from "../../components/Projects-CTA/ProjectsCta";
import ProjectsGrid from "../../components/Projects-Grid/ProjectsGrid";
import "./Projects.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import websites from "../../MyWebsites.js";

function Projects() {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState("all");

  const filterButtons = [
    { name: "all",             label: t("projects_page.filter_all") },
    { name: "salon-beauty",    label: t("projects_page.filter_salon") },
    { name: "restaurant-cafe", label: t("projects_page.filter_restaurant") },
    { name: "retail",          label: t("projects_page.filter_retail") },
    { name: "other",           label: t("projects_page.filter_other") },
  ];

  const filteredProject = websites.filter((website) => {
    if (isActive === "all") return true;
    return website.category === isActive;
  });

  return (
    <main className="projects-container">
      <section className="hero-sec">
        <div className="left">
          <div className="header-top">
            <span></span>
            <p>{t("projects_page.small_header")}</p>
          </div>
          <div className="main-header">
            <h1>{t("projects_page.title_1")}</h1>
            <h1>{t("projects_page.title_2")}</h1>
          </div>
        </div>
        <div className="right">
          <div className="desc">
            <div className="delivered-project">
              <p className="number">5 <span>+</span></p>
              <p><span>Projects</span> {t("projects_page.delivered")}</p>
              <p>{t("projects_page.delivered_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-grid">
        <ProjectsGrid
          filteredProject={filteredProject}
          filterButtons={filterButtons}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </section>
      <section className="cta">
        <ProjectsCta />
      </section>
    </main>
  );
}

export default Projects;