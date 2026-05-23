import React from 'react';
import ChatBox from '../components/ChatBox';
import '../styles/chat.css';

function Chat() {
  return (
    <div className="chat-page">
      <h1>Community Chat</h1>
      <ChatBox />
    </div>
  );
}

export default Chat;
