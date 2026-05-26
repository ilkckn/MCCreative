import "./TechSkills.css";
import { useTranslation } from "react-i18next";
import tools from "./Tools.js";

const skills = [
  { name: "React & Javascript", pct: 95 },
  { name: "HTML & CSS", pct: 95 },
  { name: "React Router & SPA", pct: 90 },
  { name: "Node.js & MongoDB", pct: 70 },
  { name: "Git & GitHub", pct: 80 },
  { name: "Figma & Adobe XD", pct: 85 },
  { name: "UI/UX Design", pct: 75 },
];

function TechSkills() {
  const { t } = useTranslation();

  return (
    <main className="tech-skills">
      <section className="sec-1-tech">
        <div className="small-header">
          <span></span>
          <p>{t("tech_skills.small_header")}</p>
        </div>
        <div className="main-header">
          <h1>{t("tech_skills.title_1")}</h1>
          <h1 className="italic">{t("tech_skills.title_2")}</h1>
        </div>
        <div className="skills">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <div className="tech-percentage">
                <p>{skill.name}</p>
                <p>{skill.pct}%</p>
              </div>
              <div className="bar">
                <div className="fill" style={{ width: `${skill.pct}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec-2-tech">
        <div className="small-header">
          <span></span>
          <p>{t("tech_skills.soft_header")}</p>
        </div>
        <div className="soft-skills-tools">
          <div className="soft-skills">
            <div className="box">
              <div className="icon">🗨️</div>
              <h2>{t("tech_skills.comm_title")}</h2>
              <p>{t("tech_skills.comm_desc")}</p>
            </div>
            <div className="box">
              <div className="icon">⚡</div>
              <h2>{t("tech_skills.delivery_title")}</h2>
              <p>{t("tech_skills.delivery_desc")}</p>
            </div>
            <div className="box">
              <div className="icon">🎯</div>
              <h2>{t("tech_skills.detail_title")}</h2>
              <p>{t("tech_skills.detail_desc")}</p>
            </div>
            <div className="box">
              <div className="icon">🔄</div>
              <h2>{t("tech_skills.adapt_title")}</h2>
              <p>{t("tech_skills.adapt_desc")}</p>
            </div>
          </div>
          <div className="tools">
            <div className="tools-header">
              <span></span>
              <p>{t("tech_skills.tools_header")}</p>
            </div>
            <div className="tool">
              {tools.map((tool, index) => (
                <p key={index}>{tool}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TechSkills;
