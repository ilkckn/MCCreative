import "./SelectedWork.css";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import website from "../../MyWebsites.js";

function SelectedWork() {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    navigate("/projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="sw-container">
      {/* ── Başlık ── */}
      <section className="sw-sec-1">
        <div className="sw-small-header">
          <span></span>
          <p>Selected Work</p>
        </div>
        <div className="sw-header-row">
          <div className="sw-main-header">
            <h1>Recent</h1>
            <h1 className="italic">projects</h1>
          </div>
          <div className="sw-view-all">
            <NavLink to="/projects">View all projects</NavLink>
            <HiMiniArrowLongRight className="sw-arrow-icon" />
          </div>
        </div>
      </section>

      {/* ── Proje Kartları ── */}
      <section className="sw-sec-2">
        {/* Kart 1 */}
        <div className="sw-project-box">
          <div className="sw-image-wrap">
            <img src={website[0].image} alt={website[0].name} />
            <p className="sw-status">Latest</p>
          </div>
          <div className="sw-card-body">
            <p className="sw-card-type">{website[0].type}</p>
            <h2 className="sw-card-title">{website[0].name}</h2>
            <p className="sw-card-desc">{website[0].description}</p>
            <div className="sw-card-tags">
              {website[0].tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="sw-view-btn">
            <button onClick={handleScrollToTop}>View project</button>
          </div>
        </div>

        {/* Kart 2 */}
        <div className="sw-project-box">
          <div className="sw-image-wrap">
            <img
              src={website[1]?.image || website[0].image}
              alt={website[1]?.name || website[0].name}
            />
            <p className="sw-status">In progress</p>
          </div>
          <div className="sw-card-body">
            <p className="sw-card-type">
              {website[1]?.type || website[0].type}
            </p>
            <h2 className="sw-card-title">
              {website[1]?.name || website[0].name}
            </h2>
            <p className="sw-card-desc">
              {website[1]?.description || website[0].description}
            </p>
            <div className="sw-card-tags">
              {(website[1]?.tags || website[0].tags).map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="sw-view-btn">
            <button onClick={handleScrollToTop}>View project</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SelectedWork;
