import "./ProjectsCta.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProjectsCta() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <main className="projects-cta-container">
      <section className="cta-left">
        <div className="cta-top-header">
          <span></span>
          <p>{t("projects_page.cta_small_header")}</p>
        </div>
        <div className="cta-main-header">
          <h1>{t("projects_page.cta_title_1")}</h1>
          <h1>
            <span>{t("projects_page.cta_title_2")}</span>
          </h1>
        </div>
        <div className="cta-desc">
          <p>{t("projects_page.cta_desc")}</p>
        </div>
        <div className="cta-btns">
          <button
            className="start-a-project"
            onClick={() => window.scrollTo({ top: 370, behavior: "smooth" })}
          >
            {t("projects_page.cta_btn_start")}
          </button>
          <button className="get-in-touch" onClick={() => navigate("/contact")}>
            {t("projects_page.cta_btn_touch")}
          </button>
        </div>
      </section>

      <section className="cta-right">
        <div className="cta-box">
          <div className="icon">📞</div>
          <div className="info">
            <p>{t("projects_page.cta_box_1_title")}</p>
            <p>{t("projects_page.cta_box_1_desc")}</p>
          </div>
        </div>
        <div className="cta-box">
          <div className="icon">⚡</div>
          <div className="info">
            <p>{t("projects_page.cta_box_2_title")}</p>
            <p>{t("projects_page.cta_box_2_desc")}</p>
          </div>
        </div>
        <div className="cta-box">
          <div className="icon">💰</div>
          <div className="info">
            <p>{t("projects_page.cta_box_3_title")}</p>
            <p>{t("projects_page.cta_box_3_desc")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsCta;
