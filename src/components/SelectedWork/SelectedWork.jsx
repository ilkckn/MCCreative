import "./SelectedWork.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import website from "../../MyWebsites.js";

function SelectedWork() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleScrollToTop = () => {
    navigate("/projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="sw-container">
      <section className="sw-sec-1">
        <div className="sw-small-header">
          <span></span>
          <p>{t("selected_work.small_header")}</p>
        </div>
        <div className="sw-header-row">
          <div className="sw-main-header">
            <h1>{t("selected_work.title_1")}</h1>
            <h1 className="italic">{t("selected_work.title_2")}</h1>
          </div>
          <div className="sw-view-all">
            <NavLink to="/projects" onClick={handleScrollToTop}>{t("selected_work.view_all")}</NavLink>
            <HiMiniArrowLongRight className="sw-arrow-icon" />
          </div>
        </div>
      </section>

      <section className="sw-sec-2">
        <div className="sw-project-box">
          <div className="sw-image-wrap">
            <img src={website[3].image} alt={website[3].name} />
            <p className="sw-status">{t("selected_work.status_latest")}</p>
          </div>
          <div className="sw-card-body">
            <p className="sw-card-type">{t(website[3].typeKey)}</p>
            <h2 className="sw-card-title">{t(website[3].nameKey)}</h2>
            <p className="sw-card-desc">{t(website[3].descKey)}</p>
            <div className="sw-card-tags">
              {website[3].tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="sw-view-btn">
            <button onClick={handleScrollToTop}>{t("selected_work.view_project")}</button>
          </div>
        </div>

        <div className="sw-project-box">
          <div className="sw-image-wrap">
            <img src={website[4]?.image || website[0].image} alt={website[4]?.nameKey || website[0].nameKey} />
            <p className="sw-status">{t("selected_work.status_latest")}</p>
          </div>
          <div className="sw-card-body">
            <p className="sw-card-type">{t(website[4]?.typeKey || website[0].typeKey)}</p>
            <h2 className="sw-card-title">{t(website[4]?.nameKey || website[0].nameKey)}</h2>
            <p className="sw-card-desc">{t(website[4]?.descKey || website[0].descKey)}</p>
            <div className="sw-card-tags">
              {(website[4]?.tags || website[0].tags).map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="sw-view-btn">
            <button onClick={handleScrollToTop}>{t("selected_work.view_project")}</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SelectedWork;