import "./GetYourBusiness.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function GetYourBusiness() {
  return (
    <main className="get-your-business">
      <section className="sec-1">
        <div className="main-header">
          <h1>Ready to get</h1>
          <h1>your business</h1>
          <h1>online?</h1>
        </div>
        <p className="description">
          Free consultation. No commitment. Just a friendly chat about what you
          need.
        </p>
        <div className="btns">
          <button className="start-project">
            Start a Project
            <MdOutlineArrowRightAlt className="right-arrow" />
          </button>
          <button className="all-projects">See All Projects</button>
        </div>
      </section>

      <section className="sec-2">
        <div className="box">
          <div className="icon">📞</div>
          <div className="info">
            <h2>Free discover call</h2>
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
