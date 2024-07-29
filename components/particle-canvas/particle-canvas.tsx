'use client';
import { useRef, useEffect } from 'react';
import { ParticleOptions, Particle } from '@/types';

interface ParticleCanvasProps {
  options: ParticleOptions;
}

const ParticleCanvas = ({ options }: ParticleCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const { width, height } = canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create a single particle
    const createParticle = (x: number, y: number, dx: number, dy: number): Particle => ({
      x,
      y,
      dx,
      dy,
      radius: Math.random() * 1 + 1,
      color: '#F0F0F0',
    });

    // Initialize particles
    const initializeParticles = () => {
      for (let i = 0; i < options.number; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const dx = (Math.random() - 0.5) * options.speed;
        const dy = (Math.random() - 0.5) * options.speed;
        particles.push(createParticle(x, y, dx, dy));
      }
    };

    initializeParticles();

    // Update particle properties
    const updateParticles = () => {
      particles.forEach(particle => {
        if (particle.x + particle.radius > width || particle.x - particle.radius < 0) {
          particle.dx = -particle.dx;
        }
        if (particle.y + particle.radius > height || particle.y - particle.radius < 0) {
          particle.dy = -particle.dy;
        }
        particle.x += particle.dx;
        particle.y += particle.dy;
      });
    };

    // Draw particles on the canvas
    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };

    // Animation loop
    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup
      particles.length = 0;
    };
  }, [options]);

  return <canvas ref={canvasRef} className='fixed z-0 top-[120px]' />;
};

export default ParticleCanvas;
