import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Player {
  id: string;
  name: string;
  runs: number;
  balls: number;
  wickets: number;
}

export default function Match() {
  const router = useRouter();
  const { id } = router.query;
  
  const [players] = useState<Player[]>([
    { id: '1', name: 'Virat Kohli', runs: 85, balls: 52, wickets: 0 },
    { id: '2', name: 'Rohit Sharma', runs: 45, balls: 38, wickets: 0 },
    { id: '3', name: 'Jasprit Bumrah', runs: 0, balls: 0, wickets: 2 }
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
        <h2>Match {id} - Scorecard</h2>
        
        <div className="scorecard">
          <div className="match-info">
            <div className="team">Tigers vs Lions</div>
            <div className="status ongoing">Ongoing</div>
          </div>

          <h3>Batting</h3>
          <table className="scorecard-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Runs</th>
                <th>Balls</th>
                <th>Strike Rate</th>
              </tr>
            </thead>
            <tbody>
              {players.map(player => (
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>{player.runs}</td>
                  <td>{player.balls}</td>
                  <td>{player.balls > 0 ? ((player.runs / player.balls) * 100).toFixed(2) : '0.00'}%</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Bowling</h3>
          <table className="scorecard-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Wickets</th>
                <th>Runs Conceded</th>
              </tr>
            </thead>
            <tbody>
              {players.filter(p => p.wickets > 0).map(player => (
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>{player.wickets}</td>
                  <td>12</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 CricHeroes. Made with ❤️ by Vihaan Morakhia</p>
      </footer>
    </div>
  );
}