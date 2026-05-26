import "./Blog.css";
import { useTranslation } from "react-i18next";
import FeaturedPost from "../../components/Blog-Featured-Post/FeaturedPost";
import AllPosts from "../../components/Blog-Posts/AllPosts";
import StayUpdated from "../../components/Blog-Stay-Updated/StayUpdated";

function Blog() {
  const { t } = useTranslation();

  return (
    <main className="blog-container">
      <section className="section-the-blog">
        <div className="blog-left">
          <div className="top-header">
            <span></span>
            <p>{t("blog.small_header")}</p>
          </div>
          <div className="main-header">
            <h1>{t("blog.title_1")}</h1>
            <h1>{t("blog.title_2")}</h1>
            <h1>{t("blog.title_3")}</h1>
          </div>
        </div>
        <div className="blog-right">
          <h2 className="header">{t("blog.by_numbers")}</h2>
          <div className="articles-number">
            <div className="number-status">
              <p>
                12 <span>+</span>
              </p>
            </div>
            <div className="text">{t("blog.articles_growing")}</div>
          </div>
          <div className="topics">
            <div className="number-status">
              <p>
                5 <span>+</span>
              </p>
            </div>
            <div className="text">{t("blog.topics_covered")}</div>
          </div>
          <div className="read-time">
            <div className="number-status">
              <p>
                5<span>min</span>
              </p>
            </div>
            <div className="text">{t("blog.avg_read_time")}</div>
          </div>
        </div>
      </section>

      <section className="sec-featured-post">
        <FeaturedPost />
      </section>
      <section className="sec-all-posts">
        <AllPosts />
      </section>
      <section className="sec-stay-updated">
        <StayUpdated />
      </section>
    </main>
  );
}

export default Blog;
