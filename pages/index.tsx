import React, { useState } from 'react';
import Link from 'next/link';

interface Match {
  id: string;
  name: string;
  date: string;
  team1: string;
  team2: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export default function Home() {
  const [matches, setMatches] = useState<Match[]>([
    {
      id: '1',
      name: 'Match 1',
      date: '2026-07-25',
      team1: 'Tigers',
      team2: 'Lions',
      status: 'upcoming'
    },
    {
      id: '2',
      name: 'Match 2',
      date: '2026-07-26',
      team1: 'Eagles',
      team2: 'Hawks',
      status: 'upcoming'
    }
  ]);

  return (
    <div className="container">
      <header className="header">
        <h1>🏏 CricHeroes</h1>
        <p>Organize Matches & Track Player Scores</p>
        <div className="credits">Created by Vihaan Morakhia</div>
      </header>

      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/matches">Matches</Link>
        <Link href="/new-match">New Match</Link>
        <Link href="/players">Players</Link>
      </nav>

      <main className="main">
        <section className="hero">
          <h2>Welcome to CricHeroes</h2>
          <p>Organize cricket matches, track player performances, and celebrate the heroes!</p>
          <Link href="/new-match" className="btn btn-primary">
            Create Match
          </Link>
        </section>

        <section className="matches-section">
          <h3>Recent Matches</h3>
          <div className="matches-grid">
            {matches.map(match => (
              <Link href={`/match/${match.id}`} key={match.id}>
                <div className="match-card">
                  <h4>{match.name}</h4>
                  <div className="match-teams">
                    <div className="team">{match.team1}</div>
                    <div className="vs">VS</div>
                    <div className="team">{match.team2}</div>
                  </div>
                  <p className="match-date">{match.date}</p>
                  <span className={`status ${match.status}`}>{match.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 CricHeroes. Made with ❤️ by Vihaan Morakhia</p>
      </footer>
    </div>
  );
}