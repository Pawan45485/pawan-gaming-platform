import React from 'react';

function TournamentCard({ tournament }) {
  return (
    <div className="tournament-card">
      <h3>{tournament.title}</h3>
      <p>Prize Pool: ${tournament.prizePool}</p>
      <p>Participants: {tournament.participants}</p>
      <button className="join-button">Join Tournament</button>
    </div>
  );
}

export default TournamentCard;
