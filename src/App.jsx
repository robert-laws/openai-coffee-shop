import { drinks, hero, rituals, stats, story } from './siteContent';

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header reveal">
        <a className="brand" href="#top" aria-label="Luma Coffee home">
          <span className="brand-mark">LC</span>
          <span className="brand-text">
            <strong>Luma Coffee</strong>
            <span>Bright craft. Slow moments.</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#drinks">Drinks</a>
          <a href="#ritual">Experience</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero reveal">
          <div className="hero-copy">
            <p className="eyebrow">Sunlit coffee, deliberate detail</p>
            <h1>Craft coffee built for the kind of morning you stay in.</h1>
            <p className="hero-text">
              Luma Coffee pairs bright seasonal drinks with a room made for
              easy conversation. The menu leans precise, the space stays warm,
              and every cup is served with a calm, modern touch.
            </p>

            <div className="hero-actions">
              <a className="button button-solid" href="#drinks">
                Explore the drinks
              </a>
              <a className="button button-ghost" href="#visit">
                Plan a slow stop
              </a>
            </div>

            <div className="stats-grid" aria-label="Luma Coffee highlights">
              {stats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-media frame">
            <img src={hero.image} alt={hero.alt} />
            <div className="media-chip">
              <span>Daylight room</span>
              <strong>Low-focus lifestyle photography</strong>
            </div>
          </div>
        </section>

        <section className="section-heading reveal" id="drinks">
          <p className="eyebrow">Featured pours</p>
          <div className="section-heading-row">
            <h2>Three drinks that carry the room.</h2>
            <p>
              Each cup is built to feel clean, bright, and tactile. Nothing
              flashy for the sake of it, just careful texture and thoughtful
              finish.
            </p>
          </div>
        </section>

        <section className="drink-grid">
          {drinks.map((drink, index) => (
            <article
              key={drink.name}
              className="drink-card reveal"
              style={{ animationDelay: `${120 + index * 90}ms` }}
            >
              <div className="drink-image frame">
                <img src={drink.image} alt={drink.alt} loading="lazy" />
              </div>
              <div className="drink-copy">
                <p className="drink-label">Signature drink</p>
                <h3>{drink.name}</h3>
                <p className="drink-profile">{drink.profile}</p>
                <p>{drink.detail}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="story-section reveal" id="ritual">
          <div className="story-copy">
            <p className="eyebrow">Cafe rhythm</p>
            <h2>People come for the coffee and stay for the pace.</h2>
            <p>
              The room is intentionally bright, the service is unhurried, and
              the bar stays open enough that you can follow the craft without
              turning the experience into theater.
            </p>

            <ul className="ritual-list">
              {rituals.map((ritual) => (
                <li key={ritual}>{ritual}</li>
              ))}
            </ul>
          </div>

          <div className="story-media frame">
            <img src={story.image} alt={story.alt} loading="lazy" />
          </div>
        </section>

        <section className="visit-panel reveal" id="visit">
          <div>
            <p className="eyebrow">Visit Luma</p>
            <h2>Come in for a bright first cup or linger through the second.</h2>
          </div>
          <div className="visit-copy">
            <p>
              Open daily from 7am. Walk in for a quick espresso, settle in with
              a pour-over, or bring a friend and let the room do the rest.
            </p>
            <a className="button button-solid" href="#top">
              Back to the top
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
