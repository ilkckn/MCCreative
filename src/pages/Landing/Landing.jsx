import "./Landing.css";
import { useNavigate } from "react-router-dom";
import WhatIOffer from "../../components/WhatIOffer/WhatIOffer.jsx";
import SelectedWork from "../../components/SelectedWork/SelectedWork.jsx";
import AboutMeLanding from "../../components/AboutMeLanding/AboutMeLanding.jsx";
import GetYourBusiness from "../../components/GetYourBusiness/GetYourBusiness.jsx";

function Landing() {
  const navigate = useNavigate();

  return (
    <main className="landing-container">
      <section className="sec-1">
        {/* ── Sol: Hero Metin ── */}
        <section className="land-left">
          <div className="small-header">
            <span></span>
            <p>Freelance web developer</p>
          </div>
          <div className="main-header">
            <h1>I build websites</h1>
            <h1>small businesses</h1>
            <h1 className="italic">actually love.</h1>
          </div>
          <div className="main-desc">
            <p>
              I design and build beautiful, fast websites for local businesses
              in Germany and beyond — salons, cafés, restaurants and more.
            </p>
          </div>
          <div className="btns">
            <button onClick={() => navigate("/projects")}>See My Work</button>
            <button onClick={() => navigate("/about")}>How I Work</button>
          </div>
        </section>

        {/* ── Sağ: Skill Bars + Metrik Kartlar ── */}
        <section className="land-right">
          {/* Skill bar kartı */}
          <div className="tech-skills">
            <p className="header">Tech skills</p>
            <div className="skills">
              <div className="skill-item">
                <div className="skill-label">
                  <span>React</span>
                  <span>95%</span>
                </div>
                <div className="percentage-bar">
                  <div className="fill" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-label">
                  <span>JavaScript</span>
                  <span>85%</span>
                </div>
                <div className="percentage-bar">
                  <div className="fill" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-label">
                  <span>HTML/CSS</span>
                  <span>90%</span>
                </div>
                <div className="percentage-bar">
                  <div className="fill" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 metrik kutusu */}
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">
                10<span>+</span>
              </div>
              <p className="metric-label">Projects done</p>
            </div>
            <div className="metric-card">
              <div className="metric-value">
                100<span>%</span>
              </div>
              <p className="metric-label">Client satisfaction</p>
            </div>
            <div className="metric-card">
              <div className="metric-value">
                3<span>+</span>
              </div>
              <p className="metric-label">Years experience</p>
            </div>
          </div>
        </section>
      </section>

      <WhatIOffer />
      <SelectedWork />
      <AboutMeLanding />
      <GetYourBusiness />
    </main>
  );
}

export default Landing;
