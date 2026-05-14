import "./StayUpdated.css";
import { RiArrowRightSLine } from "react-icons/ri";

function StayUpdated() {
  return (
    <main className="stay-updated-container">
      <section className="stay-updated-left">
        <div className="updated-small-header">
          <span></span>
          <p>Stay Updated</p>
        </div>
        <div className="main-header">
          <h1>Tips for your</h1>
          <h1>
            business, <span>delivered</span>
          </h1>
          <h1>monthly.</h1>
        </div>
        <p className="description">
          One short email per month — practical web and SEO tips for local
          business owners. No spam, no fluff. Unsubscribe anytime.
        </p>
        <div className="subscribe">
          <input type="text" placeholder="your@email.com" />
          <button>
            Subscribe <RiArrowRightSLine className="arrow-subscribe" />
          </button>
        </div>
        <p className="no-spam">No spam. Unsubscribe at any time.</p>
      </section>

      <section className="stay-updated-right">
        <p className="header-text">topic i write about</p>
        <div className="web-design">
          <h2>web design</h2>
          <p>1 post</p>
        </div>
        <div className="local-seo">
          <h2>local seo</h2>
          <p>1 post</p>
        </div>
        <div className="business-tips">
          <h2>business tips</h2>
          <p>2 posts</p>
        </div>
        <div className="react-dev">
          <h2>react development</h2>
          <p>1 post</p>
        </div>
      </section>
    </main>
  );
}

export default StayUpdated;
