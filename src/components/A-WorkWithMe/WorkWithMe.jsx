import "./WorkWithMe.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function WorkWithMe() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleContactClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  const handleProjectClick = () => {
    navigate("/projects");
    window.scrollTo(0, 0);
  };

  return (
    <main className="work-with-me">
      <section className="sec-1-work-with-me">
        <div className="small-header">
          <span></span>
          <p>{t("work_with_me.small_header")}</p>
        </div>
        <div className="main-header">
          <h1>{t("work_with_me.title_1")}</h1>
          <h1>{t("work_with_me.title_2")}</h1>
          <h1 className="italic">{t("work_with_me.title_3")}</h1>
        </div>
        <div className="desc">
          <p>{t("work_with_me.desc")}</p>
        </div>
        <div className="btns">
          <button onClick={handleContactClick}>
            {t("work_with_me.btn_contact")}
          </button>
          <button onClick={handleProjectClick}>
            {t("work_with_me.btn_projects")}
          </button>
        </div>
      </section>

      <section className="sec-2-work-with-me">
        <div className="box">
          <div className="icon">📞</div>
          <div className="info">
            <h2>{t("work_with_me.box_1_title")}</h2>
            <p>{t("work_with_me.box_1_desc")}</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">⚡</div>
          <div className="info">
            <h2>{t("work_with_me.box_2_title")}</h2>
            <p>{t("work_with_me.box_2_desc")}</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">💰</div>
          <div className="info">
            <h2>{t("work_with_me.box_3_title")}</h2>
            <p>{t("work_with_me.box_3_desc")}</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">🗣️</div>
          <div className="info">
            <h2>{t("work_with_me.box_4_title")}</h2>
            <p>{t("work_with_me.box_4_desc")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WorkWithMe;
