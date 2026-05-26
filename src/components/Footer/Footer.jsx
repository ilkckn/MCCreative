import "./Footer.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiLinkedin, FiGithub } from "react-icons/fi";

function Footer() {
  const { t } = useTranslation();

  const handleScrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className="footer-container">
      {/* ── Logo + Tagline ── */}
      <div className="footer-logo">
        <div className="footer-logo-mark">
          <span className="logo-icon">MC</span>
          <p>
            <span>MC</span> Creative
          </p>
        </div>
        <p className="footer-built">{t("footer.built_with")}</p>
      </div>

      {/* ── Nav Linkleri ── */}
      <nav className="footer-nav">
        <p className="footer-nav-title">{t("footer.nav_title")}</p>
        <ul>
          <div className="li_1">
            <li>
              <NavLink to="/" onClick={handleScrollToTop}>
                {t("navbar.home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleScrollToTop}>
                {t("navbar.about")}
              </NavLink>
            </li>
          </div>
          <div className="li_2">
            <li>
              <NavLink to="/projects" onClick={handleScrollToTop}>
                {t("navbar.projects")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={handleScrollToTop}>
                {t("navbar.blog")}
              </NavLink>
            </li>
          </div>
          <div className="li_3">
            <li>
              <NavLink to="/contact" onClick={handleScrollToTop}>
                {t("navbar.contact")}
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>

      {/* ── Sosyal Medya ── */}
      <div className="footer-social">
        <p className="footer-social-title">{t("footer.social_title")}</p>
        <div className="footer-social-links">
          <a
            href="https://www.linkedin.com/in/musacekcen/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
          >
            <FiLinkedin className="social-icon" />
            LinkedIn
          </a>
          <a
            href="https://github.com/ilkckn"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
          >
            <FiGithub className="social-icon" />
            GitHub
          </a>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="footer-bottom">
        <p>{t("footer.rights")}</p>
        <p>{t("footer.since")}</p>
      </div>
    </div>
  );
}

export default Footer;
