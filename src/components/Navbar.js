import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Pawan Gaming</h1>
        <ul className="nav-menu">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/tournament">Tournament</a></li>
          <li className="nav-item"><a href="/leaderboard">Leaderboard</a></li>
          <li className="nav-item"><a href="/blog">Blog</a></li>
          <li className="nav-item"><a href="/news">News</a></li>
          <li className="nav-item"><a href="/chat">Chat</a></li>
          <li className="nav-item"><a href="/download">Download</a></li>
          <li className="nav-item"><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
