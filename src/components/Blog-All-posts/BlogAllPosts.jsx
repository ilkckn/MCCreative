import "./BlogAllPosts.css";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import posts from "../../pages/Blog/BlogData.js";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";

// Tag'lerin görsel ağırlığını belirler (çok geçiyorsa büyük görünür)
function getTagSize(count, max) {
  const ratio = count / max;
  if (ratio > 0.75) return "size-xl";
  if (ratio > 0.5) return "size-lg";
  if (ratio > 0.25) return "size-md";
  return "size-sm";
}

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Tag'in accent mi neutral mi olacağını belirler
function getTagStyle(count, max) {
  return count / max > 0.5 ? "accent" : "neutral";
}

function BlogAllPosts() {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState("all");

  // BlogData'dan tüm tagları say
  const tagCounts = useMemo(() => {
    const counts = {};
    posts.forEach((post) => {
      post.tags?.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return counts;
  }, []);

  const maxCount = useMemo(
    () => Math.max(...Object.values(tagCounts), 1),
    [tagCounts],
  );

  // Tag cloud listesi — en çok geçenden en aza karıştırılmış sırayla
  const tagCloudItems = useMemo(() => {
    return shuffleArray(Object.entries(tagCounts));
  }, [tagCounts]);

  // Aktif taga göre filtrele
  const filteredPosts = useMemo(() => {
    if (activeTag === "all") return posts;
    return posts.filter((post) =>
      post.tags?.some((tag) => tag.toLowerCase() === activeTag.toLowerCase()),
    );
  }, [activeTag]);

  const handleTagClick = (tag) => {
    setActiveTag((prev) => (prev === tag ? "all" : tag));
  };

  const handleReadPost = (id) => {
    navigate(`/blog/${id}`);
    window.scrollTo(0, 0);
  };

  const handleContact = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <main className="all-posts-page">
      {/* ══ HERO ══ */}
      <section className="all-posts-hero">
        {/* Sol */}
        <div className="hero-left">
          <div className="small-header">
            <span></span>
            <p>Blog</p>
          </div>
          <div className="main-header">
            <h1>Thoughts, stories</h1>
            <h1 className="italic">&amp; ideas.</h1>
          </div>
          <div className="hero-desc">
            <p>
              Writing about web design, freelancing, local business and
              everything I learn along the way.
            </p>
          </div>
          <p className="go-back-blog">
            <BsArrowLeft className="back-arrow" />
            <span onClick={() => navigate("/blog")}>Back to blog</span>
          </p>
        </div>

        {/* Sağ: Tag Cloud */}
        <div className="hero-right">
          <div className="tag-cloud-label">
            <span></span>
            <p>Topics I write about</p>
          </div>

          <div className="tag-cloud">
            {tagCloudItems.map(([tag, count]) => (
              <span
                key={tag}
                className={`tag-item ${getTagSize(count, maxCount)} ${getTagStyle(count, maxCount)} ${activeTag === tag ? "active" : ""}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="tag-cloud-hint">
            ↑ Click any topic to filter posts below
          </p>
        </div>
      </section>

      {/* ══ FİLTRE ÇUBUĞU ══ */}
      <section className="all-posts-filters">
        <div className="filter-left">
          {/* <span className="filter-label">Filter:</span> */}
          <div className="filter-pills">
            <button
              className={activeTag === "all" ? "active" : ""}
              onClick={() => setActiveTag("all")}
            >
              All
            </button>
            {Object.keys(tagCounts).map((tag) => (
              <button
                key={tag}
                className={activeTag === tag ? "active" : ""}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <p className="post-count">
          <span>{filteredPosts.length}</span>{" "}
          {filteredPosts.length === 1 ? "post" : "posts"} found
        </p>
      </section>

      {/* ══ KART GRİDİ ══ */}
      <section className="all-posts-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`post-card ${index === 0 && activeTag === "all" ? "featured" : ""}`}
              onClick={() => handleReadPost(post.id)}
            >
              {/* Görsel */}
              <div className="card-image">
                {post.image ? (
                  <img src={post.image} alt={post.header} />
                ) : (
                  <span className="card-img-placeholder">✦</span>
                )}
                {index === 0 && activeTag === "all" && (
                  <span className="card-badge">Featured</span>
                )}
              </div>

              {/* İçerik */}
              <div
                style={{ display: "flex", flexDirection: "column", flex: 1 }}
              >
                <div className="card-body">
                  {post.tags?.[0] && <p className="card-tag">{post.tags[0]}</p>}
                  <h2 className="card-title">{post.header}</h2>
                  {post.description && (
                    <p className="card-desc">{post.description}</p>
                  )}
                  {post.tags?.length > 1 && (
                    <div className="card-tags">
                      {post.tags.slice(1).map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="card-footer">
                  <div className="card-meta">
                    {post.date && <span>{post.date}</span>}
                    {post.date && post.readTime && (
                      <span className="meta-dot"></span>
                    )}
                    {post.readTime && (
                      <>
                        <MdOutlineTimer className="timer-icon" />
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>
                  <div className="card-read">
                    Read
                    <HiOutlineArrowLongRight className="arrow-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="all-posts-empty">
            <span className="empty-icon">✦</span>
            <h2>No posts found</h2>
            <p>Try selecting a different topic from above.</p>
          </div>
        )}
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <div className="all-posts-cta">
        <div className="cta-text">
          <h2>
            Have a project <span>in mind?</span>
          </h2>
          <p>
            Free consultation, no commitment. Let's talk about your business.
          </p>
        </div>
        <button className="cta-btn" onClick={handleContact}>
          Get in Touch
          <HiOutlineArrowLongRight className="btn-arrow" />
        </button>
      </div>
    </main>
  );
}

export default BlogAllPosts;
