import "./AllPosts.css";
import blogs from "../../pages/Blog/BlogData";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdOutlineTimer } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AllPosts() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || "en";

  const handleReadArticle = (id) => {
    navigate(`/blog/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="all-posts-container">
      <section className="blog-top-header">
        <span></span>
        <p>{t("blog.all_posts_header")}</p>
      </section>

      <section className="grid-all-posts">
        {blogs.map((blog) => {
          const blogName = blog.name?.[lang] || blog.name?.en || "";
          const blogHeader = blog.header?.[lang] || blog.header?.en || "";
          const blogDescription =
            blog.description?.[lang] || blog.description?.en || "";
          const blogDate = blog.date?.[lang] || blog.date?.en || "";

          return (
            <div
              key={blog.id}
              className="blog-box"
              onClick={() => handleReadArticle(blog.id)}
            >
              <div className="image-section">
                <img src={blog.image} alt={blogHeader} />
                <span>{blogName}</span>
                <span>
                  <MdOutlineTimer className="timer-icon" /> {blog.readTime}
                </span>
              </div>
              <div className="info-section">
                <h2>{blogName}</h2>
                <h1>{blogHeader}</h1>
                <p>{blogDescription}</p>
                <p className="line-breaker"></p>
                <div className="date-readBtn">
                  <span>{blogDate}</span>
                  <button
                    className="read-btn"
                    onClick={() => handleReadArticle(blog.id)}
                  >
                    {t("blog.read_btn")}
                    <HiOutlineArrowLongRight className="right-arrow" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default AllPosts;
