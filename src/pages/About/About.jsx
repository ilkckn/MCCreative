import MyStory from "../../components/A-MyStory/MyStory.jsx";
import TechSkills from "../../components/A-TechSkills/TechSkills.jsx";
import WorkWithMe from "../../components/A-WorkWithMe/WorkWithMe.jsx";
import "./About.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function About() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleProjectClick = () => {
    navigate("/projects");
    window.scrollTo(0, 0);
  };
  const handleContactClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <main className="about">
      <section className="sec-1">
        <div className="content-left">
          <div className="small-header">
            <span></span>
            <p>{t("about.small_header")}</p>
          </div>
          <div className="main-header">
            <h1>{t("about.title_1")}</h1>
            <h1>{t("about.title_2")}</h1>
            <h1>{t("about.title_3")}</h1>
          </div>
          <div className="desc">
            <p>{t("about.desc")}</p>
          </div>
          <div className="btns">
            <button className="btn-1" onClick={handleContactClick}>
              {t("about.btn_talk")}
            </button>
            <button className="btn-2" onClick={handleProjectClick}>
              {t("about.btn_projects")}
            </button>
          </div>
        </div>

        <div className="content-right">
          <div className="name">
            <h1>Musa Çekcen</h1>
            <p>{t("about.job_title")}</p>
            <div className="location">
              <div className="icon">📍</div>
              <p>{t("about.location")}</p>
            </div>
          </div>
          <div className="info">
            <div className="percentage-delivery">
              <div className="percentage">
                <p>
                  100 <span>%</span>
                </p>
                <p>{t("about.stat_client_focus")}</p>
              </div>
              <div className="delivery">
                <p>3-4</p>
                <p>{t("about.stat_delivery")}</p>
              </div>
            </div>
            <div className="direct-contact-hidden-fees">
              <div className="direct-contact">
                <p>
                  1 <span>:1</span>
                </p>
                <p>{t("about.stat_contact")}</p>
              </div>
              <div className="hidden-fees">
                <p>
                  0 <span>€</span>
                </p>
                <p>{t("about.stat_fees")}</p>
              </div>
            </div>
          </div>
          <div className="language-level">
            <div className="turkish">
              <p>
                <span>tr</span>{t("about.lang_turkish")}
              </p>
              <p>{t("about.lang_native")}</p>
            </div>
            <div className="english">
              <p>
                <span>en</span>{t("about.lang_english")}
              </p>
              <p>{t("about.lang_fluent")}</p>
            </div>
            <div className="german">
              <p>
                <span>de</span>{t("about.lang_german")}
              </p>
              <p>{t("about.lang_learning")}</p>
            </div>
          </div>
          <div className="my-word">
            <p>"{t("about.quote")}"</p>
          </div>
        </div>
      </section>
      <section className="sec-2">
        <MyStory />
      </section>
      <section className="sec-3">
        <TechSkills />
      </section>
      <section className="sec-4">
        <WorkWithMe />
      </section>
    </main>
  );
}

export default About;
