import React from 'react';
import LeaderboardTable from '../components/LeaderboardTable';

function Leaderboard() {
  const leaderboardData = [];

  return (
    <div className="leaderboard-page">
      <h1>Global Leaderboard</h1>
      <LeaderboardTable data={leaderboardData} />
    </div>
  );
}

export default Leaderboard;
