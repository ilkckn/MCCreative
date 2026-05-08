import "./SelectedWork.css";
import { NavLink } from "react-router-dom";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import website from "../../MyWebsites.js";

function SelectedWork() {
  return (
    <main className="selected-work">
      <section className="sec-1">
        <div className="small-header">
          <span></span>
          <p>selected work</p>
        </div>
        <div className="main-header-view-all-projects">
          <div className="main-header">
            <h1>Recent</h1>
            <h1>projects</h1>
          </div>
          <div className="view-all-projects">
            <NavLink to="/projects">View all projects</NavLink>
            <HiMiniArrowLongRight className="arrow-icon" />
          </div>
        </div>
      </section>

      <section className="sec-2">
        <div className="project-box">
          <div className="image-status">
            <img src={website[0].image} alt={website[0].name} />
            <p className="status">Latest</p>
          </div>
          <div className="project-desc">
            <p>{website[0].type}</p>
            <h2>{website[0].name}</h2>
            <p>{website[0].description}</p>
            <p>
              {website[0].tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </p>
          </div>
          <div className="view-project-btn">
            <NavLink to="/projects">View project</NavLink>
          </div>
        </div>

        <div className="project-box">
          <div className="image-status">
            <img src={website[0].image} alt={website[0].name} />
            <p className="status">Latest</p>
          </div>
          <div className="project-desc">
            <p>{website[0].type}</p>
            <h2>{website[0].name}</h2>
            <p>{website[0].description}</p>
            <p>
              {website[0].tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </p>
          </div>
          <div className="view-project-btn">
            <NavLink to="/projects">View project</NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SelectedWork;
