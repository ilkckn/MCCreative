import "./MyStory.css";
import { useTranslation } from "react-i18next";
import timelineData from "./MyStory.js";

function MyStory() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || "en";

  return (
    <main className="my-story">
      <section className="sec-1-my-story">
        <div className="small-header">
          <span></span>
          <p>{t("my_story.small_header")}</p>
        </div>
        <div className="main-header">
          <h1>{t("my_story.title_1")}</h1>
          <h1 className="italic">{t("my_story.title_2")}</h1>
        </div>
        <div className="desc">
          <p>{t("my_story.desc_1")}</p>
          <p>{t("my_story.desc_2")}</p>
          <p className="quote">"{t("my_story.quote")}"</p>
        </div>
        <div className="list">
          <ul>
            <li>{t("my_story.list_1")}</li>
            <li>{t("my_story.list_2")}</li>
            <li>{t("my_story.list_3")}</li>
            <li>{t("my_story.list_4")}</li>
          </ul>
        </div>
      </section>

      <section className="sec-2-my-story">
        <div className="small-header">
          <span></span>
          <p>{t("my_story.exp_header")}</p>
        </div>
        <div className="experiences">
          <div className="timeline">
            {timelineData.map((item) => (
              <div
                key={item.id}
                className={"tl-item " + (item.current ? "current" : "")}
              >
                <div className="tl-dot">
                  <div className="tl-dot-inner"></div>
                </div>
                <div className="tl-content">
                  <span className="tl-year">{item.year}</span>
                  <h3 className="tl-title">
                    {item.title?.[lang] || item.title?.en}
                  </h3>
                  <span className="tl-place">
                    {item.place?.[lang] || item.place?.en}
                  </span>
                  <p className="tl-desc">
                    {item.desc?.[lang] || item.desc?.en}
                  </p>
                  <div className="tl-tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="tl-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MyStory;
