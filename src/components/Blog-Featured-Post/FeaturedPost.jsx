import "./FeaturedPost.css";
import posts from "../../pages/Blog/BlogData.js";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdOutlineTimer } from "react-icons/md";
import { featuredPostImage } from "../../pages/Blog/BlogData.js";

function FeaturedPost() {
  return (
    <main className="featured-post-container">
      <div className="featured-top-header">
        <div className="header">
          <span></span>
          <p>Featured Post</p>
        </div>
        <p className="view-all">
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
          <h2>{posts[0].name}</h2>
          <h1>{posts[0].header}</h1>
          <p>{posts[0].description}</p>
          <div className="tags">
            {posts[0].tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="break-line"></div>
          <p>
            {posts[0].date} <span>&#8226;</span> {posts[0].readTime}
          </p>
          <p>
            Read article <HiOutlineArrowLongRight className="right-arrow" />
          </p>
        </div>
      </div>
    </main>
  );
}

export default FeaturedPost;
