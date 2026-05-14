import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div
        className={`menu-overlay ${isMenuOpen ? "visible" : ""}`}
        onClick={closeMenu}
      />
      <div className="nav-container">
        <nav className="navbar">
          <section className="sec-logo">
            <div className="icon">MC</div>
            <div className="logo-name">
              <span>MC</span>Creative
            </div>
          </section>
          <section className="sec-links">
            <ul>
              <li>
                <NavLink to="/" onClick={handleLinkClick}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleLinkClick}>About</NavLink>
              </li>
              <li>
                <NavLink to="/projects" onClick={handleLinkClick}>Projects</NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={handleLinkClick}>Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink>
              </li>
            </ul>
          </section>
          <section className="sec-btns">
            <div className="available-for-work">
              <span></span>
              <p>Available for work</p>
            </div>
            <div className="lets-talk">
              <NavLink to="/contact">Let's Talk</NavLink>
            </div>

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

                <div className="available-for-work">
                  <span></span>
                  <p>Available for work</p>
                </div>
                <div className="lets-talk">
                  <NavLink to="/contact" onClick={closeMenu}>
                    Let's Talk
                  </NavLink>
                </div>

                <div className="logo">
                  <span>MC</span>
                  <p>
                    <span className="logo-span">MC</span>Creative
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
