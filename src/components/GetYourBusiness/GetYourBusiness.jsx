import "./GetYourBusiness.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function GetYourBusiness() {
  const navigate = useNavigate();

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
          <h1>Ready to get your</h1>
          <h1>business</h1>
          <h1 className="italic">online?</h1>
        </div>
        <p className="description">
          Free consultation. No commitment. Just a friendly chat about what you
          need.
        </p>
        <div className="btns">
          <button onClick={handleNavigateContact}>
            Start a Project
            <MdOutlineArrowRightAlt className="right-arrow" />
          </button>
          <button onClick={handleNavigateProjects}>See All Projects</button>
        </div>
      </section>

      <section className="sec-2">
        <div className="box">
          <div className="icon">📞</div>
          <div className="info">
            <h2>Free discovery call</h2>
            <p>30 minutes to understand your business and what you need.</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">⚡</div>
          <div className="info">
            <h2>Fast delivery</h2>
            <p>
              Most projects completed in 2–3 weeks from first call to launch.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="icon">💰</div>
          <div className="info">
            <h2>Fair, transparent pricing</h2>
            <p>No hidden fees. You know the full cost before we start.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GetYourBusiness;
