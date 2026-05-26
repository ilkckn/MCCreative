import "./BlogPost.css";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import blogs from "../../pages/Blog/BlogData";

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || "en";

  const post = blogs.find((blog) => blog.id === Number(id));

  if (!post) return <p className="post-not-found">Post not found.</p>;

  const postName = post.name?.[lang] || post.name?.en || "";
  const postHeader = post.header?.[lang] || post.header?.en || "";
  const postDescription =
    post.description?.[lang] || post.description?.en || "";
  const postTags = post.tags?.[lang] || post.tags?.en || [];
  const postDate = post.date?.[lang] || post.date?.en || "";
  const postContent = post.fullContent?.[lang] || post.fullContent?.en || [];

  const relatedPosts = blogs
    .filter(
      (blog) =>
        blog.id !== post.id &&
        (blog.name?.[lang] || blog.name?.en) === postName,
    )
    .slice(0, 3);

  const fallbackRelated = blogs
    .filter((blog) => blog.id !== post.id)
    .slice(0, 3 - relatedPosts.length);

  const allRelated = [...relatedPosts, ...fallbackRelated].slice(0, 3);

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "intro":
        return (
          <p key={index} className="article-intro">
            {block.text}
          </p>
        );
      case "heading":
        return (
          <h2 key={index} id={"heading-" + index} className="article-heading">
            {block.text}
          </h2>
        );
      case "paragraph":
        return (
          <p key={index} className="article-paragraph">
            {block.text}
          </p>
        );
      case "list":
        return (
          <ul key={index} className="article-list">
            {block.items.map((item, i) => (
              <li key={i} className="article-list-item">
                <div className="article-list-dot"></div>
                {item}
              </li>
            ))}
          </ul>
        );
      case "callout":
        return (
          <div key={index} className="article-callout">
            {block.text}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="blog-post-container">
      {/* BREADCRUMB */}
      <div className="blog-post-breadcrumb">
        <span className="breadcrumb-link" onClick={() => navigate("/")}>
          {t("blog.home")}
        </span>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-link" onClick={() => navigate("/blog")}>
          {t("blog.blog")}
        </span>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-current">{postHeader}</span>
      </div>

      <div className="blog-post-layout">
        {/* MAIN CONTENT */}
        <article className="blog-post-content">
          <div className="post-header">
            <div className="post-header-top">
              <span className="post-category">{postName}</span>
              <span className="post-read-time">⏱ {post.readTime}</span>
            </div>
            <h1 className="post-title">{postHeader}</h1>
            <p className="post-description">{postDescription}</p>
            <div className="post-meta">
              <div className="post-author">
                <div className="post-author-avatar">MC</div>
                <div className="post-author-info">
                  <span className="post-author-name">Musa Çekçen</span>
                  <span className="post-author-role">
                    {t("blog.author_role")}
                  </span>
                </div>
              </div>
              <div className="post-meta-dot"></div>
              <span className="post-date">{postDate}</span>
            </div>
          </div>

          <div className="post-cover-image">
            <img src={post.image} alt={postHeader} />
          </div>

          <div className="post-tags">
            {postTags.map((tag, i) => (
              <span key={i} className="post-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="post-article-body">
            {postContent.map((block, i) => renderBlock(block, i))}
          </div>

          <div className="post-footer">
            <div className="post-footer-tags">
              <span className="post-footer-label">
                {t("blog.blog_post_tags")}
              </span>
              {postTags.map((tag, i) => (
                <span key={i} className="post-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="post-footer-share">
              <span className="post-footer-label">
                {t("blog.blog_post_share")}
              </span>
              <button className="share-btn">LinkedIn ↗</button>
              <button className="share-btn">Twitter ↗</button>
              <button
                className="share-btn"
                onClick={() =>
                  navigator.clipboard.writeText(window.location.href)
                }
              >
                {t("blog.blog_post_copy_link")}
              </button>
            </div>
            <button
              className="back-to-blog"
              onClick={() => {
                navigate("/blog");
                window.scrollTo(0, 0);
              }}
            >
              {t("blog.blog_post_back")}
            </button>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="blog-post-sidebar">
          <div className="sidebar-author-card">
            <div className="sidebar-author-avatar">MC</div>
            <div className="sidebar-author-info">
              <span className="sidebar-author-name">Musa Çekçen</span>
              <span className="sidebar-author-role">
                {t("blog.author_role")}
              </span>
            </div>
            <p className="sidebar-author-bio">
              {t("blog.blog_post_author_bio")}
            </p>
            <button
              className="sidebar-author-cta"
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
            >
              {t("blog.blog_post_work_with_me")}
            </button>
          </div>

          <div className="sidebar-toc">
            <div className="sidebar-toc-title">
              {t("blog.blog_post_in_this_article")}
            </div>
            <ul className="sidebar-toc-list">
              {postContent
                .map((block, originalIndex) => ({ ...block, originalIndex }))
                .filter((block) => block.type === "heading")
                .map((block, i) => (
                  <li
                    key={i}
                    className="sidebar-toc-item"
                    onClick={() => {
                      const el = document.getElementById(
                        "heading-" + block.originalIndex,
                      );
                      if (el) {
                        const y =
                          el.getBoundingClientRect().top + window.scrollY - 90;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                  >
                    <span className="sidebar-toc-num">0{i + 1}</span>
                    <span className="sidebar-toc-text">{block.text}</span>
                  </li>
                ))}
            </ul>
          </div>

          {allRelated.length > 0 && (
            <div className="sidebar-related">
              <div className="sidebar-related-title">
                {t("blog.blog_post_related")}
              </div>
              <div className="sidebar-related-list">
                {allRelated.map((related) => (
                  <div
                    key={related.id}
                    className="sidebar-related-card"
                    onClick={() => {
                      navigate("/blog/" + related.id);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="sidebar-related-img">
                      <img
                        src={related.image}
                        alt={related.header?.[lang] || related.header?.en}
                      />
                    </div>
                    <div className="sidebar-related-info">
                      <span className="sidebar-related-cat">
                        {related.name?.[lang] || related.name?.en}
                      </span>
                      <span className="sidebar-related-header">
                        {related.header?.[lang] || related.header?.en}
                      </span>
                      <span className="sidebar-related-read">
                        {related.readTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}

export default BlogPost;
