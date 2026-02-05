import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Importing CSS for styles

const LandingPage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/game');
    };

    return (
        <div className="landing-screen">
            <div className="about-box">
                <h1>Cartoon Match</h1>
                <p>Find the matching pairs!</p>
                <p>Use "Show Cards" if you get stuck.</p>
                <button className="big-start-btn" onClick={handleStart}>START GAME</button>
                <div style={{ marginTop: '20px' }}>
                    <button
                        onClick={() => navigate('/profile')}
                        style={{
                            background: 'var(--glass-bg)',
                            border: '2px solid white',
                            padding: '10px 20px',
                            borderRadius: '20px',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            color: '#555',
                            fontWeight: 'bold'
                        }}
                    >
                        My Profile
                    </button>
                    {/* Feedback link removed to enforce post-game flow */}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
