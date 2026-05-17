import "./FeaturedPost.css";
import posts from "../../pages/Blog/BlogData.js";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdOutlineTimer } from "react-icons/md";
import { featuredPostImage } from "../../pages/Blog/BlogData.js";
import { useNavigate } from "react-router-dom";

function FeaturedPost() {
  const navigate = useNavigate();

  const post = posts.find((blog) => blog.id === posts[0].id);

  const handleReadArticle = (id) => {
    navigate(`/blog/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("clicked");
  };

  return (
    <main className="featured-post-container">
      <div className="featured-top-header">
        <div className="header">
          <span></span>
          <p>Featured Post</p>
        </div>
        <p className="view-all" onClick={() => navigate("/blog/all")}>
          View all posts <HiOutlineArrowLongRight className="right-arrow" />
        </p>
      </div>
      <div className="posts">
        <div className="image-status">
          <img src={featuredPostImage} alt="featured post" />
          <p className="status1">featured</p>
          <p className="status2">
            <MdOutlineTimer className="timer-icon" /> {posts[0].readTime}
          </p>
        </div>
        <div className="info">
          <h2>{post.name}</h2>
          <h1>{post.header}</h1>
          <p>{post.description}</p>
          <div className="tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="break-line"></div>
          <p>
            {post.date} <span>&#8226;</span> {post.readTime}
          </p>
          <p
            onClick={() => handleReadArticle(post.id)}
            className="read-article"
          >
            Read article <HiOutlineArrowLongRight className="right-arrow" />
          </p>
        </div>
      </div>
    </main>
  );
}

export default FeaturedPost;
