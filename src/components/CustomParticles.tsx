"use client";

import { useRef, useEffect } from "react";

export default function CustomParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const PARTICLE_COUNT = 100;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
    }[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.random() - 0.5,
        vy: Math.random() - 0.5,
      });
    }

    // State untuk animasi opacity dari garis
    const connections: Record<string, number> = {}; // key: 'i-j', value: opacity

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#00ffff";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const nearMouse =
            Math.sqrt((p.x - mouse.x) ** 2 + (p.y - mouse.y) ** 2) < 120 ||
            Math.sqrt((q.x - mouse.x) ** 2 + (q.y - mouse.y) ** 2) < 120;

          const key = `${i}-${j}`;
          const maxDist = 100;

          if (dist < maxDist && nearMouse) {
            // Fade in
            connections[key] = Math.min((connections[key] || 0) + 0.05, 1);
          } else {
            // Fade out
            connections[key] = Math.max((connections[key] || 0) - 0.02, 0);
          }

          const alpha = connections[key];
          if (alpha > 0) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,255,255,${alpha})`;
            ctx.lineWidth = 1.5;

            // Glow
            ctx.shadowColor = `rgba(0,255,255,${alpha * 0.6})`;
            ctx.shadowBlur = 10 * alpha;

            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
