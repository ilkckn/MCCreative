import "./CommonQuestions.css";
import { TiStar, TiStarHalf } from "react-icons/ti";

function CommonQuestions() {
  return (
    <main className="common-questions-container">
      <div className="cq-small-header">
        <span></span>
        <p>Common Questions</p>
      </div>
      <div className="questions">
        <div className="question">
          <p>How long does it take to build a website?</p>
          <p>
            Most projects are completed in 2–3 weeks from our first call to
            launch. More complex sites can take a little longer.
          </p>
        </div>
        <div className="question">
          <p>Do I need to prepare anything before contacting you?</p>
          <p>
            Not at all. Just a rough idea of what your business does and what
            you'd like your website to achieve. We'll figure out the rest
            together.
          </p>
        </div>
        <div className="question">
          <p>What happens after the website is launched?</p>
          <p>
            I'm available for questions and small updates after launch. For
            ongoing changes, I offer a monthly maintenance package.
          </p>
        </div>
        <div className="question">
          <p>Can you work with Turkish-speaking clients?</p>
          <p>
            Absolutely — I'm a native Turkish speaker and work with clients in
            Turkish, English and German.
          </p>
        </div>
      </div>
      <div className="comments">
        <div className="comment">
          <p>
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
            <TiStarHalf className="star-icon" />
          </p>
          <p>
            "Professional, fast and very easy to work with. He understood
            exactly what we needed and delivered beyond expectations."
          </p>
          <div className="name-avatar">
            <div className="avatar">MB</div>
            <div className="name">
              <p>Marc Bauer</p>
              <p>Brew & Co Café, Basel</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <p>
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
            <TiStar className="star-icon" />
          </p>
          <p>
            "Musa is a fantastic web designer. He created a beautiful website for my business and was a pleasure to work with. Highly recommended!"
          </p>
          <div className="name-avatar">
            <div className="avatar">JD</div>
            <div className="name">
              <p>John Doe</p>
              <p>Example Company, New York</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CommonQuestions;
