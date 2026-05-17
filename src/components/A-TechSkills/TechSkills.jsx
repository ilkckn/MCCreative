import "./TechSkills.css";
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
  return (
    <main className="tech-skills">
      {/* ── Sol: Skill Barlar ── */}
      <section className="sec-1-tech">
        <div className="small-header">
          <span></span>
          <p>Tech Skills</p>
        </div>
        <div className="main-header">
          <h1>What I</h1>
          <h1 className="italic">build with.</h1>
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

      {/* ── Sağ: Soft Skills + Tools ── */}
      <section className="sec-2-tech">
        <div className="small-header">
          <span></span>
          <p>Soft Skills & Tools</p>
        </div>
        <div className="soft-skills-tools">
          <div className="soft-skills">
            <div className="box">
              <div className="icon">🗨️</div>
              <h2>Communication</h2>
              <p>Clear, direct and friendly. You always know where the project stands.</p>
            </div>
            <div className="box">
              <div className="icon">⚡</div>
              <h2>Fast Delivery</h2>
              <p>Most projects live in 2–3 weeks. No delays, no excuses.</p>
            </div>
            <div className="box">
              <div className="icon">🎯</div>
              <h2>Detail-oriented</h2>
              <p>Every pixel, every word, every interaction — crafted with care.</p>
            </div>
            <div className="box">
              <div className="icon">🔄</div>
              <h2>Adaptable</h2>
              <p>Every business is different. I adapt to what works for you.</p>
            </div>
          </div>
          <div className="tools">
            <div className="tools-header">
              <span></span>
              <p>Tools I use</p>
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
