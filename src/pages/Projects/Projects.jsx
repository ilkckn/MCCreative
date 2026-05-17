import ProjectsCta from "../../components/Projects-CTA/ProjectsCta";
import ProjectsGrid from "../../components/Projects-Grid/ProjectsGrid";
import "./Projects.css";
import { useState } from "react";
import websites from "../../MyWebsites.js";

function Projects() {
  const [isActive, setIsActive] = useState("all");
  const [filterButtons, setFilterButtons] = useState([
    { name: "all", label: "All" },
    { name: "salon-beauty", label: "Salon & Beauty" },
    { name: "restaurant-cafe", label: "Restaurant & Cafe" },
    { name: "retail", label: "Retail" },
    { name: "other", label: "Other" },
  ]);

  const activeButton = (buttonName) => {
    setIsActive(buttonName);
  };

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
            <p>my work</p>
          </div>
          <div className="main-header">
            <h1>Every Project</h1>
            <h1>
              tells a <span>story.</span>
            </h1>
          </div>
          <div className="filter-btns">
            {filterButtons.map((button) => (
              <button
                key={button.name}
                className={`${button.name} ${isActive === button.name ? "active" : ""}`}
                onClick={() => activeButton(button.name)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="desc">
            <div className="delivered-project">
              <p className="number">
                4 <span>+</span>
              </p>
              <p>
                <span>Projects</span> delivered and counting
              </p>
              <p>
                A collection of websites built for real local businesses —
                salons, cafés, restaurants and more. Each one designed to
                attract customers and make your business shine online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-grid">
        <ProjectsGrid filteredProject={filteredProject} />
      </section>
      <section className="cta">
        <ProjectsCta />
      </section>
    </main>
  );
}

export default Projects;
