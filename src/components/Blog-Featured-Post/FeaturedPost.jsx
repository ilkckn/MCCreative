import "./FeaturedPost.css";
import posts from "../../pages/Blog/BlogData.js";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdOutlineTimer } from "react-icons/md";
import { featuredPostImage } from "../../pages/Blog/BlogData.js";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FeaturedPost() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || "en";

  const post = posts[0];

  const postName = post.name?.[lang] || post.name?.en || "";
  const postHeader = post.header?.[lang] || post.header?.en || "";
  const postDescription =
    post.description?.[lang] || post.description?.en || "";
  const postTags = post.tags?.[lang] || post.tags?.en || [];
  const postDate = post.date?.[lang] || post.date?.en || "";

  const handleReadArticle = (id) => {
    navigate(`/blog/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="featured-post-container">
      <div className="featured-top-header">
        <div className="header">
          <span></span>
          <p>{t("blog.featured_header")}</p>
        </div>
        <p className="view-all" onClick={() => navigate("/blog/all")}>
          {t("blog.view_all")}{" "}
          <HiOutlineArrowLongRight className="right-arrow" />
        </p>
      </div>
      <div className="posts">
        <div className="image-status">
          <img src={featuredPostImage} alt="featured post" />
          <p className="status1">{t("blog.featured_badge")}</p>
          <p className="status2">
            <MdOutlineTimer className="timer-icon" /> {post.readTime}
          </p>
        </div>
        <div className="info">
          <h2>{postName}</h2>
          <h1>{postHeader}</h1>
          <p>{postDescription}</p>
          <div className="tags">
            {postTags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="break-line"></div>
          <p>
            {postDate} <span>&#8226;</span> {post.readTime}
          </p>
          <p
            onClick={() => handleReadArticle(post.id)}
            className="read-article"
          >
            {t("blog.read_article")}{" "}
            <HiOutlineArrowLongRight className="right-arrow" />
          </p>
        </div>
      </div>
    </main>
  );
}

export default FeaturedPost;
