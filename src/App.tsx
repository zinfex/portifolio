import About from './components/About/About';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills';
import { useEffect, useState } from 'react'
import './responsive.css'
import Projects from './components/Projects/Projects';

interface Position {
  y: number;
  x: number;
}

const App: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX -5, y: e.clientY -55 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className='ball' style={{ transform: `translate(${position.x}px, ${position.y}px)` }}></div>
      <Header />
      <Hero />
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Projects />
    </div>
  )
}

export default App
