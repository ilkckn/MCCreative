import "./Form.css";
import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const SERVICE = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

function Form() {
  const { t } = useTranslation();
  const [activeChoose, setActiveChoose] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    hear: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(t("contact.form_validation"));
      return;
    }
    setStatus("loading");

    try {
      await emailjs.send(
        SERVICE,
        TEMPLATE,
        {
          name: formData.name,
          email: formData.email,
          business: formData.business || "Not provided",
          service: formData.service || "Not provided",
          hear: formData.hear || "Not provided",
          message: formData.message,
        },
        PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", business: "", service: "", hear: "", message: "" });
      setActiveChoose("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.log("Emailjs error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChoose = (value) => {
    setActiveChoose(value);
    setFormData((prev) => ({ ...prev, hear: value }));
  };

  const hearOptions = [
    { key: "google", label: t("contact.form_hear_google") },
    { key: "instagram", label: t("contact.form_hear_instagram") },
    { key: "word", label: t("contact.form_hear_word") },
    { key: "other", label: t("contact.form_hear_other") },
  ];

  return (
    <main>
      {status === "success" && (
        <div className="form-success-message">
          <span>✓</span>
          <p>{t("contact.form_success")}</p>
        </div>
      )}
      {status === "error" && (
        <div className="form-error-message">
          <span>✕</span>
          <p>{t("contact.form_error")}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="name-email">
          <div className="name">
            <label htmlFor="name">{t("contact.form_name")}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("contact.form_name_placeholder")}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <label htmlFor="email">{t("contact.form_email")}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("contact.form_email_placeholder")}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="business-service">
          <div className="business">
            <label htmlFor="business">{t("contact.form_business")}</label>
            <input
              type="text"
              id="business"
              name="business"
              placeholder={t("contact.form_business_placeholder")}
              value={formData.business}
              onChange={handleChange}
            />
          </div>
          <div className="service">
            <label htmlFor="service">{t("contact.form_service")}</label>
            <select name="service" id="service" value={formData.service} onChange={handleChange}>
              <option value="" disabled>{t("contact.form_service_placeholder")}</option>
              <option value="New Website">{t("contact.form_service_new")}</option>
              <option value="Website Redesign">{t("contact.form_service_redesign")}</option>
              <option value="Local SEO Setup">{t("contact.form_service_seo")}</option>
              <option value="Monthly Maintenance">{t("contact.form_service_maintenance")}</option>
              <option value="Something else">{t("contact.form_service_other")}</option>
            </select>
          </div>
        </div>
        <div className="how-did-you-hear">
          <label>{t("contact.form_hear")}</label>
          <div className="choose">
            {hearOptions.map((option) => (
              <span
                key={option.key}
                className={activeChoose === option.label ? "active" : ""}
                onClick={() => handleChoose(option.label)}
              >
                {option.label}
              </span>
            ))}
          </div>
        </div>
        <div className="your-message">
          <label htmlFor="message">{t("contact.form_message")}</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contact.form_message_placeholder")}
          ></textarea>
        </div>
        <div className="submit-btn">
          <button
            type="submit"
            disabled={status === "loading"}
            className={status === "loading" ? "btn-loading" : ""}
          >
            {status === "loading" ? (
              t("contact.form_sending")
            ) : (
              <>
                {t("contact.form_submit")} <HiArrowLongRight className="arrow" />
              </>
            )}
          </button>
        </div>
      </form>
    </main>
  );
}

export default Form;