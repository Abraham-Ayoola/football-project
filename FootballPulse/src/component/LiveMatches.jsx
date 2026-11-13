import React from "react";

const Live = () => {
  const liveMatches = [
    {
      league: "Premier League",
      homeTeam: "Arsenal",
      awaayTeam: "Chelsea",
      homeScore: 2,
      awayScore: 1,
      time: "67",
      status: "LIVE",
    },
    {
      league: "La Liga",
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      homeScore: 1,
      awayScore: 1,
      time: "54'",
      status: "LIVE",
    },
    {
      league: "Serie A",
      homeTeam: "Inter Milan",
      awayTeam: "AC Milan",
      homeScore: 0,
      awayScore: 0,
      time: "32'",
      status: "LIVE",
    },
  ];

  const upcomingMatches = [
    {
      league: "Champions League",
      homeTeam: "Liverpool",
      awayTeam: "PSG",
      time: "20:00",
      date: "Today",
    },
    {
      league: "Premier League",
      homeTeam: "Manchester City",
      awayTeam: "Manchester United",
      time: "18:30",
      date: "Tomorrow",
    },
    {
      league: "Bundesliga",
      homeTeam: "Bayern Munich",
      awayTeam: "Dortmund",
      time: "19:45",
      date: "Tomorrow",
    },
  ];

  const finishedMatches = [
    {
      league: "Premier League",
      homeTeam: "Liverpool",
      awayTeam: "Newcastle",
      homeScore: 3,
      awayScore: 1,
    },
    {
      league: "La Liga",
      homeTeam: "Atletico Madrid",
      awayTeam: "Sevilla",
      homeScore: 2,
      awayScore: 0,
    },
  ];
  return (
    <div className="live-page">
      <section className="live-header">
        <div>
          <p className="small-title">FOOTBALL CENTER</p>
          <h1>Live Matches</h1>
          <p className="header-text">
            Follow football matches,scores and results in real time.
          </p>
        </div>

        <div className="live-indicator">
          <span></span>
          LIVE
        </div>
      </section>

      <section className="matches-section">
        <div className="section-heading">
          <h2>🔴 Live Now</h2>
          <span>{liveMatches.length} Matches</span>
        </div>

        <div className="matches-grid">
          {liveMatches.map((match, index) => (
            <div className="match-card live-card" key={index}>
              <div className="league-name">🏆 {match.league}</div>

              <div className="match-status">
                <span className="live-dot"></span>
                {match.status} · {match.time}
              </div>

              <div className="teams">
                <div className="team">
                  <div className="team-logo">⚽</div>
                  <h3>{match.homeTeam}</h3>
                </div>

                <div className="score">
                  <strong>{match.homeScore}</strong>
                  <span>-</span>
                  <strong>{match.awayScore}</strong>
                </div>

                <div className="team">
                  <div className="team-logo">⚽</div>
                  <h3>{match.awayTeam}</h3>
                </div>
              </div>

              <button className="match-button">View Match →</button>
            </div>
          ))}
        </div>
      </section>
      <section className="matches-section">
        <div className="section-heading">
          <h2>🕐 Upcoming Matches</h2>
          <span>Next Games</span>
        </div>

        <div className="matches-grid">

          {upcomingMatches.map((match, index) => (
            <div className="match-card" key={index}>

              <div className="league-name">
                🏆 {match.league}
              </div>

              <div className="upcoming-time">
                <span>{match.date}</span>
                <strong>{match.time}</strong>
              </div>

              <div className="teams">

                <div className="team">
                  <div className="team-logo">
                    ⚽
                  </div>
                  <h3>{match.homeTeam}</h3>
                </div>

                <div className="vs">
                  VS
                </div>

                <div className="team">
                  <div className="team-logo">
                    ⚽
                  </div>
                  <h3>{match.awayTeam}</h3>
                </div>

              </div>

              <button className="match-button">
                Match Details →
              </button>

            </div>
          ))}

        </div>
      </section>
       <section className="matches-section">
        <div className="section-heading">
          <h2>✅ Finished Matches</h2>
          <span>Recent Results</span>
        </div>

        <div className="matches-grid">

          {finishedMatches.map((match, index) => (
            <div className="match-card finished-card" key={index}>

              <div className="league-name">
                🏆 {match.league}
              </div>

              <div className="finished-label">
                FULL TIME
              </div>

              <div className="teams">

                <div className="team">
                  <div className="team-logo">
                    ⚽
                  </div>
                  <h3>{match.homeTeam}</h3>
                </div>

                <div className="score">
                  <strong>{match.homeScore}</strong>
                  <span>-</span>
                  <strong>{match.awayScore}</strong>
                </div>

                <div className="team">
                  <div className="team-logo">
                    ⚽
                  </div>
                  <h3>{match.awayTeam}</h3>
                </div>

              </div>

              <button className="match-button">
                View Result →
              </button>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Live;


