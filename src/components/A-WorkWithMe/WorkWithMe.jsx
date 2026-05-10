import "./WorkWithMe.css";

function WorkWithMe() {
  return (
    <main className="work-with-me">
      <section className="sec-1-work-with-me">
        <div className="small-header">
          <span></span>
          <p>work with me</p>
        </div>
        <div className="main-header">
          <h1>Ready to build</h1>
          <h1>something</h1>
          <h1>together?</h1>
        </div>
        <div className="desc">
          <p>
            Free consultation. No commitment. Just a friendly chat about your
            business and what you need online.
          </p>
        </div>
        <div className="btns">
          <button className="start-a-project">Start a Project</button>
          <button className="see-my-work">See My Work</button>
        </div>
      </section>

      <section className="sec-2-work-with-me">
        <div className="box">
          <div className="icon">📞</div>
          <div className="info">
            <h2>Free Consultation</h2>
            <p>Let's have a chat about your project and how I can help.</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">⚡</div>
          <div className="info">
            <h2>Fast Turnaround</h2>
            <p>Most websites are live within 2–3 weeks from our first call.</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">💰</div>
          <div className="info">
            <h2>Transparent Pricing</h2>
            <p>
              Fixed quotes, no hidden costs. You know what you're paying before
              we start.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="icon">🗣️</div>
          <div className="info">
            <h2>Multilingual support</h2>
            <p>I work in Turkish, English and German — no barriers.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WorkWithMe;
