import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  type: 'droplet' | 'sparkle' | 'bottle';
  x: number;
  y: number;
  size: number;
  delay: number;
}

export const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = [];
      
      // Generate floating droplets
      for (let i = 0; i < 8; i++) {
        newElements.push({
          id: i,
          type: 'droplet',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        });
      }
      
      // Generate sparkles
      for (let i = 8; i < 15; i++) {
        newElements.push({
          id: i,
          type: 'sparkle',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          delay: Math.random() * 3,
        });
      }
      
      setElements(newElements);
    };

    generateElements();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${
            element.type === 'droplet' 
              ? 'animate-float bg-gradient-to-r from-primary to-accent rounded-full opacity-30' 
              : element.type === 'sparkle'
              ? 'animate-sparkle bg-primary-glow rounded-full opacity-40'
              : 'animate-float-reverse'
          }`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
          }}
        />
      ))}
      
      {/* Ambient golden glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl opacity-10 animate-drift" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent rounded-full blur-2xl opacity-15 animate-float" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary rounded-full blur-xl opacity-20 animate-sparkle" />
    </div>
  );
};