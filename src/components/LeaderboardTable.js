import React from 'react';

function LeaderboardTable({ data }) {
  return (
    <table className="leaderboard-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Player Name</th>
          <th>Score</th>
          <th>Wins</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
        {data.map((player, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{player.name}</td>
            <td>{player.score}</td>
            <td>{player.wins}</td>
            <td>{player.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LeaderboardTable;
