import { NavLink } from "react-router-dom";
import "./Blog.css";
import FeaturedPost from "../../components/Blog-Featured-Post/FeaturedPost";

function Blog() {
  return (
    <main className="blog-container">
      <section className="section-the-blog">
        <div className="blog-left">
          <div className="top-header">
            <span></span>
            <p>The Blog</p>
          </div>
          <div className="main-header">
            <h1>Tips & insights</h1>
            <h1>
              for <span>local business</span>
            </h1>
            <h1>owners.</h1>
          </div>
          <div className="go-back-home">
            <NavLink to="/" className="go-back-home-link">
              Home
            </NavLink>
            <span>/</span>
            <p>Blog</p>
          </div>
        </div>
        <div className="blog-right">
          <h2 className="header">by the numbers</h2>
          <div className="articles-number">
            <div className="number-status">
              <p>
                12 <span>+</span>
              </p>
            </div>
            <div className="text">growing</div>
          </div>
          <div className="topics">
            <div className="number-status">
              <p>
                5 <span>+</span>
              </p>
            </div>
            <div className="text">topics covered</div>
          </div>
          <div className="read-time">
            <div className="number-status">
              <p>
                5<span>min</span>
              </p>
            </div>
            <div className="text">average read time</div>
          </div>
        </div>
      </section>

      <section className="sec-featured-post">
        <FeaturedPost />
      </section>
      <section className="sec-all-posts"></section>
      <section className="sec-stay-updated"></section>
    </main>
  );
}

export default Blog;
