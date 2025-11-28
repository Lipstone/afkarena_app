'use client';

import { useState, useEffect } from 'react';

export default function ChallengersCoin() {
  const [currentCoins, setCurrentCoins] = useState<number>(0);
  const [production, setProduction] = useState<number>(290);
  const [target, setTarget] = useState<number>(150000);
  const [hours, setHours] = useState<number>(0);
  const [days, setDays] = useState<number>(0);

  useEffect(() => {
    if (production > 0) {
      const coinsNeeded = Math.max(0, target - currentCoins);
      const totalHours = coinsNeeded / production;
      const totalDays = Math.floor(totalHours / 24);
      const remainingHours = Math.floor(totalHours % 24);
      
      setHours(remainingHours);
      setDays(totalDays);
    }
  }, [production, target, currentCoins]);

  const coinsNeeded = Math.max(0, target - currentCoins);
  const totalHours = production > 0 ? coinsNeeded / production : 0;
  const progressPercentage = Math.min((currentCoins / target) * 100, 100);
  const dailyProduction = production * 24;

  return (
    <>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="/calculator">Challenger Coins</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      
      <main>
        <div className="container">
          <h1>Challenger Coins</h1>
          <p>Calculez le temps nécessaire pour atteindre votre objectif</p>

          <div style={{ marginTop: '40px', textAlign: 'left' }}>
            {/* Current Coins Input */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, fontSize: '0.95rem' }}>
                Coins actuels
              </label>
              <input
                type="number"
                value={currentCoins}
                onChange={(e) => setCurrentCoins(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#e5e7eb',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.borderColor = 'rgba(167, 139, 250, 0.5)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              />
            </div>

            {/* Production Input */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, fontSize: '0.95rem' }}>
                Production par heure (coins)
              </label>
              <input
                type="number"
                value={production}
                onChange={(e) => setProduction(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#e5e7eb',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.borderColor = 'rgba(167, 139, 250, 0.5)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              />
            </div>

            {/* Target Selection */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, fontSize: '0.95rem' }}>
                Objectif
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setTarget(150000)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: target === 150000 ? 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)' : 'rgba(255, 255, 255, 0.1)',
                    border: target === 150000 ? '1px solid rgba(167, 139, 250, 1)' : '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#e5e7eb',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  150 000
                </button>
                <button
                  onClick={() => setTarget(250000)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: target === 250000 ? 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)' : 'rgba(255, 255, 255, 0.1)',
                    border: target === 250000 ? '1px solid rgba(167, 139, 250, 1)' : '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#e5e7eb',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  250 000
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Progression vers l'objectif</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#a78bfa' }}>
                  {progressPercentage.toFixed(1)}%
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #a78bfa 0%, #8b5cf6 100%)',
                    width: `${progressPercentage}%`,
                    transition: 'width 0.5s ease'
                  }}
                />
              </div>
              <div style={{ marginTop: '8px', fontSize: '0.85rem', color: '#9ca3af' }}>
                {currentCoins.toLocaleString()} / {target.toLocaleString()} coins
              </div>
            </div>

            {/* Results */}
            <div style={{
              background: 'rgba(167, 139, 250, 0.1)',
              border: '1px solid rgba(167, 139, 250, 0.3)',
              borderRadius: '12px',
              padding: '25px',
              marginTop: '30px'
            }}>
              <h2 style={{
                fontSize: '1.3rem',
                marginBottom: '20px',
                color: '#e5e7eb',
                fontFamily: "'Space Grotesk', sans-serif"
              }}>
                Résultats
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  padding: '15px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '8px' }}>Jours</div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#a78bfa',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}>
                    {days}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  padding: '15px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '8px' }}>Heures</div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#a78bfa',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}>
                    {hours}
                  </div>
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                padding: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '8px' }}>Total</div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#d1d5db'
                }}>
                  {totalHours.toFixed(1)} heures
                </div>
              </div>

              {/* Additional Info */}
              <div style={{
                marginTop: '20px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                borderLeft: '3px solid rgba(167, 139, 250, 0.5)',
                fontSize: '0.9rem',
                color: '#9ca3af'
              }}>
                <p style={{ marginBottom: '8px' }}>
                  💡 Avec une production de <strong style={{ color: '#a78bfa' }}>{production}</strong> coins/heure ({dailyProduction.toLocaleString()} coins/jour)
                </p>
                <p style={{ marginBottom: '8px' }}>
                  📊 Il vous reste <strong style={{ color: '#a78bfa' }}>{coinsNeeded.toLocaleString()}</strong> coins à obtenir
                </p>
                <p>
                  ⏱️ Vous atteindrez <strong style={{ color: '#a78bfa' }}>{target.toLocaleString()}</strong> coins en <strong style={{ color: '#a78bfa' }}>{days} jours et {hours} heures</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
