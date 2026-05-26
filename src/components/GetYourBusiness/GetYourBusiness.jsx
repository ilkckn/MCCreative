import "./GetYourBusiness.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function GetYourBusiness() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigateContact = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  const handleNavigateProjects = () => {
    navigate("/projects");
    window.scrollTo(0, 0);
  };

  return (
    <main className="get-your-business">
      <section className="sec-1">
        <div className="main-header">
          <h1>{t("get_your_business.title_1")}</h1>
          <h1>{t("get_your_business.title_2")}</h1>
          <h1 className="italic">{t("get_your_business.title_3")}</h1>
        </div>
        <p className="description">{t("get_your_business.desc")}</p>
        <div className="btns">
          <button onClick={handleNavigateContact}>
            {t("get_your_business.btn_start")}
            <MdOutlineArrowRightAlt className="right-arrow" />
          </button>
          <button onClick={handleNavigateProjects}>
            {t("get_your_business.btn_projects")}
          </button>
        </div>
      </section>

      <section className="sec-2">
        <div className="box">
          <div className="icon">📞</div>
          <div className="info">
            <h2>{t("get_your_business.box_1_title")}</h2>
            <p>{t("get_your_business.box_1_desc")}</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">⚡</div>
          <div className="info">
            <h2>{t("get_your_business.box_2_title")}</h2>
            <p>{t("get_your_business.box_2_desc")}</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">💰</div>
          <div className="info">
            <h2>{t("get_your_business.box_3_title")}</h2>
            <p>{t("get_your_business.box_3_desc")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GetYourBusiness;
