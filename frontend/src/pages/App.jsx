import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import '../styles/App.css';

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
