import "./CommonQuestions.css";
import { useTranslation } from "react-i18next";
import { TiStar, TiStarHalf } from "react-icons/ti";

function CommonQuestions() {
  const { t } = useTranslation();

  return (
    <main className="common-questions-container">
      <div className="cq-small-header">
        <span></span>
        <p>{t("contact.cq_small_header")}</p>
      </div>
      <div className="questions">
        <div className="question">
          <p>{t("contact.q1_title")}</p>
          <p>{t("contact.q1_desc")}</p>
        </div>
        <div className="question">
          <p>{t("contact.q2_title")}</p>
          <p>{t("contact.q2_desc")}</p>
        </div>
        <div className="question">
          <p>{t("contact.q3_title")}</p>
          <p>{t("contact.q3_desc")}</p>
        </div>
        <div className="question">
          <p>{t("contact.q4_title")}</p>
          <p>{t("contact.q4_desc")}</p>
        </div>
      </div>
      <div className="comments">
        <div className="comment">
          <p>
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
            <TiStarHalf className="star-icon" />
          </p>
          <p>"Professional, fast and very easy to work with. He understood exactly what we needed and delivered beyond expectations."</p>
          <div className="name-avatar">
            <div className="avatar">MB</div>
            <div className="name">
              <p>Marc Bauer</p>
              <p>Brew & Co Café, Basel</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <p>
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
          </p>
          <p>"Musa is a fantastic web designer. He created a beautiful website for my business and was a pleasure to work with. Highly recommended!"</p>
          <div className="name-avatar">
            <div className="avatar">JD</div>
            <div className="name">
              <p>John Doe</p>
              <p>Example Company, New York</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CommonQuestions;