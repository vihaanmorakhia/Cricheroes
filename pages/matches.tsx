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

export default function Matches() {
  const [matches] = useState<Match[]>([
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
    },
    {
      id: '3',
      name: 'Match 3',
      date: '2026-07-24',
      team1: 'Panthers',
      team2: 'Wolves',
      status: 'completed'
    }
  ]);

  return (
    <div className="container">
      <header className="header">
        <h1>🏏 CricHeroes</h1>
        <div className="credits">Created by Vihaan Morakhia</div>
      </header>

      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/matches">Matches</Link>
        <Link href="/new-match">New Match</Link>
        <Link href="/players">Players</Link>
      </nav>

      <main className="main">
        <h2>All Matches</h2>
        <table className="matches-table">
          <thead>
            <tr>
              <th>Match Name</th>
              <th>Date</th>
              <th>Teams</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {matches.map(match => (
              <tr key={match.id}>
                <td>{match.name}</td>
                <td>{match.date}</td>
                <td>{match.team1} vs {match.team2}</td>
                <td><span className={`status ${match.status}`}>{match.status}</span></td>
                <td><Link href={`/match/${match.id}`}>View</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className="footer">
        <p>© 2026 CricHeroes. Made with ❤️ by Vihaan Morakhia</p>
      </footer>
    </div>
  );
}