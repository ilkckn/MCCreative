import "./AboutMeLanding.css";
import { useTranslation } from "react-i18next";
import { HiMiniArrowLongRight } from "react-icons/hi2";

function AboutMeLanding() {
  const { t } = useTranslation();

  return (
    <main className="about-me-landing">
      <section className="sec-1">
        <div className="small-header">
          <span></span>
          <p>{t("about_landing.small_header")}</p>
        </div>
        <div className="main-header">
          <h1>{t("about_landing.title_1")}</h1>
          <h1 className="has-dash">
            {t("about_landing.title_2")} <span className="dash"></span>
          </h1>
          <h1 className="italic">{t("about_landing.title_3")}</h1>
        </div>
        <div className="main-desc">
          <p>{t("about_landing.desc_1")}</p>
          <p>{t("about_landing.desc_2")}</p>
        </div>
        <ul className="my-info">
          <li>{t("about_landing.list_1")}</li>
          <li>{t("about_landing.list_2")}</li>
          <li>{t("about_landing.list_3")}</li>
          <li>{t("about_landing.list_4")}</li>
        </ul>
        <div className="btns">
          <button>
            {t("about_landing.btn_talk")}{" "}
            <HiMiniArrowLongRight className="right-arrow" />
          </button>
          <button>{t("about_landing.btn_works")}</button>
        </div>
      </section>

      <section className="sec-2">
        <div className="name">
          <h1>Musa Çekcen</h1>
          <p className="title">{t("about_landing.job_title")}</p>
          <div className="location">
            <span className="icon">📍</span>
            <p>Lörrach im Baden-Württemberg, Germany</p>
          </div>
        </div>

        <div className="info">
          <div className="stat">
            <div className="stat-value">
              100<span>%</span>
            </div>
            <p className="stat-label">{t("about_landing.stat_client_focus")}</p>
          </div>
          <div className="stat">
            <div className="stat-value">
              3<span>-4</span>
            </div>
            <p className="stat-label">{t("about_landing.stat_delivery")}</p>
          </div>
          <div className="stat">
            <div className="stat-value">
              1<span>:1</span>
            </div>
            <p className="stat-label">{t("about_landing.stat_contact")}</p>
          </div>
          <div className="stat">
            <div className="stat-value">
              0<span>€</span>
            </div>
            <p className="stat-label">{t("about_landing.stat_fees")}</p>
          </div>
        </div>

        <div className="language-level">
          <div className="lang-row">
            <span className="lang-name">
              <span className="lang-code">TR</span>{t("about_landing.lang_turkish")}
            </span>
            <span className="lang-level">{t("about_landing.lang_native")}</span>
          </div>
          <div className="lang-row">
            <span className="lang-name">
              <span className="lang-code">EN</span>{t("about_landing.lang_english")}
            </span>
            <span className="lang-level">{t("about_landing.lang_fluent")}</span>
          </div>
          <div className="lang-row">
            <span className="lang-name">
              <span className="lang-code">DE</span>{t("about_landing.lang_german")}
            </span>
            <span className="lang-level">
              {t("about_landing.lang_learning")}
            </span>
          </div>
        </div>

        <div className="my-word">
          <p>"{t("about_landing.quote")}"</p>
        </div>
      </section>
    </main>
  );
}

export default AboutMeLanding;
