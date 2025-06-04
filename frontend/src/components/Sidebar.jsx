import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo">Notta Clone</h1>
      <nav>
        <ul>
          <li>Transcribe</li>
          <li>History</li>
          <li>Chat</li>
        </ul>
      </nav>
    </aside>
  );
}
