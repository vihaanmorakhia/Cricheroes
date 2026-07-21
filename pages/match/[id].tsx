import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Player {
  id: string;
  name: string;
  runs: number;
  balls: number;
  wickets: number;
  isOut: boolean;
}

interface Team {
  name: string;
  players: Player[];
  totalRuns: number;
  wicketsLost: number;
  byes: number;
  wides: number;
  noBalls: number;
}

export default function Match() {
  const router = useRouter();
  const { id } = router.query;
  
  const [team1, setTeam1] = useState<Team>({
    name: 'Tigers',
    players: [
      { id: '1', name: 'Virat Kohli', runs: 0, balls: 0, wickets: 0, isOut: false },
      { id: '2', name: 'Rohit Sharma', runs: 0, balls: 0, wickets: 0, isOut: false },
      { id: '3', name: 'Suresh Raina', runs: 0, balls: 0, wickets: 0, isOut: false },
    ],
    totalRuns: 0,
    wicketsLost: 0,
    byes: 0,
    wides: 0,
    noBalls: 0,
  });

  const [team2, setTeam2] = useState<Team>({
    name: 'Lions',
    players: [
      { id: '4', name: 'Jasprit Bumrah', runs: 0, balls: 0, wickets: 0, isOut: false },
      { id: '5', name: 'Yuzvendra Chahal', runs: 0, balls: 0, wickets: 0, isOut: false },
      { id: '6', name: 'Hardik Pandya', runs: 0, balls: 0, wickets: 0, isOut: false },
    ],
    totalRuns: 0,
    wicketsLost: 0,
    byes: 0,
    wides: 0,
    noBalls: 0,
  });

  const [currentBatter, setCurrentBatter] = useState('1');
  const [currentBowler, setCurrentBowler] = useState('4');
  const [innings, setInnings] = useState(1);

  const updatePlayerScore = (teamIndex: number, playerId: string, runs: number, balls: number = 1) => {
    const team = teamIndex === 1 ? team1 : team2;
    const updatedPlayers = team.players.map(p => {
      if (p.id === playerId && !p.isOut) {
        return { ...p, runs: p.runs + runs, balls: p.balls + balls };
      }
      return p;
    });

    const totalRuns = updatedPlayers.reduce((sum, p) => sum + p.runs, 0);
    const extraRuns = team.byes + team.wides + team.noBalls;
    const updatedTeam = { ...team, players: updatedPlayers, totalRuns: totalRuns + extraRuns };

    if (teamIndex === 1) {
      setTeam1(updatedTeam);
    } else {
      setTeam2(updatedTeam);
    }
  };

  const addBattingRuns = (teamIndex: number, playerId: string, runs: number) => {
    const team = teamIndex === 1 ? team1 : team2;
    const updatedPlayers = team.players.map(p => {
      if (p.id === playerId && !p.isOut) {
        return { ...p, runs: p.runs + runs, balls: p.balls + 1 };
      }
      return p;
    });

    const totalRuns = updatedPlayers.reduce((sum, p) => sum + p.runs, 0);
    const extraRuns = team.byes + team.wides + team.noBalls;
    const updatedTeam = { ...team, players: updatedPlayers, totalRuns: totalRuns + extraRuns };

    if (teamIndex === 1) {
      setTeam1(updatedTeam);
    } else {
      setTeam2(updatedTeam);
    }
  };

  const addByes = (teamIndex: number, runs: number) => {
    const team = teamIndex === 1 ? team1 : team2;
    const updatedTeam = {
      ...team,
      byes: team.byes + runs,
      totalRuns: team.totalRuns + runs,
    };

    if (teamIndex === 1) {
      setTeam1(updatedTeam);
    } else {
      setTeam2(updatedTeam);
    }
  };

  const addWides = (teamIndex: number) => {
    const team = teamIndex === 1 ? team1 : team2;
    const updatedTeam = {
      ...team,
      wides: team.wides + 1,
      totalRuns: team.totalRuns + 1,
    };

    if (teamIndex === 1) {
      setTeam1(updatedTeam);
    } else {
      setTeam2(updatedTeam);
    }
  };

  const addNoBalls = (teamIndex: number, runs: number = 1) => {
    const team = teamIndex === 1 ? team1 : team2;
    const updatedTeam = {
      ...team,
      noBalls: team.noBalls + 1,
      totalRuns: team.totalRuns + runs,
    };

    if (teamIndex === 1) {
      setTeam1(updatedTeam);
    } else {
      setTeam2(updatedTeam);
    }
  };

  const markPlayerOut = (teamIndex: number, playerId: string) => {
    const team = teamIndex === 1 ? team1 : team2;
    const updatedPlayers = team.players.map(p => {
      if (p.id === playerId) {
        return { ...p, isOut: true };
      }
      return p;
    });

    const updatedTeam = {
      ...team,
      players: updatedPlayers,
      wicketsLost: team.wicketsLost + 1,
    };

    if (teamIndex === 1) {
      setTeam1(updatedTeam);
    } else {
      setTeam2(updatedTeam);
    }
  };

  const updateBowlerWickets = (teamIndex: number, playerId: string) => {
    const team = teamIndex === 1 ? team1 : team2;
    const updatedPlayers = team.players.map(p => {
      if (p.id === playerId) {
        return { ...p, wickets: p.wickets + 1 };
      }
      return p;
    });

    const updatedTeam = { ...team, players: updatedPlayers };

    if (teamIndex === 1) {
      setTeam1(updatedTeam);
    } else {
      setTeam2(updatedTeam);
    }
  };

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
        <h2>Match {id} - Live Scorecard - Innings {innings}</h2>
        
        <div className="scorecard">
          <div className="match-info">
            <div className="team">{team1.name} vs {team2.name}</div>
            <div className="status ongoing">LIVE</div>
          </div>

          <div className="scores-row">
            <div className="score-box">
              <h3>{team1.name}</h3>
              <div className="score-display">
                <span className="runs">{team1.totalRuns}</span>
                <span className="wickets">/{team1.wicketsLost}</span>
              </div>
              <div className="extras">
                Byes: {team1.byes} | Wides: {team1.wides} | NoBalls: {team1.noBalls}
              </div>
            </div>
            <div className="score-box">
              <h3>{team2.name}</h3>
              <div className="score-display">
                <span className="runs">{team2.totalRuns}</span>
                <span className="wickets">/{team2.wicketsLost}</span>
              </div>
              <div className="extras">
                Byes: {team2.byes} | Wides: {team2.wides} | NoBalls: {team2.noBalls}
              </div>
            </div>
          </div>

          <div className="controls-section">
            <h3>Quick Scoring - {team1.name}</h3>
            <div className="button-group">
              <button onClick={() => updatePlayerScore(1, currentBatter, 0, 1)} className="btn btn-sm">
                DOT
              </button>
              <button onClick={() => updatePlayerScore(1, currentBatter, 1)} className="btn btn-sm btn-primary">
                1 RUN
              </button>
              <button onClick={() => updatePlayerScore(1, currentBatter, 2)} className="btn btn-sm btn-primary">
                2 RUNS
              </button>
              <button onClick={() => updatePlayerScore(1, currentBatter, 3)} className="btn btn-sm btn-primary">
                3 RUNS
              </button>
              <button onClick={() => updatePlayerScore(1, currentBatter, 4)} className="btn btn-sm btn-accent">
                4 RUNS
              </button>
              <button onClick={() => updatePlayerScore(1, currentBatter, 6)} className="btn btn-sm btn-accent">
                6 RUNS
              </button>
              <button onClick={() => markPlayerOut(1, currentBatter)} className="btn btn-sm btn-danger">
                OUT
              </button>
            </div>

            <h3 style={{ marginTop: '20px' }}>Extras & Special Cases</h3>
            <div className="button-group">
              <button onClick={() => addByes(1, 1)} className="btn btn-sm btn-info">
                1 BYE
              </button>
              <button onClick={() => addByes(1, 2)} className="btn btn-sm btn-info">
                2 BYES
              </button>
              <button onClick={() => addByes(1, 3)} className="btn btn-sm btn-info">
                3 BYES
              </button>
              <button onClick={() => addBattingRuns(1, currentBatter, 1)} className="btn btn-sm btn-success">
                1 (Batter runs on bye)
              </button>
              <button onClick={() => addBattingRuns(1, currentBatter, 2)} className="btn btn-sm btn-success">
                2 (Batter runs on bye)
              </button>
            </div>

            <div className="button-group">
              <button onClick={() => addWides(1)} className="btn btn-sm btn-warning">
                WIDE (+1)
              </button>
              <button onClick={() => addBattingRuns(1, currentBatter, 1)} className="btn btn-sm btn-success">
                1 (Batter on wide)
              </button>
              <button onClick={() => addBattingRuns(1, currentBatter, 2)} className="btn btn-sm btn-success">
                2 (Batter on wide)
              </button>
            </div>

            <div className="button-group">
              <button onClick={() => addNoBalls(1, 1)} className="btn btn-sm btn-warning">
                NO BALL (+1)
              </button>
              <button onClick={() => addNoBalls(1, 2)} className="btn btn-sm btn-warning">
                NO BALL (+2)
              </button>
              <button onClick={() => addBattingRuns(1, currentBatter, 1)} className="btn btn-sm btn-success">
                1 (Batter on no-ball)
              </button>
              <button onClick={() => addBattingRuns(1, currentBatter, 2)} className="btn btn-sm btn-success">
                2 (Batter on no-ball)
              </button>
            </div>
          </div>

          <h3>Batting - {team1.name}</h3>
          <table className="scorecard-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Runs</th>
                <th>Balls</th>
                <th>Strike Rate</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {team1.players.map(player => (
                <tr key={player.id} className={player.isOut ? 'out' : ''}>
                  <td>
                    <input
                      type="radio"
                      name="batter"
                      value={player.id}
                      checked={currentBatter === player.id}
                      onChange={() => setCurrentBatter(player.id)}
                    />
                    {player.name}
                  </td>
                  <td>{player.runs}</td>
                  <td>{player.balls}</td>
                  <td>{player.balls > 0 ? ((player.runs / player.balls) * 100).toFixed(2) : '0.00'}%</td>
                  <td>{player.isOut ? '❌ OUT' : '✓ Not Out'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Bowling - {team2.name}</h3>
          <table className="scorecard-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Wickets</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {team2.players.map(player => (
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>{player.wickets}</td>
                  <td>
                    <input
                      type="radio"
                      name="bowler"
                      value={player.id}
                      checked={currentBowler === player.id}
                      onChange={() => setCurrentBowler(player.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="button-group" style={{ marginTop: '20px' }}>
            <button onClick={() => updateBowlerWickets(2, currentBowler)} className="btn btn-primary">
              Add Wicket to Current Bowler
            </button>
            <button onClick={() => setInnings(innings === 1 ? 2 : 1)} className="btn btn-accent">
              Switch Innings
            </button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 CricHeroes. Made with ❤️ by Vihaan Morakhia</p>
      </footer>
    </div>
  );
}