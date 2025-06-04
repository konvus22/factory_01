import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <main className="dashboard">
      <section className="card">Upload and transcribe audio here.</section>
      <section className="card">History of transcripts.</section>
      <section className="card">Chat with AI.</section>
    </main>
  );
}
