import "./Landing.css";
import { useNavigate } from "react-router-dom";
import websites from "../../MyWebsites.js";
import WhatIOffer from "../../components/WhatIOffer/WhatIOffer.jsx";
import SelectedWork from "../../components/SelectedWork/SelectedWork.jsx";
import AboutMeLanding from "../../components/AboutMeLanding/AboutMeLanding.jsx";
import GetYourBusiness from "../../components/GetYourBusiness/GetYourBusiness.jsx";

function Landing() {
  const navigate = useNavigate();

  return (
    <main className="landing-container">
      <section className="sec-1">
        <section className="land-left">
          <div className="small-header">
            <span></span>
            <p>freelance web developer</p>
          </div>
          <div className="main-header">
            <h1>Website small</h1>
            <h1>business</h1>
            <h1>actually love</h1>
          </div>
          <div className="main-desc">
            <p>
              I design and build beautiful, fast websites for local businesses
              in Germany and beyond salons, cafés, restaurants and more.
            </p>
          </div>
          <div className="btns">
            <button onClick={() => navigate("/projects")}>See My Work</button>
            <button onClick={() => navigate("/about")}>How I Work</button>
          </div>
          <div className="line"></div>
          <div className="metrics">
            <div className="metric">
              <span>
                10 <span>+</span>
              </span>
              <p>Projects done</p>
            </div>
            <div className="metric">
              <span>
                100 <span>%</span>
              </span>
              <p>Client satisfaction</p>
            </div>
            <div className="metric">
              <span>
                3 <span>+</span>
              </span>
              <p>Years experience</p>
            </div>
          </div>
        </section>

        <section className="land-right">
          <div className="images-project-desc">
            <div className="images">
              <img src={websites[0].image} alt={websites[0].name} />
              <p className="status">Latest project</p>
            </div>
            <div className="project-desc">
              <p>{websites[0].type}</p>
              <h2>{websites[0].name}</h2>
              <p>{websites[0].location}</p>
              <p>
                {websites[0].tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </p>
              <p className="desc">{websites[0].description}</p>
            </div>
          </div>
          <div className="tech-skills">
            <p className="header">Tech skills</p>
            <div className="skills">
              <div className="react">
                <p>
                  React <span>95%</span>
                </p>
                <div className="percentage-bar">
                  <div className="fill" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="javascript">
                <p>
                  JavaScript <span>85%</span>
                </p>
                <div className="percentage-bar">
                  <div className="fill" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="html-css">
                <p>
                  HTML/CSS <span>90%</span>
                </p>
                <div className="percentage-bar">
                  <div className="fill" style={{ width: "90%" }}></div>
                </div>
              </div>
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
