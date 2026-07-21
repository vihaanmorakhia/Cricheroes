import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NewMatch() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    team1: '',
    team2: '',
    overs: '20'
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Match "${formData.name}" created successfully!`);
    router.push('/');
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
        <h2>Create New Match</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Match Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Final Match"
              required
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Team 1</label>
              <input
                type="text"
                name="team1"
                value={formData.team1}
                onChange={handleChange}
                placeholder="Team name"
                required
              />
            </div>

            <div className="form-group">
              <label>Team 2</label>
              <input
                type="text"
                name="team2"
                value={formData.team2}
                onChange={handleChange}
                placeholder="Team name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Overs</label>
            <select name="overs" value={formData.overs} onChange={handleChange}>
              <option value="5">5 Overs</option>
              <option value="10">10 Overs</option>
              <option value="20">20 Overs (T20)</option>
              <option value="50">50 Overs (ODI)</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Create Match</button>
        </form>
      </main>

      <footer className="footer">
        <p>© 2026 CricHeroes. Made with ❤️ by Vihaan Morakhia</p>
      </footer>
    </div>
  );
}