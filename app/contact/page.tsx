export default function Contact() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      
      <main>
        <div className="container">
          <h1>Nous contacter</h1>
          <p>Vous avez des questions ? N'hésitez pas à nous écrire.</p>
          
          <form style={{ marginTop: '30px', textAlign: 'left' }}>
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="text" 
                placeholder="Votre nom"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#e5e7eb',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="email" 
                placeholder="Votre email"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#e5e7eb',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <textarea 
                placeholder="Votre message"
                rows={5}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#e5e7eb',
                  fontSize: '1rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <button type="submit" className="btn" style={{ width: '100%' }}>
              Envoyer
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
