import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "tr", label: "Türkçe" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];

function Navbar({ theme, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  // Dropdown dışına tıklayınca kapat
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        className={`menu-overlay ${isMenuOpen ? "visible" : ""}`}
        onClick={closeMenu}
      />
      <div className="nav-container">
        <nav className="navbar">
          {/* ── Logo ── */}
          <NavLink to="/" className="sec-logo" onClick={handleLinkClick}>
            <span className="logo-icon">MC</span>
            <div className="logo-name">
              <span>MC</span>Creative
            </div>
          </NavLink>

          {/* ── Linkler ── */}
          <section className="sec-links">
            <ul>
              <li><NavLink to="/" onClick={handleLinkClick}>{t("navbar.home")}</NavLink></li>
              <li><NavLink to="/about" onClick={handleLinkClick}>{t("navbar.about")}</NavLink></li>
              <li><NavLink to="/projects" onClick={handleLinkClick}>{t("navbar.projects")}</NavLink></li>
              <li><NavLink to="/blog" onClick={handleLinkClick}>{t("navbar.blog")}</NavLink></li>
              <li><NavLink to="/contact" onClick={handleLinkClick}>{t("navbar.contact")}</NavLink></li>
            </ul>
          </section>

          {/* ── Sağ Butonlar ── */}
          <section className="sec-btns">
            {/* Theme */}
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === "light"
                ? <RiMoonLine className="theme-icon" />
                : <RiSunLine className="theme-icon" />
              }
            </button>

            {/* Dil Dropdown */}
            <div className="lang-switcher" ref={langRef}>
              <button
                className="lang-btn"
                onClick={() => setIsLangOpen((prev) => !prev)}
              >
                <MdLanguage className="lang-icon" />
                <span>{i18n.language?.toUpperCase().slice(0, 2)}</span>
              </button>

              <ul className={`lang-dropdown ${isLangOpen ? "open" : ""}`}>
                {LANGUAGES.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={i18n.language === lang.code ? "active" : ""}
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Available for work */}
            <div className="available-for-work">
              <span className="dot"></span>
              <p>{t("navbar.available_for_work")}</p>
            </div>

            {/* Let's Talk */}
            <div className="lets-talk">
              <NavLink to="/contact" onClick={handleLinkClick}>
                {t("navbar.lets_talk")}
              </NavLink>
            </div>

            {/* ── Mobil Menü ── */}
            <div className="mobile-menu-container">
              <button className="menu-btn" onClick={isMenuOpen ? closeMenu : openMenu}>
                {isMenuOpen ? "✕" : "☰"}
              </button>

              <ul className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
                <li><NavLink to="/" onClick={closeMenu}>{t("navbar.home")}</NavLink></li>
                <li><NavLink to="/about" onClick={closeMenu}>{t("navbar.about")}</NavLink></li>
                <li><NavLink to="/projects" onClick={closeMenu}>{t("navbar.projects")}</NavLink></li>
                <li><NavLink to="/blog" onClick={closeMenu}>{t("navbar.blog")}</NavLink></li>
                <li><NavLink to="/contact" onClick={closeMenu}>{t("navbar.contact")}</NavLink></li>

                {/* Mobil Dil Seçici */}
                <li className="mobile-lang-switcher">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { i18n.changeLanguage(lang.code); closeMenu(); }}
                      className={i18n.language === lang.code ? "active" : ""}
                    >
                      {lang.label}
                    </button>
                  ))}
                </li>

                <div className="mobile-available">
                  <span className="dot"></span>
                  <p>{t("navbar.available_for_work")}</p>
                </div>
                <div className="mobile-lets-talk">
                  <NavLink to="/contact" onClick={closeMenu}>
                    {t("navbar.lets_talk")}
                  </NavLink>
                </div>

                <div className="mobile-logo">
                  <span className="logo-icon">MC</span>
                  <p><span>MC</span>Creative</p>
                </div>
              </ul>
            </div>
          </section>
        </nav>
      </div>
    </>
  );
}

export default Navbar;