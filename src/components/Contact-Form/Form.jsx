import "./Form.css";
import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import emailjs from "@emailjs/browser";

const SERVICE = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

function Form() {
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email and message.");
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

      setFormData({
        name: "",
        email: "",
        business: "",
        service: "New Website",
        hear: "",
        message: "",
      });
      setActiveChoose("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.log("Emailjs error:", error);
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
    console.log("SERVICE:", SERVICE);
    console.log("TEMPLATE:", TEMPLATE);
    console.log("PUBLIC_KEY:", PUBLIC_KEY);
  };

  const handleChoose = (value) => {
    setActiveChoose(value);
    setFormData((prev) => ({
      ...prev,
      hear: value,
    }));
  };

  return (
    <main>
      {status === "success" && (
        <div className="form-success-message">
          <span>✓</span>
          <p>Message sent! I'll get back to you within 24 hours.</p>
        </div>
      )}
      {status === "error" && (
        <div className="form-error-message">
          <span>✕</span>
          <p>Something went wrong. Please try again later.</p>
        </div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <div className="name-email">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="business-service">
          <div className="business">
            <label htmlFor="business">Business</label>
            <input
              type="text"
              id="business"
              name="business"
              placeholder="Your business"
              value={formData.business}
              onChange={handleChange}
            />
          </div>
          <div className="service">
            <label htmlFor="service">Service needed</label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="New Website">New Website</option>
              <option value="Website Redesign">Website Redesign</option>
              <option value="Local SEO Setup">Local SEO Setup</option>
              <option value="Monthly Maintenance">Monthly Maintenance</option>
              <option value="Something else">Something else</option>
            </select>
          </div>
        </div>
        <div className="how-did-you-hear">
          <label>How did you hear about me?</label>
          <div className="choose">
            {["Google search", "Instagram", "Word of mouth", "Other"].map(
              (option) => (
                <span
                  key={option}
                  className={activeChoose === option ? "active" : ""}
                  onClick={() => handleChoose(option)}
                >
                  {option}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="your-message">
          <label htmlFor="message">Your message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
          ></textarea>
        </div>
        <div className="submit-btn">
          <button
            type="submit"
            disabled={status === "loading"}
            className={status === "loading" ? "btn-loading" : ""}
          >
            {status === "loading" ? (
              "Sending..."
            ) : (
              <>
                Send Message <HiArrowLongRight className="arrow" />
              </>
            )}
          </button>
        </div>
      </form>
    </main>
  );
}

export default Form;
