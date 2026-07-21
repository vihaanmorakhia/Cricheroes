# 🏏 CricHeroes

A modern cricket match organization and player scoring platform built with Next.js.

## Features

- ✨ **Organize Matches** - Create and manage cricket matches with team details
- 📊 **Player Scoring** - Track player performances with runs, wickets, and statistics
- 📈 **Statistics** - View player stats, averages, and performance metrics
- 🏏 **Match Scorecard** - Real-time scorecards with batting and bowling details
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Beautiful, intuitive user interface

## Tech Stack

- **Next.js** - React framework for production
- **React** - UI library
- **TypeScript** - Type safety
- **CSS3** - Styling

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/vihaanmorakhia/Cricheroes.git
cd Cricheroes

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Create Match** - Click "New Match" to organize a new cricket match
2. **Track Scores** - Add player scores and statistics during the match
3. **View Stats** - Check player performance and match results
4. **Share Results** - View and share match scorecards

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Project Structure

```
├── pages/
│   ├── index.tsx           # Home page
│   ├── matches.tsx         # Matches list
│   ├── new-match.tsx       # Create new match
│   ├── players.tsx         # Players statistics
│   └── match/[id].tsx      # Match scorecard
├── styles/
│   └── globals.css         # Global styles
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## Credits

Created by **Vihaan Morakhia**

## License

MIT License - feel free to use this project for your own purposes

## Support

For issues and feature requests, please create an issue on GitHub.

---

⭐ If you found this helpful, please consider giving it a star!
