interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section style={{ 
      padding: '50px 20px', 
      textAlign: 'center', 
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #e0e0e0',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '10px', color: '#111' }}>{title}</h1>
      <p style={{ color: '#555', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
        {subtitle}
      </p>
    </section>
  );
}