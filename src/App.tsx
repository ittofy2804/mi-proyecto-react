import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Carousel } from './components/Carousel';
import { Card } from './components/Card';

function App() {
  const slides = [
    {
      title: "Arquitectura",
      description: "Una casa moderna",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Paisaje",
      description: "Un lindo paisaje con una casa antigua ",
      imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Interiror",
      description: "Una decoracion linda de una hogar",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh' }}>
      <Navbar brandName="Juan Sierra op3" />

      <Hero 
        title="Trabajos opta 3" 
        subtitle="Todo esta realizado con componentes las card, la navbar, el carusel todo esta con componentes sacados de react"
      />

      <main style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '1.4rem' }}>
            Carusel de fotos
          </h2>
          <Carousel items={slides} />
        </section>

        <section>
          <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '1.4rem' }}>
            Todos los Proyectos
          </h2>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Card 
              title="Arquitectura"
              imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
              buttonText="Botonn"
            />
            <Card 
              title="Paisaje"
              imageUrl="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80"
              buttonText="Botonn"
            />
            <Card 
              title="Interiror"
              imageUrl="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
              buttonText="Botonn"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;