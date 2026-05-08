import "./AboutMeLanding.css";
import { HiMiniArrowLongRight } from "react-icons/hi2";

function AboutMeLanding() {
  return (
    <main className="about-me-landing">
      <section className="sec-1">
        <div className="small-header">
          <span></span>
          <p>about me</p>
        </div>
        <div className="main-header">
          <h1>I don't just build</h1>
          <h1>
            websites <span className="main-span"></span> I build
          </h1>
          <h1>customers for you</h1>
        </div>
        <div className="main-desc">
          <p>
            I'm Musa, a freelance web designer and developer based in Freiburg.
            My background is in working directly with customers and businesses,
            which means I understand what your clients actually want to see when
            they land on your website.
          </p>
          <p>
            I specialize in small local businesses: hair salons, cafés,
            restaurants, shops. I know your customers don't have time for a
            complicated website, they just want to find you, see what you offer,
            and book or visit.
          </p>
        </div>
        <ul className="my-info">
          <li>Based in Lörrach - I know the local market</li>
          <li>I speak your language — Turkish, English and a little German</li>
          <li>You deal directly with me — no agency middlemen</li>
          <li>Fixed price, fast delivery, no hidden surprises</li>
        </ul>
        <div className="btns">
          <button>
            Let's talk <HiMiniArrowLongRight className="right-arrow" />
          </button>
          <button>See my works</button>
        </div>
      </section>

      <section className="sec-2">
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
            "I built websites because I saw how many great local businesses were
            invisible online — and I knew I could fix that."
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutMeLanding;
