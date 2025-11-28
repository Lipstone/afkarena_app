export default function Home() {
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
          <h1>Bienvenue</h1>
          <p>Application Next.js avec design clearglass moderne</p>
          <p style={{ fontSize: '0.95rem', marginTop: '20px', color: '#9ca3af' }}>
            Prête pour Vercel avec style épuré et dégradé violet-noir
          </p>
          <button className="btn">Commencer</button>
        </div>
      </main>
    </>
  );
}
