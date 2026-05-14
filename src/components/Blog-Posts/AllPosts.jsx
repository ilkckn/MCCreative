import "./AllPosts.css";
import blogs from "../../pages/Blog/BlogData";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdOutlineTimer } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function AllPosts() {
  const navigate = useNavigate();

  const handleReadArticle = (id) => {
    navigate(`/blog/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="all-posts-container">
      <section className="blog-top-header">
        <span></span>
        <p>All Posts</p>
      </section>

      <section className="grid-all-posts">
        {blogs.map((blog) => {
          return (
            <div
              key={blog.id}
              className="blog-box"
              onClick={() => handleReadArticle(blog.id)}
            >
              <div className="image-section">
                <img src={blog.image} alt={blog.header} />
                <span>{blog.name}</span>
                <span>
                  <MdOutlineTimer className="timer-icon" /> {blog.readTime}
                </span>
              </div>
              <div className="info-section">
                <h2>{blog.name}</h2>
                <h1>{blog.header}</h1>
                <p>{blog.description}</p>
                <p className="line-breaker"></p>
                <div className="date-readBtn">
                  <span>{blog.date}</span>
                  <button
                    className="read-btn"
                    onClick={() => handleReadArticle(blog.id)}
                  >
                    Read article
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
