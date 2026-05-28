import "./Landing.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WhatIOffer from "../../components/WhatIOffer/WhatIOffer.jsx";
import SelectedWork from "../../components/SelectedWork/SelectedWork.jsx";
import AboutMeLanding from "../../components/AboutMeLanding/AboutMeLanding.jsx";
import GetYourBusiness from "../../components/GetYourBusiness/GetYourBusiness.jsx";

function Landing() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <main className="landing-container">
      <section className="sec-1">
        <section className="land-left">
          <div className="small-header">
            <span></span>
            <p>{t("landing.small_header")}</p>
          </div>
          <div className="main-header">
            <h1>{t("landing.title_1")}</h1>
            <h1>{t("landing.title_2")}</h1>
            <h1 className="italic">{t("landing.title_3")}</h1>
          </div>
          <div className="main-desc">
            <p>{t("landing.desc")}</p>
          </div>
          <div className="btns">
            <button onClick={() => navigate("/projects")}>
              {t("landing.btn_work")}
            </button>
            <button onClick={() => navigate("/about")}>
              {t("landing.btn_how")}
            </button>
          </div>
        </section>

        <section className="land-right">
          <div className="tech-skills">
            <p className="header">{t("landing.tech_skills")}</p>
            <div className="skills">
              <div className="skill-item">
                <div className="skill-label">
                  <span>React</span>
                  <span>95%</span>
                </div>
                <div className="percentage-bar">
                  <div className="fill" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-label">
                  <span>JavaScript</span>
                  <span>85%</span>
                </div>
                <div className="percentage-bar">
                  <div className="fill" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-label">
                  <span>HTML/CSS</span>
                  <span>90%</span>
                </div>
                <div className="percentage-bar">
                  <div className="fill" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">
                2<span>+</span>
              </div>
              <p className="metric-label">{t("landing.metric_projects")}</p>
            </div>
            <div className="metric-card">
              <div className="metric-value">
                100<span>%</span>
              </div>
              <p className="metric-label">{t("landing.metric_satisfaction")}</p>
            </div>
            <div className="metric-card">
              <div className="metric-value">
                3<span>+</span>
              </div>
              <p className="metric-label">{t("landing.metric_experience")}</p>
            </div>
          </div>
        </section>
      </section>

      <WhatIOffer />
      <SelectedWork />
      <AboutMeLanding />
      <GetYourBusiness />
    </main>
  );
}

export default Landing;
