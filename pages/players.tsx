import React, { useState } from 'react';
import Link from 'next/link';

interface Player {
  id: string;
  name: string;
  team: string;
  runs: number;
  wickets: number;
  avg: number;
}

export default function Players() {
  const [players] = useState<Player[]>([
    { id: '1', name: 'Virat Kohli', team: 'Tigers', runs: 250, wickets: 0, avg: 62.5 },
    { id: '2', name: 'Rohit Sharma', team: 'Tigers', runs: 180, wickets: 0, avg: 45.0 },
    { id: '3', name: 'Jasprit Bumrah', team: 'Lions', runs: 45, wickets: 8, avg: 5.6 },
    { id: '4', name: 'Yuzvendra Chahal', team: 'Lions', runs: 30, wickets: 6, avg: 5.0 },
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
        <h2>Players Stats</h2>
        <table className="players-table">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Team</th>
              <th>Runs</th>
              <th>Wickets</th>
              <th>Average</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.team}</td>
                <td>{player.runs}</td>
                <td>{player.wickets}</td>
                <td>{player.avg}</td>
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