import "./StayUpdated.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

function StayUpdated() {
  const { t } = useTranslation();

  return (
    <main className="stay-updated-container">
      <section className="stay-updated-left">
        <div className="updated-small-header">
          <span></span>
          <p>{t("blog.stay_small_header")}</p>
        </div>
        <div className="main-header">
          <h1>{t("blog.stay_title_1")}</h1>
          <h1>{t("blog.stay_title_2")}</h1>
          <h1>{t("blog.stay_title_3")}</h1>
        </div>
        <p className="description">{t("blog.stay_desc")}</p>
        <div className="subscribe">
          <input type="text" placeholder={t("blog.stay_placeholder")} />
          <button>
            {t("blog.stay_btn")}{" "}
            <RiArrowRightSLine className="arrow-subscribe" />
          </button>
        </div>
        <p className="no-spam">{t("blog.stay_no_spam")}</p>
      </section>

      <section className="stay-updated-right">
        <p className="header-text">{t("blog.topics_header")}</p>
        <div className="web-design">
          <h2>{t("blog.topic_web_design")}</h2>
          <p>2 post</p>
        </div>
        <div className="local-seo">
          <h2>{t("blog.topic_seo")}</h2>
          <p>1 post</p>
        </div>
        <div className="business-tips">
          <h2>{t("blog.topic_business")}</h2>
          <p>2 posts</p>
        </div>
        <div className="react-dev">
          <h2>{t("blog.topic_react")}</h2>
          <p>1 post</p>
        </div>
      </section>
    </main>
  );
}

export default StayUpdated;
