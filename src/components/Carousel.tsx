import { useState } from 'react';

interface CarouselItem {
  title: string;
  imageUrl: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!items || items.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = items[currentIndex];

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'sans-serif',
      border: '1px solid #111',
      padding: '16px',
      boxSizing: 'border-box'
    }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img 
          src={current.imageUrl} 
          alt={current.title} 
          style={{
            width: '100%',
            height: '320px',
            objectFit: 'cover',
            display: 'block'
          }} 
        />
      </div>

      <div style={{ marginTop: '16px', textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: '#111' }}>
          {current.title}
        </h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '0.95rem', color: '#555' }}>
          {current.description}
        </p>
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderTop: '1px solid #eee', 
        paddingTop: '12px' 
      }}>
        <button 
          onClick={handlePrev}
          style={{
            background: 'none',
            border: '1px solid #111',
            padding: '6px 16px',
            cursor: 'pointer',
            fontSize: '0.85rem'
          }}
        >
          ← Anterior
        </button>

        <span style={{ fontSize: '0.85rem', color: '#666' }}>
          {currentIndex + 1} / {items.length}
        </span>

        <button 
          onClick={handleNext}
          style={{
            background: 'none',
            border: '1px solid #111',
            padding: '6px 16px',
            cursor: 'pointer',
            fontSize: '0.85rem'
          }}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}