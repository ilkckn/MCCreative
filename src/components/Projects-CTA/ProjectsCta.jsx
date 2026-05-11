import "./ProjectsCta.css";
import { useNavigate } from "react-router-dom";

function ProjectsCta() {
  const navigate = useNavigate();

  return (
    <main className="projects-cta-container">
      <section className="cta-left">
        <div className="cta-top-header">
          <span></span>
          <p>work with me</p>
        </div>
        <div className="cta-main-header">
          <h1>Your business</h1>
          <h1>
            could be <span>next.</span>
          </h1>
        </div>
        <div className="cta-desc">
          <p>
            Have a project in mind? Let's talk about it. Free consultation, no
            commitment, just a friendly chat about what you need.
          </p>
        </div>
        <div className="cta-btns">
          <button
            className="start-a-project"
            onClick={() => window.scrollTo({ top: 370, behavior: "smooth" })}
          >
            Start a Project
          </button>
          <button className="get-in-touch" onClick={() => navigate("/contact")}>
            Get in Touch
          </button>
        </div>
      </section>

      <section className="cta-right">
        <div className="cta-box">
          <div className="icon">📞</div>
          <div className="info">
            <p>Free discovery call</p>
            <p>30 minutes to understand your business. Zero pressure.</p>
          </div>
        </div>
        <div className="cta-box">
          <div className="icon">⚡</div>
          <div className="info">
            <p>Fast turnaround</p>
            <p>Most websites live within 2–3 weeks from our first call.</p>
          </div>
        </div>
        <div className="cta-box">
          <div className="icon">💰</div>
          <div className="info">
            <p>Transparent pricing</p>
            <p>Fixed quotes. You know the cost before we start.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsCta;
