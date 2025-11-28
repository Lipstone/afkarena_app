export default function About() {
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
          <h1>À propos</h1>
          <p>Découvrez notre application AFK Arena avec une expérience utilisateur moderne et élégante.</p>
          <p style={{ fontSize: '0.95rem', marginTop: '20px', color: '#9ca3af' }}>
            Construite avec Next.js 14 et déployée sur Vercel
          </p>
        </div>
      </main>
    </>
  );
}
