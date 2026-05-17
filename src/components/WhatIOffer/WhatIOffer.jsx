import "./WhatIOffer.css";
import web_design from "../../assets/Services-icons/web-design.png";
import development from "../../assets/Services-icons/development.png";
import seo from "../../assets/Services-icons/local-seo.png";
import maintenance from "../../assets/Services-icons/maintenance.png";

const services = [
  {
    icon: web_design,
    alt: "Web Design",
    title: "Web Design",
    desc: "Custom designs tailored to your brand and your customers.",
  },
  {
    icon: development,
    alt: "Development",
    title: "Development",
    desc: "Fast, responsive React websites. Works on every device.",
  },
  {
    icon: seo,
    alt: "Local SEO",
    title: "Local SEO",
    desc: "Help customers find you on Google when they search locally.",
  },
  {
    icon: maintenance,
    alt: "Maintenance",
    title: "Maintenance",
    desc: "Monthly updates and support so you can focus on your business.",
  },
];

function WhatIOffer() {
  return (
    <main className="what-i-offer-container">
      <div className="section-top">
        <div className="small-header">
          <span></span>
          <p>What I Offer</p>
        </div>
        <div className="main-header">
          <h1>Services built for</h1>
          <h1 className="italic">real business</h1>
        </div>
        <div className="description">
          <p>
            From a simple one-pager to a full multi-page website with booking and
            contact forms. I build exactly what your business needs, nothing more.
          </p>
        </div>
      </div>

      <div className="services-content">
        {services.map((service) => (
          <div className="box" key={service.title}>
            <div className="icon">
              <img src={service.icon} alt={service.alt} />
            </div>
            <div className="text-content">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
            <div className="line"></div>
            <span className="cta-link">Get a free quote</span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default WhatIOffer;
