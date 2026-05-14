import "./BlogPost.css";
import { useParams, useNavigate } from "react-router-dom";
import blogs from "../../pages/Blog/BlogData";

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogs.find((blog) => blog.id === parseInt(id));

  if (!post) return <p className="post-not-found">Post not found.</p>;

  const relatedPosts = blogs
    .filter((blog) => blog.id !== post.id && blog.name === post.name)
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
          <h2 key={index} id={`heading-${index}`} className="article-heading">
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
      {/* ── BREADCRUMB ── */}
      <div className="blog-post-breadcrumb">
        <span className="breadcrumb-link" onClick={() => navigate("/")}>
          Home
        </span>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-link" onClick={() => navigate("/blog")}>
          Blog
        </span>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-current">{post.header}</span>
      </div>

      {/* ── MAIN LAYOUT: content + sidebar ── */}
      <div className="blog-post-layout">
        {/* ════════════════════════
            LEFT — MAIN CONTENT
        ════════════════════════ */}
        <article className="blog-post-content">
          {/* POST HEADER */}
          <div className="post-header">
            <div className="post-header-top">
              <span className="post-category">{post.name}</span>
              <span className="post-read-time">⏱ {post.readTime}</span>
            </div>
            <h1 className="post-title">{post.header}</h1>
            <p className="post-description">{post.description}</p>
            <div className="post-meta">
              <div className="post-author">
                <div className="post-author-avatar">MC</div>
                <div className="post-author-info">
                  <span className="post-author-name">Musa Çekçen</span>
                  <span className="post-author-role">
                    Web Designer & Developer
                  </span>
                </div>
              </div>
              <div className="post-meta-dot"></div>
              <span className="post-date">{post.date}</span>
            </div>
          </div>

          {/* COVER IMAGE */}
          <div className="post-cover-image">
            <img src={post.image} alt={post.header} />
          </div>

          {/* TAGS */}
          <div className="post-tags">
            {post.tags.map((tag, i) => (
              <span key={i} className="post-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* ARTICLE BODY */}
          <div className="post-article-body">
            {post.fullContent.map((block, i) => renderBlock(block, i))}
          </div>

          {/* POST FOOTER */}
          <div className="post-footer">
            <div className="post-footer-tags">
              <span className="post-footer-label">Tags:</span>
              {post.tags.map((tag, i) => (
                <span key={i} className="post-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="post-footer-share">
              <span className="post-footer-label">Share:</span>
              <button className="share-btn">LinkedIn ↗</button>
              <button className="share-btn">Twitter ↗</button>
              <button
                className="share-btn"
                onClick={() =>
                  navigator.clipboard.writeText(window.location.href)
                }
              >
                Copy link
              </button>
            </div>
            <button
              className="back-to-blog"
              onClick={() => {
                navigate("/blog");
                window.scrollTo(0, 0);
              }}
            >
              ← Back to all posts
            </button>
          </div>
        </article>

        {/* ════════════════════════
            RIGHT — SIDEBAR
        ════════════════════════ */}
        <aside className="blog-post-sidebar">
          {/* AUTHOR CARD */}
          <div className="sidebar-author-card">
            <div className="sidebar-author-avatar">MC</div>
            <div className="sidebar-author-info">
              <span className="sidebar-author-name">Musa Çekçen</span>
              <span className="sidebar-author-role">
                Web Designer & Developer
              </span>
            </div>
            <p className="sidebar-author-bio">
              I build beautiful websites for local businesses in Freiburg and
              beyond. Salons, cafés, restaurants — if you need customers to find
              you online, I can help.
            </p>
            <button
              className="sidebar-author-cta"
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
            >
              Work with me →
            </button>
          </div>

          {/* TABLE OF CONTENTS */}
          <div className="sidebar-toc">
            <div className="sidebar-toc-title">In this article</div>
            <ul className="sidebar-toc-list">
              {post.fullContent
                .map((block, originalIndex) => ({ ...block, originalIndex }))
                .filter((block) => block.type === "heading")
                .map((block, i) => (
                  <li
                    key={i}
                    className="sidebar-toc-item"
                    onClick={() => {
                      const el = document.getElementById(
                        `heading-${block.originalIndex}`,
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

          {/* RELATED POSTS */}
          {allRelated.length > 0 && (
            <div className="sidebar-related">
              <div className="sidebar-related-title">Related posts</div>
              <div className="sidebar-related-list">
                {allRelated.map((related) => (
                  <div
                    key={related.id}
                    className="sidebar-related-card"
                    onClick={() => {
                      navigate(`/blog/${related.id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="sidebar-related-img">
                      <img src={related.image} alt={related.header} />
                    </div>
                    <div className="sidebar-related-info">
                      <span className="sidebar-related-cat">
                        {related.name}
                      </span>
                      <span className="sidebar-related-header">
                        {related.header}
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
