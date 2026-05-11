import "./ProjectsGrid.css";
// import websites from "../../MyWebsites.js";
import {
  HiMiniArrowSmallRight,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { TbArrowUpRight } from "react-icons/tb";

function ProjectsGrid({ filteredProject }) {

  return (
    <main className="projects-grid-container">
      {filteredProject.map((website) => (
        <div className="project-box" key={website.id}>
          <a
            className="view-project"
            href={website.live_demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <HiOutlineArrowLongRight className="right-arrow" />
          </a>
          <div className="image">
            <img src={website.image} alt={website.name} />
            <p
              className={`project-status ${website.latest ? "latest" : "in-progress"}`}
            >
              {website.latest ? "Latest Project" : "In Progress"}
            </p>
          </div>
          <div className="info">
            <h2>{website.type}</h2>
            <h1>{website.name}</h1>
            <p>{website.description}</p>
            <span></span>
            <p>
              {website.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </p>
            <p>
              Live Demo <HiMiniArrowSmallRight className="right-arrow" />
              <a
                href={website.live_demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
                <TbArrowUpRight className="live-demo" />
              </a>
            </p>
          </div>
        </div>
      ))}
      <div className="coming-soon">
        <p>✦</p>
        <h2>Next Project Coming Soon</h2>
      </div>
    </main>
  );
}

export default ProjectsGrid;
