"use client";

import { useState } from "react";

const causes = [
  {
    icon: "📚",
    title: "Education",
    text: "Help children and young people access education, learning materials and opportunities.",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    text: "Connect people in need with medical assistance, healthcare resources and support.",
  },
  {
    icon: "🍲",
    title: "Food & Essentials",
    text: "Help families access food, clean water, clothing and essential supplies.",
  },
  {
    icon: "🏠",
    title: "Housing & Shelter",
    text: "Support people facing homelessness, unsafe housing or displacement.",
  },
  {
    icon: "🤝",
    title: "Community Projects",
    text: "Help communities build opportunities, infrastructure and a better future.",
  },
  {
    icon: "🚨",
    title: "Emergency Relief",
    text: "Connect people affected by emergencies and disasters with urgent assistance.",
  },
  {
    icon: "♿",
    title: "Disability Support",
    text: "Promote accessibility, dignity, inclusion and practical support.",
  },
  {
    icon: "💛",
    title: "Family & Care",
    text: "Support vulnerable families, children, older people and caregivers.",
  },
];

const stories = [
  {
    title: "Food & nourishment",
    description: "Every person deserves access to nutritious food.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Education & opportunity",
    description: "Education can open doors to a brighter future.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Stronger communities",
    description: "Together, communities can create lasting change.",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=85",
  },
];

const ways = [
  {
    icon: "💚",
    title: "Give financially",
    text: "Contribute towards meaningful causes and verified needs.",
  },
  {
    icon: "🎁",
    title: "Donate goods",
    text: "Give clothing, food, supplies and other useful items.",
  },
  {
    icon: "🛠️",
    title: "Offer your skills",
    text: "Share your professional knowledge, talent and expertise.",
  },
  {
    icon: "🙋",
    title: "Volunteer",
    text: "Give your time and become part of positive change.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="home">
      <div className="topline">
        CONNECTING HUMANITY • CHANGING LIVES
      </div>

      <header className="site-header">
        <nav className="navbar">
          <div className="navbar-inner">
            <a href="#home" className="brand">
              <span className="brand-mark">🌍</span>
              <span className="brand-text">
                <strong>HUMANITY BRIDGE</strong>
                <small>Connecting Humanity. Changing Lives.</small>
              </span>
            </a>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
              <a href="#causes" onClick={() => setMenuOpen(false)}>
                Causes
              </a>
              <a href="#how" onClick={() => setMenuOpen(false)}>
                How it works
              </a>
              <a href="#stories" onClick={() => setMenuOpen(false)}>
                Stories
              </a>
              <a href="#get-involved" onClick={() => setMenuOpen(false)}>
                Get involved
              </a>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => setMenuOpen(false)}
              >
                Join us
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="section-kicker-light">
            A WORLD UNITED BY KINDNESS
          </span>

          <h1>
            One world.
            <br />
            Many ways to
            <br />
            help.
          </h1>

          <p>
            Connecting people who want to help with people who need help.
            Together, we can bring hope, compassion and opportunity to
            communities around the world.
          </p>

          <div className="hero-actions">
            <a href="#causes" className="btn btn-primary">
              Explore causes →
            </a>
            <a href="#get-involved" className="btn btn-secondary">
              How you can help
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-strip">
        <span className="section-kicker">EVERY ACT OF KINDNESS MATTERS</span>
        <p>
          A world where people can find help, where kindness crosses borders,
          and where no one is forgotten.
        </p>
      </section>

      {/* WORLD STORIES */}
      <section className="world-stories" id="stories">
        <div className="world-stories-head">
          <span className="section-kicker">HUMAN STORIES • GLOBAL NEEDS</span>
          <h2>Humanity is everywhere.</h2>
          <p>
            Around the world, people face challenges every day. Behind every
            need is a human story—and an opportunity for someone to make a
            difference.
          </p>
        </div>

        <div className="story-gallery">
          {stories.map((story, index) => (
            <article
              className="story-photo"
              key={story.title}
              style={{
                backgroundImage: `url("${story.image}")`,
              }}
            >
              <div className="story-overlay">
                <span>0{index + 1} • HUMANITY</span>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="story-note">
          Images illustrate humanitarian themes and are not representations of
          verified individual beneficiaries or specific projects.
        </p>
      </section>

      {/* VIDEO SECTION */}
      <section className="world-video" id="video">
        <span className="section-kicker-light">THE WORLD NEEDS KINDNESS</span>
        <h2>See the world. Feel the humanity.</h2>
        <p>
          Discover stories of resilience, compassion, challenges and hope from
          communities around the world.
        </p>

        <div className="video-container">
          <div className="video-placeholder">
            <div className="video-icon">▶</div>
            <h3>Stories that bring us together</h3>
            <p>
              Explore humanitarian stories and documentaries from around the
              world.
            </p>
            <a
              href="https://www.youtube.com/results?search_query=humanitarian+stories+around+the+world"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Watch global stories ↗
            </a>
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="causes-section" id="causes">
        <span className="section-kicker">WHERE HELP IS NEEDED</span>
        <h2>Explore causes that matter.</h2>
        <p>
          Every community is different. Find an area where your kindness,
          resources or skills can make a difference.
        </p>

        <div className="cause-grid">
          {causes.map((cause) => (
            <article className="cause-card" key={cause.title}>
              <span className="cause-icon">{cause.icon}</span>
              <h3>{cause.title}</h3>
              <p>{cause.text}</p>
              <a href="#get-involved" className="cause-link">
                Find ways to help →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how">
        <span className="section-kicker">SIMPLE • HUMAN • CONNECTED</span>
        <h2>Helping starts with connection.</h2>

        <div className="steps">
          <article className="step">
            <span className="step-number">01</span>
            <h3>Discover needs</h3>
            <p>
              Explore causes, community needs and opportunities to make a
              meaningful difference.
            </p>
          </article>

          <article className="step">
            <span className="step-number">02</span>
            <h3>Choose how to help</h3>
            <p>
              Give, volunteer, donate goods, offer skills or support a
              meaningful project.
            </p>
          </article>

          <article className="step">
            <span className="step-number">03</span>
            <h3>Make a difference</h3>
            <p>
              Be part of a global community working towards a more caring and
              hopeful world.
            </p>
          </article>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="get-involved" id="get-involved">
        <div className="involved-card">
          <span className="section-kicker">
            YOUR KINDNESS CAN TRAVEL FAR
          </span>
          <h2>There is a place for everyone to help.</h2>
          <p>
            Whether you give, volunteer, share your skills or spread the word,
            you can be part of a more compassionate world.
          </p>

          <div className="involved-links">
            {ways.map((way) => (
              <a href="#contact" key={way.title}>
                <span className="way-icon">{way.icon}</span>
                <div>
                  <strong>{way.title}</strong>
                  <small>{way.text}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust-section">
        <div className="trust-inner">
          <span className="section-kicker-light">BUILT AROUND TRUST</span>
          <h2>
            Help should be meaningful.
            <br />
            And handled responsibly.
          </h2>
          <p>
            Humanity Bridge is committed to developing careful verification,
            privacy safeguards, transparent processes and responsible ways of
            helping—protecting the dignity of people seeking support and those
            giving it.
          </p>

          <div className="trust-points">
            <span>✓ Responsible verification</span>
            <span>✓ Privacy & dignity</span>
            <span>✓ Transparency</span>
            <span>✓ Safer ways to help</span>
            <span>✓ Accountability</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="contact">
        <span className="section-kicker-light">
          LET KINDNESS CONNECT US
        </span>
        <h2>A little help can mean everything.</h2>
        <p>
          Join us in building a world where compassion moves further and no
          one has to face hardship alone.
        </p>

        <a href="mailto:hello@humanitybridge.org" className="btn">
          Connect with us →
        </a>

        <div className="cta-heart">💚</div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div>
            <a href="#home" className="brand brand-footer">
              <span className="brand-mark">🌍</span>
              <span className="brand-text">
                <strong>HUMANITY BRIDGE</strong>
                <small>Connecting Humanity. Changing Lives.</small>
              </span>
            </a>

            <p>
              Building connections that help kindness travel further.
              A global mission built on humanity.
            </p>
          </div>

          <div className="footer-links">
            <a href="#causes">Causes</a>
            <a href="#how">How it works</a>
            <a href="#stories">Stories</a>
            <a href="#get-involved">Get involved</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} HUMANITY BRIDGE. A mission built on
            kindness.
          </span>
          <span>Connecting Humanity. Changing Lives.</span>
        </div>
      </footer>
    </main>
  );
      }
