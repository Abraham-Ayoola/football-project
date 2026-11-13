import { Link } from "react-router-dom";

function Home() {
  const liveMatches = [
    {
      league: "Premier League",
      home: "Arsenal",
      away: "Chelsea",
      homeScore: 2,
      awayScore: 1,
      minute: "72'",
    },
    {
      league: "La Liga",
      home: "Barcelona",
      away: "Real Madrid",
      homeScore: 1,
      awayScore: 1,
      minute: "64'",
    },
    {
      league: "Champions League",
      home: "Man City",
      away: "PSG",
      homeScore: 0,
      awayScore: 0,
      minute: "51'",
    },
  ];

  const fixtures = [
    {
      date: "Today",
      time: "15:00",
      home: "Liverpool",
      away: "Tottenham",
    },
    {
      date: "Today",
      time: "17:30",
      home: "Man United",
      away: "Newcastle",
    },
    {
      date: "Tomorrow",
      time: "20:00",
      home: "Bayern Munich",
      away: "Dortmund",
    },
  ];

  const competitions = [
    {
      icon: "🏴",
      name: "Premier League",
      country: "England",
    },
    {
      icon: "🇪🇸",
      name: "La Liga",
      country: "Spain",
    },
    {
      icon: "🇮🇹",
      name: "Serie A",
      country: "Italy",
    },
    {
      icon: "🇩🇪",
      name: "Bundesliga",
      country: "Germany",
    },
    {
      icon: "🏆",
      name: "Champions League",
      country: "Europe",
    },
  ];

  const teams = [
    {
      logo: "🔴",
      name: "Arsenal",
      country: "England",
    },
    {
      logo: "🔵",
      name: "Chelsea",
      country: "England",
    },
    {
      logo: "🔴",
      name: "Liverpool",
      country: "England",
    },
    {
      logo: "🔵",
      name: "Barcelona",
      country: "Spain",
    },
    {
      logo: "⚪",
      name: "Real Madrid",
      country: "Spain",
    },
    {
      logo: "🔷",
      name: "Man City",
      country: "England",
    },
  ];

  const news = [
    {
      category: "TRANSFER",
      title: "Big clubs prepare for another exciting transfer window",
      time: "2 hours ago",
    },
    {
      category: "MATCHDAY",
      title: "Everything you need to know before today's biggest matches",
      time: "4 hours ago",
    },
    {
      category: "FOOTBALL",
      title: "Young talents making their mark on world football",
      time: "6 hours ago",
    },
  ];

  return (
    <>
      <header className="navbar">
        <div className="logo"> 
          <span className="logo-ball">⚽</span>
          <span>
            Foot <span className="logo-highlight">Pulse</span>
          </span>
        </div>
        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <Link to="/live-matches">Live Matches</Link>
          <a href="#fixtures">Fixtures</a>
          <a href="#competitions">Competitions</a>
          <a href="#news">News</a>
        </nav>
        <div className="nav-right">
          <button className="search-btn">{/* <SearchIcon /> */}</button>
          <button className="login-btn">Login</button>
          <button className="menu-btn">≡</button>
        </div>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="live-badge">
              <span className="live-dot"></span>
              LIVE FOOTBALL
            </div>
            <h1>
              Every Match.
              <br />
              <span>Every Moment.</span>
            </h1>

            <p>
              Follow live football scores,fixtures,results, competitions,teams
              and the latest football news all in one place.
            </p>
            <div className="hero-butons">
              <button className="primary-btn">
                Explore Live Matches
                <span>→</span>
              </button>
              <button className="secondary-btn">View Fixtures</button>
            </div>
            <div className="hero-stats">
              <div>
                <strong>500+</strong>
                <span>Matches</span>
              </div>
              <div>
                <strong>50+</strong>
                <span>Competitions</span>
              </div>
              <div>
                <strong>1000+</strong>
                <span>Teams</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section matches-section" id="matches">
          <div className="section-heading">
            <div>
              <span className="section-label">LIVE NOW</span>
              <h2>Live Matches</h2>
              <p>Follow the action as it happens</p>
            </div>

            <button className="view-all-btn">View all matches→</button>
          </div>

          <div className="match-grid">
            {liveMatches.map((match, index) => (
              <div className="match-card" key={index}>
                <div className="match-top">
                  <span className="live-status">
                    <span className="live-dot"></span>
                    LIVE
                  </span>
                  <span className="league">{match.league}</span>
                </div>
                <div className="match-teams">
                  <div className="team-row">
                    <div className="team-name">
                      <span className="team-icon">⚽</span>
                      {match.home}
                    </div>
                    <strong>{match.homeScore}</strong>
                  </div>
                  <div className="team-row">
                    <div className="team-name">
                      <span className="team-icon">⚽</span>
                      {match.away}
                    </div>
                    <strong>{match.awayScore}</strong>
                  </div>
                </div>
                <div className="match-bottom">
                  <span>Match in progress</span>
                  <strong>{match.minute}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section fitures-section" id="fixtures">
          <div className="section-heading">
            <div>
              <span className="section-label">UPCOMING</span>
              <h2>Today's Fixtures</h2>
              <p>Never miss the next big game.</p>
            </div>
            <button className="view-all-btn">Full fixtures→</button>
          </div>
          <div className="fixture-list">
            {fixtures.map((fixture, index) => (
              <div className="fixture-card" key={index}>
                <div className="fixture-date">
                  <strong>{fixture.date}</strong>
                  <span>{fixture.time}</span>
                </div>
                <div className="fixture-team">
                  <span>⚽</span>
                  {fixture.home}
                </div>
                <div className="vs">VS</div>
                <div className="fixture-team">
                  <span>⚽</span>
                  {fixture.away}
                </div>
                <button className="fixture-btn">Match details→</button>
              </div>
            ))}
          </div>
        </section>
        <section className="section competitions-section" id="competitions">
          <div className="section-heading">
            <div>
              <span className="section-label">WORLD FOOTBALL</span>

              <h2>Popular Competitions</h2>

              <p>Follow the biggest leagues and tournaments.</p>
            </div>

            <button className="view-all-btn">All competitions →</button>
          </div>

          <div className="competition-grid">
            {competitions.map((competition, index) => (
              <div className="competition-card" key={index}>
                <div className="competition-icon">{competition.icon}</div>

                <div>
                  <h3>{competition.name}</h3>

                  <p>{competition.country}</p>
                </div>

                <span className="card-arrow">→</span>
              </div>
            ))}
          </div>
        </section>
        <section className="section teams-section">
          <div className="section-heading">
            <div>
              <span className="section-label">CLUB FOOTBALL</span>

              <h2>Top Teams</h2>

              <p>Explore teams, players and statistics.</p>
            </div>

            <button className="view-all-btn">View all teams →</button>
          </div>

          <div className="team-grid">
            {teams.map((team, index) => (
              <div className="top-team-card" key={index}>
                <div className="big-team-logo">{team.logo}</div>

                <h3>{team.name}</h3>

                <p>{team.country}</p>

                <button>View team →</button>
              </div>
            ))}
          </div>
        </section>
        <section className="section news-section" id="news">
          <div className="section-heading">
            <div>
              <span className="section-label">FOOTBALL NEWS</span>

              <h2>Latest Stories</h2>

              <p>Stay updated with what is happening in football.</p>
            </div>

            <button className="view-all-btn">All news →</button>
          </div>

          <div className="news-grid">
            {news.map((article, index) => (
              <article className="news-card" key={index}>
                <div className={`news-image news-image-${index}`}>
                  <span>{article.category}</span>
                </div>

                <div className="news-content">
                  <small>{article.time}</small>

                  <h3>{article.title}</h3>

                  <button>Read story →</button>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="statistics-section">
          <div className="statistics-content">
            <div>
              <span className="section-label">FOOTBALL AT A GLANCE</span>

              <h2>
                The numbers behind
                <br />
                the beautiful game.
              </h2>

              <p>
                FootPulse brings football information together so you can
                quickly understand what is happening across the football world.
              </p>
            </div>

            <div className="statistics-grid">
              <div className="stat-card">
                <strong>500+</strong>
                <span>Matches tracked</span>
              </div>

              <div className="stat-card">
                <strong>1K+</strong>
                <span>Teams</span>
              </div>

              <div className="stat-card">
                <strong>50+</strong>
                <span>Competitions</span>
              </div>

              <div className="stat-card">
                <strong>24/7</strong>
                <span>Football updates</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section why-section">
          <div className="why-heading">
            <span className="section-label">WHY FOOTPULSE</span>

            <h2>
              Everything football.
              <br />
              One powerful platform.
            </h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">⚡</div>

              <h3>Fast Updates</h3>

              <p>Get football scores and match updates without wasting time.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">📊</div>

              <h3>Detailed Statistics</h3>

              <p>
                Explore match statistics, team performance and player
                information.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🌍</div>

              <h3>World Football</h3>

              <p>
                Follow football from leagues and competitions around the world.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🔔</div>

              <h3>Never Miss a Match</h3>

              <p>
                Keep track of important games, fixtures and football events.
              </p>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="cta-content">
            <span className="section-label">YOUR FOOTBALL WORLD</span>

            <h2>
              Never miss a moment
              <br />
              of the game.
            </h2>

            <p>
              Stay connected with the matches, teams and football stories you
              care about.
            </p>

            <button className="primary-btn">
              Explore FootPulse
              <span>→</span>
            </button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-ball">⚽</span>
              Foot<span className="logo-highlight">Pulse</span>
            </div>

            <p>
              Football information.
              <br />
              One powerful platform.
            </p>
          </div>

          <div className="footer-column">
            <h4>Platform</h4>

            <a href="#matches">Live Matches</a>
            <a href="#fixtures">Fixtures</a>
            <a href="#competitions">Competitions</a>
            <a href="#news">News</a>
          </div>

          <div className="footer-column">
            <h4>Football</h4>

            <a href="#home">Teams</a>
            <a href="#home">Players</a>
            <a href="#home">Statistics</a>
            <a href="#home">Results</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>

            <a href="#home">About</a>
            <a href="#home">Contact</a>
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 FootPulse. All rights reserved.</p>

          <p>Built for football lovers ⚽</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
