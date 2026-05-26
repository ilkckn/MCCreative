import CommonQuestions from "../../components/Contact-Common/CommonQuestions.jsx";
import Form from "../../components/Contact-Form/Form.jsx";
import "./Contact.css";
import processSteps from "./ProcessData.js";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || "en";

  return (
    <main className="contact-container">
      <section className="contact-get-in-touch">
        <div className="section-left">
          <div className="contact-small-header">
            <span></span>
            <p>{t("contact.small_header")}</p>
          </div>
          <div className="contact-main-header">
            <h1>{t("contact.title_1")}</h1>
            <h1>{t("contact.title_2")}</h1>
            <h1>{t("contact.title_3")}</h1>
          </div>
          <p className="contact-desc">{t("contact.desc")}</p>
          <div className="line-break"></div>
          <div className="contact-info">
            <div className="email">
              <div className="icon">📧</div>
              <div className="email-info">
                <p>{t("contact.email_label")}</p>
                <p>musacekcn@gmail.com</p>
                <p>{t("contact.email_reply")}</p>
              </div>
            </div>
            <div className="location">
              <div className="icon">📍</div>
              <div className="location-info">
                <p>{t("contact.location_label")}</p>
                <p>{t("contact.location_value")}</p>
                <p>{t("contact.location_serving")}</p>
              </div>
            </div>
            <div className="languages">
              <div className="icon">🌐</div>
              <div className="languages-info">
                <p>{t("contact.languages_label")}</p>
                <p>{t("contact.languages_value")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-right">
          <p className="how-it-works-label">{t("contact.how_it_works")}</p>
          <div className="process-steps">
            {processSteps.map((step) => (
              <div key={step.id} className="process-step">
                <div className="step-num">{step.id}</div>
                <div className="step-content">
                  <p className="step-title">{step.title?.[lang] || step.title?.en}</p>
                  <p className="step-desc">{step.desc?.[lang] || step.desc?.en}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="response-badge">
            <div className="rb-icon">⚡</div>
            <div className="rb-text">
              <p>{t("contact.response_badge_title")}</p>
              <p>{t("contact.response_badge_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-send-a-message-common-questions">
        <div className="sam-left">
          <div className="sam-small-header">
            <span></span>
            <p>{t("contact.sam_small_header")}</p>
          </div>
          <div className="sam-main-header">
            <h1>{t("contact.sam_title_1")}</h1>
            <h1><span>{t("contact.sam_title_2")}</span></h1>
          </div>
          <div className="form">
            <Form />
          </div>
        </div>
        <div className="sam-right">
          <CommonQuestions />
        </div>
      </section>
    </main>
  );
}

export default Contact;