import "./WhatIOffer.css";
import web_design from "../../assets/Services-icons/web-design.png";
import development from "../../assets/Services-icons/development.png";
import seo from "../../assets/Services-icons/local-seo.png";
import maintenance from "../../assets/Services-icons/maintenance.png";

function WhatIOffer() {
  return (
    <main className="what-i-offer-container">
      <div className="small-header">
        <span></span>
        <p>What I Offer</p>
      </div>
      <div className="main-header">
        <h1>Services built for</h1>
        <h1>real business</h1>
      </div>
      <div className="description">
        <p>
          From a simple one-pager to a full multi-page website with booking and
          contact forms. I build exactly what your business needs, nothing more.
        </p>
      </div>
      <div className="services-content">
        <div className="box">
          <div className="icon">
            <img src={web_design} alt="Web Design" />
          </div>
          <div className="text-content">
            <h2>Web Design</h2>
            <p>Custom designs tailored to your brand and your customers.</p>
          </div>
          <div className="line"></div>
          <p>Get a free quote</p>
        </div>
        <div className="box">
          <div className="icon">
            <img src={development} alt="Development" />
          </div>
          <div className="text-content">
            <h2>Development</h2>
            <p>Fast, responsive React websites. Works on every device.</p>
          </div>
          <div className="line"></div>
          <p>Get a free quote</p>
        </div>
        <div className="box">
          <div className="icon">
            <img src={seo} alt="SEO" />
          </div>
          <div className="text-content">
            <h2>Local SEO</h2>
            <p>Help customers find you on Google when they search locally.</p>
          </div>
          <div className="line"></div>
          <p>Get a free quote</p>
        </div>
        <div className="box">
          <div className="icon">
            <img src={maintenance} alt="Maintenance" />
          </div>
          <div className="text-content">
            <h2>Maintenance</h2>
            <p>
              Monthly updates and support so you can focus on your business.
            </p>
          </div>
          <div className="line"></div>
          <p>Get a free quote</p>
        </div>
      </div>
    </main>
  );
}

export default WhatIOffer;
