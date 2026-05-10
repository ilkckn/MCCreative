import MyStory from "../../components/A-MyStory/MyStory.jsx";
import TechSkills from "../../components/A-TechSkills/TechSkills.jsx";
import WorkWithMe from "../../components/A-WorkWithMe/WorkWithMe.jsx";
import "./About.css";

function About() {
  return (
    <main className="about">
      <section className="sec-1">
        <div className="content-left">
          <div className="small-header">
            <span></span>
            <p>about me</p>
          </div>
          <div className="main-header">
            <h1>The person</h1>
            <h1>behind the</h1>
            <h1>websites.</h1>
          </div>
          <div className="desc">
            <p>
              I'm Musa a freelance web designer and developer based in Freiburg,
              Germany. I build beautiful, fast websites for small local
              businesses. My background is working directly with customers,
              which means I know what your clients want to see when they land on
              your site.
            </p>
          </div>
          <div className="btns">
            <button className="btn-1">Let's talk</button>
            <button className="btn-2">See my projects</button>
          </div>
        </div>

        <div className="content-right">
          <div className="name">
            <h1>Musa Çekcen</h1>
            <p>Web Designer & Developer</p>
            <div className="location">
              <div className="icon">📍</div>
              <p>Lörrach im Baden-Württemberg, Germany</p>
            </div>
          </div>
          <div className="info">
            <div className="percentage-delivery">
              <div className="percentage">
                <p>
                  100 <span>%</span>
                </p>
                <p>Client focus</p>
              </div>
              <div className="delivery">
                <p>3-4</p>
                <p>Weeks delivery</p>
              </div>
            </div>
            <div className="direct-contact-hidden-fees">
              <div className="direct-contact">
                <p>
                  1 <span>:1</span>
                </p>
                <p>Direct contact</p>
              </div>
              <div className="hidden-fees">
                <p>
                  0 <span>€</span>
                </p>
                <p>Hidden fees</p>
              </div>
            </div>
          </div>

          <div className="language-level">
            <div className="turkish">
              <p>
                <span>tr</span>Turkish{" "}
              </p>
              <p>native</p>
            </div>
            <div className="english">
              <p>
                <span>en</span>English{" "}
              </p>
              <p>c1-fluent</p>
            </div>
            <div className="german">
              <p>
                <span>de</span>German{" "}
              </p>
              <p>learning-a2</p>
            </div>
          </div>
          <div className="my-word">
            <p>
              "I built websites because I saw how many great local businesses
              were invisible online — and I knew I could fix that."
            </p>
          </div>
        </div>
      </section>
      <section className="sec-2">
        <MyStory />
      </section>
      <section className="sec-3">
        <TechSkills />
      </section>
      <section className="sec-4">
        <WorkWithMe />
      </section>
    </main>
  );
}

export default About;
