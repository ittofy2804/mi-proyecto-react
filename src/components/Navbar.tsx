interface NavbarProps {
  brandName: string;
}

export function Navbar({ brandName }: NavbarProps) {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '16px 30px', 
      borderBottom: '1px solid #e0e0e0',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{brandName}</h2>
      <nav style={{ display: 'flex', gap: '20px', fontSize: '0.9rem' }}>
        <a href="#inicio" style={{ textDecoration: 'none', color: '#111' }}>Inicio</a>
        <a href="#proyectos" style={{ textDecoration: 'none', color: '#666' }}>Proyectos</a>
        <a href="#contacto" style={{ textDecoration: 'none', color: '#666' }}>Contacto</a>
      </nav>
    </header>
  );
}