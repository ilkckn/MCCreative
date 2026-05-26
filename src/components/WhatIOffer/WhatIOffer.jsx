import "./WhatIOffer.css";
import { useTranslation } from "react-i18next";
import web_design from "../../assets/Services-icons/web-design.png";
import development from "../../assets/Services-icons/development.png";
import seo from "../../assets/Services-icons/local-seo.png";
import maintenance from "../../assets/Services-icons/maintenance.png";

function WhatIOffer() {
  const { t } = useTranslation();

  const services = [
    { icon: web_design, alt: "Web Design",   titleKey: "what_i_offer.services.web_design_title",   descKey: "what_i_offer.services.web_design_desc" },
    { icon: development, alt: "Development", titleKey: "what_i_offer.services.development_title",  descKey: "what_i_offer.services.development_desc" },
    { icon: seo,         alt: "Local SEO",   titleKey: "what_i_offer.services.seo_title",          descKey: "what_i_offer.services.seo_desc" },
    { icon: maintenance, alt: "Maintenance", titleKey: "what_i_offer.services.maintenance_title",  descKey: "what_i_offer.services.maintenance_desc" },
  ];

  return (
    <main className="what-i-offer-container">
      <div className="section-top">
        <div className="small-header">
          <span></span>
          <p>{t("what_i_offer.small_header")}</p>
        </div>
        <div className="main-header">
          <h1>{t("what_i_offer.title_1")}</h1>
          <h1 className="italic">{t("what_i_offer.title_2")}</h1>
        </div>
        <div className="description">
          <p>{t("what_i_offer.desc")}</p>
        </div>
      </div>

      <div className="services-content">
        {services.map((service) => (
          <div className="box" key={service.alt}>
            <div className="icon">
              <img src={service.icon} alt={service.alt} />
            </div>
            <div className="text-content">
              <h2>{t(service.titleKey)}</h2>
              <p>{t(service.descKey)}</p>
            </div>
            <div className="line"></div>
            <span className="cta-link">{t("what_i_offer.cta_link")}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default WhatIOffer;