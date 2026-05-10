import "./TechSkills.css";
import tools from "./Tools.js";

function TechSkills() {
  return (
    <main className="tech-skills">
      <section className="sec-1-tech">
        <div className="small-header">
          <span></span>
          <p>Tech Skills</p>
        </div>
        <div className="main-header">
          <h1>What I</h1>
          <h1>build with.</h1>
        </div>
        <div className="skills">
          <div className="skill">
            <div className="tech-percentage">
              <p>React & Javascript</p>
              <p>95%</p>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="tech-percentage">
              <p>HTML & CSS</p>
              <p>95%</p>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="tech-percentage">
              <p>React Router & SPA</p>
              <p>90%</p>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="tech-percentage">
              <p>Node.js & MongoDB</p>
              <p>70%</p>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="tech-percentage">
              <p>Git & GitHub</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="tech-percentage">
              <p>Figma & Adobe XD</p>
              <p>85%</p>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="tech-percentage">
              <p>UI/UX Design</p>
              <p>75%</p>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-2-tech">
        <div className="small-header">
          <span></span>
          <p>soft skills & tools</p>
        </div>
        <div className="soft-skills-tools">
          <div className="soft-skills">
            <div className="box">
              <div className="icon">🗨️</div>
              <h2>Communication</h2>
              <p>
                Clear, direct and friendly. You always know where the project
                stands.
              </p>
            </div>
            <div className="box">
              <div className="icon">💡</div>
              <h2>Fast delivery⚡</h2>
              <p>Most projects live in 2–3 weeks. No delays, no excuses.</p>
            </div>
            <div className="box">
              <div className="icon">⏰</div>
              <h2>Detail-oriented🎯</h2>
              <p>
                Every pixel, every word, every interaction — crafted with care.
              </p>
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
              <p>Tools I use.</p>
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
