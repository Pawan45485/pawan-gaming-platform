import React from 'react';
import TournamentCard from '../components/TournamentCard';
import '../styles/tournament.css';

function Tournament() {
  const tournaments = [];

  return (
    <div className="tournament-page">
      <h1>Active Tournaments</h1>
      <div className="tournament-grid">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
}

export default Tournament;
