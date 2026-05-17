import "./MyStory.css";
import timelineData from "./MyStory.js";

function MyStory() {
  return (
    <main className="my-story">
      {/* ── Sol: Hikaye metni ── */}
      <section className="sec-1-my-story">
        <div className="small-header">
          <span></span>
          <p>My Story</p>
        </div>
        <div className="main-header">
          <h1>Why I do</h1>
          <h1 className="italic">this work.</h1>
        </div>
        <div className="desc">
          <p>
            I spent years working in customer-facing roles across different
            industries — from travel and sales to digital marketing at Meta
            campaigns in Berlin. One thing I kept noticing: great local
            businesses, but invisible online.
          </p>
          <p>
            I knew I could change that. So I studied fullstack web development,
            focused on React and started building websites for the businesses
            around me. Salons, cafés, restaurants and loyal shops finally got
            the online presence they deserve.
          </p>
          <p className="quote">
            "I bring a unique perspective to web development — years of direct
            customer experience, digital marketing at Meta campaigns, and
            hands-on frontend development."
          </p>
        </div>
        <div className="list">
          <ul>
            <li>Based in Freiburg — I know the local market and what works here</li>
            <li>You deal directly with me — not to an account manager</li>
            <li>Background to customer service means I understand your clients</li>
            <li>Fixed pricing, fast delivery, zero hidden expenses</li>
          </ul>
        </div>
      </section>

      {/* ── Sağ: Timeline ── */}
      <section className="sec-2-my-story">
        <div className="small-header">
          <span></span>
          <p>Experience</p>
        </div>
        <div className="experiences">
          <div className="timeline">
            {timelineData.map((item) => (
              <div
                key={item.id}
                className={`tl-item ${item.current ? "current" : ""}`}
              >
                <div className="tl-dot">
                  <div className="tl-dot-inner"></div>
                </div>
                <div className="tl-content">
                  <span className="tl-year">{item.year}</span>
                  <h3 className="tl-title">{item.title}</h3>
                  <span className="tl-place">{item.place}</span>
                  <p className="tl-desc">{item.desc}</p>
                  <div className="tl-tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="tl-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MyStory;
