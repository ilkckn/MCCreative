import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

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
              <li>
                <NavLink to="/" onClick={handleLinkClick}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleLinkClick}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" onClick={handleLinkClick}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={handleLinkClick}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleLinkClick}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </section>

          {/* ── Sağ Butonlar ── */}
          <section className="sec-btns">
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === "light" ? <RiMoonLine className="theme-icon" /> : <RiSunLine className="theme-icon" />}
            </button>
            <div className="available-for-work">
              <span className="dot"></span>
              <p>Available for work</p>
            </div>
            <div className="lets-talk">
              <NavLink to="/contact" onClick={handleLinkClick}>
                Let's Talk
              </NavLink>
            </div>

            {/* ── Mobil Menü ── */}
            <div className="mobile-menu-container">
              <button
                className="menu-btn"
                onClick={isMenuOpen ? closeMenu : openMenu}
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>

              <ul className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
                <li>
                  <NavLink to="/" onClick={closeMenu}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={closeMenu}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" onClick={closeMenu}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" onClick={closeMenu}>
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={closeMenu}>
                    Contact
                  </NavLink>
                </li>

                <div className="mobile-available">
                  <span className="dot"></span>
                  <p>Available for work</p>
                </div>
                <div className="mobile-lets-talk">
                  <NavLink to="/contact" onClick={closeMenu}>
                    Let's Talk
                  </NavLink>
                </div>

                <div className="mobile-logo">
                  <span className="logo-icon">MC</span>
                  <p>
                    <span>MC</span>Creative
                  </p>
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
