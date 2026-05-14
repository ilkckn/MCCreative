import CommonQuestions from "../../components/Contact-Common/CommonQuestions.jsx";
import Form from "../../components/Contact-Form/Form.jsx";
import "./Contact.css";
import processSteps from "./ProcessData.js";

function Contact() {
  return (
    <main className="contact-container">
      <section className="contact-get-in-touch">
        <div className="section-left">
          <div className="contact-small-header">
            <span></span>
            <p>get in touch</p>
          </div>
          <div className="contact-main-header">
            <h1>Let's build</h1>
            <h1>something</h1>
            <h1>together.</h1>
          </div>
          <p className="contact-desc">
            Have a project in mind? Want to get your business online? Just want
            to ask a question? I'd love to hear from you. No pressure, no
            commitment, just a friendly conversation.
          </p>
          <div className="line-break"></div>
          <div className="contact-info">
            <div className="email">
              <div className="icon">📧</div>
              <div className="email-info">
                <p>email</p>
                <p>musacekcn@gmail.com</p>
                <p>I reply within 24 hours</p>
              </div>
            </div>
            <div className="location">
              <div className="icon">📍</div>
              <div className="location-info">
                <p>location</p>
                <p>Lörrach in Baden-Württemberg, Germany</p>
                <p>Serving the Basel-Lörrach and beyond</p>
              </div>
            </div>
            <div className="languages">
              <div className="icon">🌐</div>
              <div className="languages-info">
                <p>languages</p>
                <p>Turkish, English, German</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-right">
          <p className="how-it-works-label">How it works</p>

          <div className="process-steps">
            {processSteps.map((step) => (
              <div key={step.id} className="process-step">
                <div className="step-num">{step.id}</div>
                <div className="step-content">
                  <p className="step-title">{step.title}</p>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="response-badge">
            <div className="rb-icon">⚡</div>
            <div className="rb-text">
              <p>Fast response guaranteed</p>
              <p>
                I reply to every message within 24 hours — usually much faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-send-a-message-common-questions">
        <div className="sam-left">
          <div className="sam-small-header">
            <span></span>
            <p>send a message</p>
          </div>
          <div className="sam-main-header">
            <h1>Tell me about</h1>
            <h1>
              your <span>project.</span>
            </h1>
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
