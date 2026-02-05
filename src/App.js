import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GamePage from './components/GamePage';
import ChildProfileForm from './components/ChildProfileForm';
import FeedbackForm from './components/FeedbackForm';
import './App.css';

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Requirement: Use API (fetch) to load data
  useEffect(() => {
    fetch('/characters.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load character data');
        }
        return response.json();
      })
      .then(data => {
        setCharacterData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading-screen">Loading Game Assets...</div>;
  if (error) return <div className="error-screen">Error: {error}</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<GamePage characterData={characterData} />} />
        <Route path="/profile" element={<ChildProfileForm />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;