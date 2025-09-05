import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  isDreamMode: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isDreamMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    if (isDreamMode) {
      // Dream mode animation
      const particles: any[] = [];
      const particleCount = 100;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.random() * 0.5 - 0.25,
          vy: Math.random() * 0.5 - 0.25,
          radius: Math.random() * 2 + 1,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 255, ${Math.random() * 0.5 + 0.2})`,
        });
      }

      const animateDream = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });
        animationFrameId = requestAnimationFrame(animateDream);
      };
      animateDream();
    } else {
      // Reality mode animation
      const stars: any[] = [];
      const starCount = 200;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          dAlpha: Math.random() * 0.02 - 0.01,
        });
      }

      const animateReality = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0a0a1a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        stars.forEach(s => {
          s.alpha += s.dAlpha;
          if (s.alpha < 0 || s.alpha > 1) s.dAlpha *= -1;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
          ctx.fill();
        });
        animationFrameId = requestAnimationFrame(animateReality);
      };
      animateReality();
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDreamMode]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};
