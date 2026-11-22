const causes = [
  { icon: "🎓", title: "Education", desc: "Support students, schools, learning materials and educational opportunities." },
  { icon: "🏥", title: "Healthcare", desc: "Help patients, hospitals, medical needs and people seeking treatment." },
  { icon: "🍲", title: "Food & Hunger", desc: "Help families and communities access nutritious meals and food supplies." },
  { icon: "🏠", title: "Housing & Shelter", desc: "Support homeless people, families and those needing safe shelter." },
  { icon: "👵", title: "Older People", desc: "Provide care, companionship, essential supplies and support." },
  { icon: "🦽", title: "Disability Support", desc: "Support accessibility, equipment, care and inclusive opportunities." },
  { icon: "🚨", title: "Emergency Relief", desc: "Respond to disasters, crises and urgent humanitarian needs." },
  { icon: "🤝", title: "Community Projects", desc: "Help communities build, grow and improve their living conditions." },
];

const ways = [
  { icon: "💝", title: "Give financially", desc: "Contribute money to verified causes and humanitarian projects." },
  { icon: "🎁", title: "Donate goods", desc: "Give food, clothing, equipment and other essential items." },
  { icon: "🛠️", title: "Offer skills", desc: "Share your professional skills, expertise or services." },
  { icon: "🙋", title: "Volunteer", desc: "Give your time, experience and energy to help others." },
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brandIcon">🌍</span>
          <span>
            <strong>HUMANITY BRIDGE</strong>
            <small>Connecting Humanity. Changing Lives.</small>
          </span>
        </a>

        <nav className="navLinks">
          <a href="#causes">Causes</a>
          <a href="#how">How it works</a>
          <a href="#about">About</a>
        </nav>

        <a className="navDonate" href="#ways">Get involved</a>
      </header>

      <section className="hero" id="home">
        <div className="heroContent">
          <span className="eyebrow">A WORLD UNITED BY KINDNESS</span>

          <h1>
            One world.
            <br />
            <span>Many ways to help.</span>
          </h1>

          <p className="heroText">
            Connecting people who want to help with people who need help.
            Together, we can make hope, compassion and opportunity reach
            communities around the world.
          </p>

          <div className="heroButtons">
            <a href="#causes" className="primaryButton">
              Explore causes →
            </a>
            <a href="#ways" className="secondaryButton">
              How you can help
            </a>
          </div>

          <p className="heroNote">
            Every act of kindness matters. Every person deserves hope.
          </p>
        </div>

        <div className="heroVisual">
          <div className="globe">🌍</div>
          <div className="floatingCard cardOne">
            ❤️ Compassion
          </div>
          <div className="floatingCard cardTwo">
            🤝 Together
          </div>
          <div className="floatingCard cardThree">
            ✨ Hope
          </div>
          <div className="heroCircleText">
            Connecting humanity
          </div>
        </div>
      </section>

      <section className="missionStrip">
        <div>
          <span>🌍</span>
          <strong>A global mission</strong>
          <p>Connecting help across borders</p>
        </div>
        <div>
          <span>💙</span>
          <strong>Human compassion</strong>
          <p>People helping people</p>
        </div>
        <div>
          <span>🔎</span>
          <strong>Transparency</strong>
          <p>Building trust through accountability</p>
        </div>
      </section>

      <section className="section" id="causes">
        <div className="sectionHeading">
          <span className="eyebrow">MAKE A DIFFERENCE</span>
          <h2>Explore causes that matter</h2>
          <p>
            Discover humanitarian needs and opportunities to make a
            positive difference in someone's life.
          </p>
        </div>

        <div className="causeGrid">
          {causes.map((cause) => (
            <article className="causeCard" key={cause.title}>
              <div className="causeIcon">{cause.icon}</div>
              <h3>{cause.title}</h3>
              <p>{cause.desc}</p>
              <a href="#ways">Learn how to help →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="waysSection" id="ways">
        <div className="sectionHeading">
          <span className="eyebrow">YOUR KINDNESS CAN TAKE MANY FORMS</span>
          <h2>There are many ways to help</h2>
          <p>
            You don't need to be rich to change a life.
            Your time, skills, resources and kindness can make a difference.
          </p>
        </div>

        <div className="waysGrid">
          {ways.map((way) => (
            <article className="wayCard" key={way.title}>
              <span className="wayIcon">{way.icon}</span>
              <h3>{way.title}</h3>
              <p>{way.desc}</p>
              <a href="#contact">Get involved →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="howSection" id="how">
        <div className="sectionHeading">
          <span className="eyebrow">SIMPLE. HUMAN. MEANINGFUL.</span>
          <h2>How HUMANITY BRIDGE works</h2>
        </div>

        <div className="stepsGrid">
          <article className="step">
            <span className="stepNumber">01</span>
            <h3>Discover a need</h3>
            <p>Explore causes, communities and humanitarian projects seeking support.</p>
          </article>
          <article className="step">
            <span className="stepNumber">02</span>
            <h3>Choose how to help</h3>
            <p>Donate, volunteer, offer goods, share skills or support a project.</p>
          </article>
          <article className="step">
            <span className="stepNumber">03</span>
            <h3>Make an impact</h3>
            <p>Help create meaningful change and strengthen communities.</p>
          </article>
        </div>
      </section>

      <section className="trustSection" id="about">
        <div className="trustContent">
          <span className="eyebrow">HELP WITH TRUST</span>
          <h2>Compassion deserves transparency.</h2>
          <p>
            HUMANITY BRIDGE aims to build a trusted global platform where
            humanitarian needs can be shared responsibly, projects can be
            verified, and supporters can understand how their contributions
            make a difference.
          </p>
          <div className="trustPoints">
            <span>✓ Verification processes</span>
            <span>✓ Accountability and reporting</span>
            <span>✓ Privacy and protection</span>
            <span>✓ Responsible assistance</span>
          </div>
        </div>
        <div className="trustVisual">
          <div className="trustHeart">💙</div>
          <h3>Kindness connects us all.</h3>
          <p>Small acts. Shared hope. A better world.</p>
        </div>
      </section>

      <section className="joinSection" id="contact">
        <span className="eyebrow">BE PART OF SOMETHING BIGGER</span>
        <h2>Let's make the world a little better.</h2>
        <p>
          Wherever you are in the world, you can be part of the bridge
          connecting kindness to those who need it.
        </p>
        <a href="#ways" className="primaryButton">
          Join the mission →
        </a>
      </section>

      <footer className="footer">
        <div className="footerBrand">
          <span>🌍 HUMANITY BRIDGE</span>
          <p>Connecting Humanity. Changing Lives.</p>
        </div>
        <div className="footerLinks">
          <a href="#causes">Causes</a>
          <a href="#ways">Get involved</a>
          <a href="#about">About us</a>
          <a href="#home">Back to top ↑</a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} HUMANITY BRIDGE. Built for humanity.
        </p>
      </footer>
    </main>
  );
   }
