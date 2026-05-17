import "./AboutMeLanding.css";
import { HiMiniArrowLongRight } from "react-icons/hi2";

function AboutMeLanding() {
  return (
    <main className="about-me-landing">
      {/* ── Sol: Metin ── */}
      <section className="sec-1">
        <div className="small-header">
          <span></span>
          <p>About Me</p>
        </div>
        <div className="main-header">
          <h1>I don't just build</h1>
          <h1 className="has-dash">
            websites <span className="dash"></span> I build
          </h1>
          <h1 className="italic">customers for you</h1>
        </div>
        <div className="main-desc">
          <p>
            I'm Musa, a freelance web designer and developer based in Lörrach.
            My background is in working directly with customers and businesses,
            which means I understand what your clients actually want to see when
            they land on your website.
          </p>
          <p>
            I specialize in small local businesses: hair salons, cafés,
            restaurants, shops. Your customers just want to find you, see what
            you offer, and book or visit.
          </p>
        </div>
        <ul className="my-info">
          <li>Based in Lörrach — I know the local market</li>
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

      {/* ── Sağ: Kart panel ── */}
      <section className="sec-2">
        <div className="name">
          <h1>Musa Çekcen</h1>
          <p className="title">Web Designer & Developer</p>
          <div className="location">
            <span className="icon">📍</span>
            <p>Lörrach im Baden-Württemberg, Germany</p>
          </div>
        </div>

        <div className="info">
          <div className="stat">
            <div className="stat-value">
              100<span>%</span>
            </div>
            <p className="stat-label">Client focus</p>
          </div>
          <div className="stat">
            <div className="stat-value">
              3<span>-4</span>
            </div>
            <p className="stat-label">Weeks delivery</p>
          </div>
          <div className="stat">
            <div className="stat-value">
              1<span>:1</span>
            </div>
            <p className="stat-label">Direct contact</p>
          </div>
          <div className="stat">
            <div className="stat-value">
              0<span>€</span>
            </div>
            <p className="stat-label">Hidden fees</p>
          </div>
        </div>

        <div className="language-level">
          <div className="lang-row">
            <span className="lang-name">
              <span className="lang-code">TR</span>Turkish
            </span>
            <span className="lang-level">Native</span>
          </div>
          <div className="lang-row">
            <span className="lang-name">
              <span className="lang-code">EN</span>English
            </span>
            <span className="lang-level">C1 — Fluent</span>
          </div>
          <div className="lang-row">
            <span className="lang-name">
              <span className="lang-code">DE</span>German
            </span>
            <span className="lang-level">Learning — A2</span>
          </div>
        </div>

        <div className="my-word">
          <p>
            "I build websites because I saw how many great local businesses were
            invisible online — and I knew I could fix that."
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutMeLanding;
