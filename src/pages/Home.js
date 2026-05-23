import React from 'react';
import HeroBanner from '../components/HeroBanner';
import TournamentCard from '../components/TournamentCard';
import '../styles/home.css';

function Home() {
  return (
    <div className="home-page">
      <HeroBanner />
      <section className="tournaments-section">
        <h2>Featured Tournaments</h2>
        {/* Tournament cards will be mapped here */}
      </section>
    </div>
  );
}

export default Home;
