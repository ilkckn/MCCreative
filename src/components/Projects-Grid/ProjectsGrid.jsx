import "./ProjectsGrid.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  HiMiniArrowSmallRight,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { TbArrowUpRight } from "react-icons/tb";
import { LuSlidersHorizontal } from "react-icons/lu";

function ProjectsGrid({
  filteredProject,
  filterButtons,
  isActive,
  setIsActive,
}) {
  const { t } = useTranslation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <main className="projects-grid-container">
      {/* ── Filter Bar ── */}
      <div className="filter-bar">
        {!isFilterOpen ? (
          <button className="filter-toggle-btn" onClick={handleToggleFilter}>
            <LuSlidersHorizontal className="filter-icon" />
            {t("projects_page.filter_btn")}
          </button>
        ) : (
          <div className="filter-options">
            <button className="filter-toggle-btn" onClick={handleToggleFilter}>
              <LuSlidersHorizontal className="filter-icon" />
              {t("projects_page.filter_btn")}
            </button>
            {filterButtons.map((button) => (
              <button
                key={button.name}
                className={`filter-option ${isActive === button.name ? "active" : ""}`}
                onClick={() => {
                  setIsActive(button.name);
                }}
              >
                {button.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Proje Kartları ── */}
      <div>
        {filteredProject.map((website) => (
          <div className="project-box" key={website.id}>
            <a
              className="view-project"
              href={website.live_demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects_page.view_project")}
              <HiOutlineArrowLongRight className="right-arrow" />
            </a>
            <div className="image">
              <img src={website.image} alt={website.name} />
              <p
                className={`project-status ${website.latest ? "latest" : "in-progress"}`}
              >
                {website.latest
                  ? t("projects_page.status_latest")
                  : t("projects_page.status_in_progress")}
              </p>
            </div>
            <div className="info">
              <h2>{website.type}</h2>
              <h1>{website.name}</h1>
              <p>{t(website.descKey)}</p>
              <span></span>
              <p>
                {website.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </p>
              <p>
                {t("projects_page.live_demo")}{" "}
                <HiMiniArrowSmallRight className="right-arrow" />
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
      </div>

      <div className="coming-soon">
        <p>✦</p>
        <h2>{t("projects_page.coming_soon")}</h2>
      </div>
    </main>
  );
}

export default ProjectsGrid;
