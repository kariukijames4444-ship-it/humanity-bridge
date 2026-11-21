const causes = [
  { icon: '🎓', title: 'Education & Schools', text: 'Help learners access fees, supplies, meals, technology and safe learning spaces.' },
  { icon: '🏥', title: 'Health & Patients', text: 'Support medical needs, hospital care and essential health-related assistance.' },
  { icon: '🍲', title: 'Food & Poverty Relief', text: 'Help people and families facing hardship with essentials and emergency support.' },
  { icon: '👵', title: 'Older People', text: 'Offer practical help, care, companionship and everyday necessities.' },
  { icon: '🏠', title: 'Housing & Shelter', text: 'Support people experiencing homelessness or unsafe living conditions.' },
  { icon: '🚨', title: 'Emergency Relief', text: 'Connect support to communities affected by disasters and urgent crises.' },
  { icon: '♿', title: 'Disability Support', text: 'Help provide accessibility equipment, services and inclusive opportunities.' },
  { icon: '🤝', title: 'Community Projects', text: 'Support clean water, community facilities, skills and local initiatives.' },
];

const ways = [
  ['💝', 'Give financially', 'Contribute to a cause or project once or on a recurring basis when payments are enabled.'],
  ['🎁', 'Give goods', 'Offer useful items such as clothing, food, books, devices or supplies.'],
  ['🧰', 'Offer skills or services', 'Share professional skills, transport, repairs, teaching or other services.'],
  ['🙋', 'Volunteer', 'Give your time and experience to approved activities and local partners.'],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">
          <span className="brandmark">HB</span>
          <span>
            HUMANITY<span className="brandAccent"> BRIDGE</span>
            <small>CONNECTING HUMANITY. CHANGING LIVES.</small>
          </span>
        </a>
        <nav>
          <a href="#causes">Causes</a>
          <a href="#ways">Ways to help</a>
          <a href="#trust">Trust & transparency</a>
          <a href="#about">Our mission</a>
        </nav>
        <a className="navButton" href="#join">Join the community</a>
      </header>

      <section className="hero" id="top">
        <div className="heroContent">
          <div className="eyebrow"><span className="dot" /> A GLOBAL COMMUNITY FOR GOOD</div>
          <h1>One world.<br /><em>Many ways</em> to help.</h1>
          <p className="heroText">
            Connecting people who want to help with communities and individuals seeking support—across borders, backgrounds and circumstances.
          </p>
          <div className="heroActions">
            <a className="primary" href="#ways">Discover ways to help <span>→</span></a>
            <a className="secondary" href="#causes">Explore causes</a>
          </div>
          <div className="heroNote">A helping hand can travel farther than you think.</div>
        </div>
        <div className="heroVisual" aria-label="Illustration of people connecting around the world">
          <div className="orb">
            <div className="orbit orbitOne" />
            <div className="orbit orbitTwo" />
            <div className="globe">🌍</div>
            <div className="floatCard cardOne"><span>💛</span><b>Kindness has no borders</b></div>
            <div className="floatCard cardTwo"><span>🤲</span><b>Help can take many forms</b></div>
            <div className="floatCard cardThree"><span>🌱</span><b>Small acts. Real impact.</b></div>
          </div>
        </div>
      </section>

      <section className="notice">
        <span>ℹ️</span>
        <div>
          <b>We are building with transparency first.</b>
          <p>Donation payments and campaigns are not yet activated. We will verify our payment systems and project processes before accepting public donations.</p>
        </div>
      </section>

      <section className="section" id="causes">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">FIND A CAUSE</div>
            <h2>Where help is needed</h2>
          </div>
          <p>Explore the kinds of support we aim to connect worldwide. Campaigns will appear here after review and verification.</p>
        </div>
        <div className="causeGrid">
          {causes.map((c) => (
            <article className="cause" key={c.title}>
              <div className="causeIcon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <a href="#join">Learn about this cause <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="waysSection" id="ways">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">YOUR KINDNESS, YOUR WAY</div>
            <h2>Help is more than money.</h2>
          </div>
          <p>Every person has something valuable to give. Our goal is to make it easier to offer support in different ways.</p>
        </div>
        <div className="waysGrid">
          {ways.map(([icon, title, text]) => (
            <article className="way" key={title}>
              <div>{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" id="trust">
        <div className="trustText">
          <div className="eyebrow">TRUST IS OUR FOUNDATION</div>
          <h2>Compassion.<br />Accountability.<br /><em>Transparency.</em></h2>
          <p>Helping people requires trust. Before public fundraising begins, we plan to establish clear verification, secure payment handling, financial oversight, reporting and safeguards for people’s privacy.</p>
          <a className="secondary light" href="#join">Follow our progress →</a>
        </div>
        <div className="trustList">
          <div><span>01</span><section><h3>Verify before publishing</h3><p>Requests and partner organizations will go through appropriate review before campaigns are approved.</p></section></div>
          <div><span>02</span><section><h3>Track every transaction</h3><p>Financial records, receipts, payment reconciliation and approvals are part of our planned controls.</p></section></div>
          <div><span>03</span><section><h3>Protect people and data</h3><p>We will minimize sensitive information, restrict access and use security safeguards.</p></section></div>
          <div><span>04</span><section><h3>Report progress honestly</h3><p>Impact figures and project updates will be based on documented information—not invented numbers.</p></section></div>
        </div>
      </section>

      <section className="mission" id="about">
        <div className="eyebrow">OUR VISION</div>
        <h2>A world where people<br />can reach each other with help.</h2>
        <p>Humanity Bridge is being developed as a worldwide platform for generosity—connecting donors, volunteers, businesses, organizations and communities, while respecting local laws and payment availability.</p>
        <div className="missionPills">
          <span>🌍 Global-minded</span>
          <span>🤲 People-first</span>
          <span>🔐 Safety-focused</span>
          <span>📊 Transparent</span>
        </div>
      </section>

      <section className="join" id="join">
        <div>
          <div className="eyebrow">BE PART OF THE JOURNEY</div>
          <h2>Let's build a bridge<br />to a better world.</h2>
          <p>We are preparing the platform. Follow our development, share the vision and help us connect with future volunteers and partners.</p>
        </div>
        <div className="joinBox">
          <h3>Early community</h3>
          <p>Interest registration will be enabled once our secure signup system is ready.</p>
          <button disabled>Community registration — coming soon</button>
          <small>No donation payments are being collected on this preview.</small>
        </div>
      </section>

      <footer>
        <div className="brand footerBrand">
          <span className="brandmark">HB</span>
          <span>HUMANITY<span className="brandAccent"> BRIDGE</span><small>CONNECTING HUMANITY. CHANGING LIVES.</small></span>
        </div>
        <div className="footerLinks">
          <a href="#causes">Causes</a>
          <a href="#ways">Ways to help</a>
          <a href="#trust">Trust</a>
          <a href="#about">About</a>
        </div>
        <p>© {new Date().getFullYear()} Humanity Bridge · A platform in development</p>
      </footer>
    </main>
  );
}
