import "./BlogAllPosts.css";
import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import posts from "../../pages/Blog/BlogData.js";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";
import { LuSlidersHorizontal } from "react-icons/lu";

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

function getTagStyle(count, max) {
  return count / max > 0.5 ? "accent" : "neutral";
}

function BlogAllPosts() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || "en";
  const [activeTag, setActiveTag] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const tagCounts = useMemo(() => {
    const counts = {};
    posts.forEach((post) => {
      const tags = post.tags?.[lang] || post.tags?.en || [];
      tags.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return counts;
  }, [lang]);

  const maxCount = useMemo(
    () => Math.max(...Object.values(tagCounts), 1),
    [tagCounts],
  );
  const tagCloudItems = useMemo(
    () => shuffleArray(Object.entries(tagCounts)),
    [tagCounts],
  );

  const filteredPosts = useMemo(() => {
    if (activeTag === "all") return posts;
    return posts.filter((post) => {
      const tags = post.tags?.[lang] || post.tags?.en || [];
      return tags.some((tag) => tag.toLowerCase() === activeTag.toLowerCase());
    });
  }, [activeTag, lang]);

  // Dışarı tıklayınca dropdown kapat
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTagClick = (tag) => {
    setActiveTag((prev) => (prev === tag ? "all" : tag));
    setIsDropdownOpen(false);
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
      {/* HERO */}
      <section className="all-posts-hero">
        <div className="hero-left">
          <div className="small-header">
            <span></span>
            <p>{t("blog.all_posts_page_header")}</p>
          </div>
          <div className="main-header">
            <h1>{t("blog.all_posts_title_1")}</h1>
            <h1 className="italic">{t("blog.all_posts_title_2")}</h1>
          </div>
          <div className="hero-desc">
            <p>{t("blog.all_posts_desc")}</p>
          </div>
          <p className="go-back-blog">
            <BsArrowLeft className="back-arrow" />
            <span onClick={() => navigate("/blog")}>
              {t("blog.back_to_blog")}
            </span>
          </p>
        </div>

        <div className="hero-right">
          <div className="tag-cloud-label">
            <span></span>
            <p>{t("blog.topics_write_about")}</p>
          </div>
          <div className="tag-cloud">
            {tagCloudItems.map(([tag, count]) => (
              <span
                key={tag}
                className={
                  "tag-item " +
                  getTagSize(count, maxCount) +
                  " " +
                  getTagStyle(count, maxCount) +
                  (activeTag === tag ? " active" : "")
                }
                onClick={() =>
                  setActiveTag((prev) => (prev === tag ? "all" : tag))
                }
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="tag-cloud-hint">{t("blog.tag_hint")}</p>
        </div>
      </section>

      {/* FİLTRE */}
      <section className="all-posts-filters">
        {/* ── Desktop: Pill butonlar (820px üzeri) ── */}
        <div className="filter-pills-desktop">
          <button
            className={activeTag === "all" ? "active" : ""}
            onClick={() => setActiveTag("all")}
          >
            {t("blog.filter_all")}
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

        {/* ── Mobile: Dropdown (820px altı) ── */}
        <div className="filter-dropdown-mobile" ref={dropdownRef}>
          <button
            className="filter-dropdown-btn"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <LuSlidersHorizontal className="filter-dropdown-icon" />
            <span className="filter-dropdown-label">
              {t("blog.filter_by_tag") || "Filter by tag"}:
            </span>
            <span className="filter-dropdown-active">
              {activeTag === "all" ? t("blog.filter_all") : activeTag}
            </span>
            <span
              className={
                "filter-dropdown-arrow " + (isDropdownOpen ? "open" : "")
              }
            >
              ▾
            </span>
          </button>

          {isDropdownOpen && (
            <div className="filter-dropdown-menu">
              <div
                className={
                  "filter-dropdown-item full " +
                  (activeTag === "all" ? "active" : "")
                }
                onClick={() => handleTagClick("all")}
              >
                <span>{t("blog.filter_all")}</span>
                {activeTag === "all" && <span className="filter-check">✓</span>}
              </div>
              <div className="filter-dropdown-grid">
                {Object.keys(tagCounts).map((tag) => (
                  <div
                    key={tag}
                    className={
                      "filter-dropdown-item " +
                      (activeTag === tag ? "active" : "")
                    }
                    onClick={() => handleTagClick(tag)}
                  >
                    <span>{tag}</span>
                    {activeTag === tag && (
                      <span className="filter-check">✓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <p className="post-count">
          <span>{filteredPosts.length}</span>{" "}
          {filteredPosts.length === 1
            ? t("blog.posts_found_one")
            : t("blog.posts_found_many")}
        </p>
      </section>

      {/* KART GRİDİ */}
      <section className="all-posts-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className={
                "post-card " +
                (index === 0 && activeTag === "all" ? "featured" : "")
              }
              onClick={() => handleReadPost(post.id)}
            >
              <div className="card-image">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.header?.[lang] || post.header?.en}
                  />
                ) : (
                  <span className="card-img-placeholder">✦</span>
                )}
                {index === 0 && activeTag === "all" && (
                  <span className="card-badge">
                    {t("blog.featured_badge_card")}
                  </span>
                )}
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", flex: 1 }}
              >
                <div className="card-body">
                  {post.tags?.[lang]?.[0] && (
                    <p className="card-tag">{post.tags[lang][0]}</p>
                  )}
                  <h2 className="card-title">
                    {post.header?.[lang] || post.header?.en}
                  </h2>
                  {post.description && (
                    <p className="card-desc">
                      {post.description?.[lang] || post.description?.en}
                    </p>
                  )}
                  {(post.tags?.[lang]?.length || 0) > 1 && (
                    <div className="card-tags">
                      {post.tags[lang].slice(1).map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="card-footer">
                  <div className="card-meta">
                    {post.date && (
                      <span>{post.date?.[lang] || post.date?.en}</span>
                    )}
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
                    {t("blog.read_short")}
                    <HiOutlineArrowLongRight className="arrow-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="all-posts-empty">
            <span className="empty-icon">✦</span>
            <h2>{t("blog.no_posts_title")}</h2>
            <p>{t("blog.no_posts_desc")}</p>
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <div className="all-posts-cta">
        <div className="cta-text">
          <h2>{t("blog.cta_title")}</h2>
          <p>{t("blog.cta_desc")}</p>
        </div>
        <button className="cta-btn" onClick={handleContact}>
          {t("blog.cta_btn")}
          <HiOutlineArrowLongRight className="btn-arrow" />
        </button>
      </div>
    </main>
  );
}

export default BlogAllPosts;
