/* eslint-disable react-hooks/exhaustive-deps, react-hooks/refs */
"use client";

import { useState, useEffect, useRef } from "react";

interface Particle {
  id: number;
  width: number;
  height: number;
  bgR: number;
  bgG: number;
  bgB: number;
  opacity: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
}

// Generate particles outside React (pure function)
function generateParticles(): Particle[] {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    width: Math.random() * 4 + 2,
    height: Math.random() * 4 + 2,
    bgR: Math.floor(Math.random() * 50 + 6),
    bgG: Math.floor(Math.random() * 50 + 182),
    bgB: Math.floor(Math.random() * 50 + 212),
    opacity: Math.random() * 0.3 + 0.1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));
}

// Safe window access
const getInnerHeight = () => typeof window !== "undefined" ? window.innerHeight : 0;
const getInnerWidth = () => typeof window !== "undefined" ? window.innerWidth : 0;

export default function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    // Generate partikel HANYA di sisi client untuk menghindari hydration error
    particlesRef.current = generateParticles();
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cegah render elemen asinkron di server
  if (!isMounted) return null;

  return (
    <>
      {/* Animated gradient orbs */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
          top: `${mousePos.y * 0.1}px`,
          left: `${mousePos.x * 0.1}px`,
          transition: "all 0.3s ease-out",
        }}></div>
        <div style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          top: `${getInnerHeight() - mousePos.y * 0.15}px`,
          left: `${getInnerWidth() - mousePos.x * 0.15}px`,
          transition: "all 0.5s ease-out",
        }}></div>
        <div style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "pulse 4s ease-in-out infinite",
        }}></div>
      </div>

      {/* Floating particles */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}>
        {particlesRef.current.map((particle) => (
          <div
            key={particle.id}
            style={{
              position: "absolute",
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              borderRadius: "50%",
              background: `rgba(${particle.bgR}, ${particle.bgG}, ${particle.bgB}, ${particle.opacity})`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animation: `float ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
}
