"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullName = "Farhan Raisprawira Hartama";
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsLoaded(true);
    
    setTypedText("");
    
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullName.slice(0, index));
      index++;
      if (index > fullName.length) clearInterval(interval);
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  // SSR fallback style vs client animated style
  const heroStyle = !isClient 
    ? { opacity: 1, transform: "translateY(0)" } 
    : {
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
      };

  return (
    <main style={{
      minHeight: "100vh",
      width: "100%",
      maxWidth: "100vw",
      color: "#ffffff",
      position: "relative",
    }}>
      {/* Hero Section */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 20px 80px",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={heroStyle}>
          {/* Greeting */}
          <p style={{
            color: "#06b6d4",
            fontSize: "1.1rem",
            fontWeight: 500,
            marginBottom: "20px",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}>
            Hello, I&apos;m
          </p>

          {/* Typing name */}
          <h1 style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "10px",
            minHeight: "1.2em",
          }}>
            <span style={{
              background: "linear-gradient(to right, #06b6d4, #3b82f6, #a855f7, #06b6d4)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientShift 4s ease infinite",
            }}>
              {typedText}
              <span style={{
                color: "#06b6d4",
                animation: "blink 1s infinite",
              }}>|</span>
            </span>
          </h1>

          <style>{`
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
          `}</style>

          {/* Subtitle */}
          <h2 style={{
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            fontWeight: 300,
            color: "#94a3b8",
            marginBottom: "30px",
            letterSpacing: "1px",
          }}>
            Full-stack Developer | Mobile & Web Engineer
          </h2>

          <p style={{
            color: "#64748b",
            fontSize: "1.1rem",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}>
            Building scalable applications with Flutter, React, and backend systems.
            Currently exploring compliance automation and learning analytics.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
            <a
              href="/projects"
              style={{
                padding: "14px 36px",
                background: "linear-gradient(to right, #06b6d4, #3b82f6)",
                color: "white",
                fontWeight: 600,
                borderRadius: "12px",
                textDecoration: "none",
                fontSize: "1rem",
                transition: "all 0.3s",
                boxShadow: "0 4px 20px rgba(6, 182, 212, 0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 40px rgba(6, 182, 212, 0.5)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(6, 182, 212, 0.3)";
              }}
            >
              View My Work →
            </a>
            <a
              href="/contact"
              style={{
                padding: "16px 32px",
                background: "transparent",
                color: "#e2e8f0",
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "12px",
                fontSize: "1.1rem",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "2px solid rgba(6, 182, 212, 0.5)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(6, 182, 212, 0.1)";
                e.currentTarget.style.borderColor = "#06b6d4";
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(6, 182, 212, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.5)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get In Touch
            </a>
            
            {/* Download CV Button */}
            <a
              href="/Farhan_Raisprawira_CV.pdf"
              target="_blank"
              style={{
                padding: "16px 32px",
                background: "transparent",
                color: "#e2e8f0",
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "12px",
                fontSize: "1.1rem",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "2px solid rgba(168, 85, 247, 0.5)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(168, 85, 247, 0.1)";
                e.currentTarget.style.borderColor = "#a855f7";
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(168, 85, 247, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.5)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>📄</span> Download CV
            </a>
          </div>

          {/* Scroll indicator */}
          <div style={{
            marginTop: "80px",
            animation: "bounce 2s infinite",
          }}>
            <div style={{
              width: "30px",
              height: "50px",
              border: "2px solid rgba(6, 182, 212, 0.5)",
              borderRadius: "15px",
              position: "relative",
              margin: "0 auto",
            }}>
              <div style={{
                width: "4px",
                height: "10px",
                background: "#06b6d4",
                borderRadius: "2px",
                position: "absolute",
                top: "8px",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "scrollDot 2s infinite",
              }}></div>
            </div>
          </div>

          <style>{`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
              40% { transform: translateY(-10px); }
              60% { transform: translateY(-5px); }
            }
            @keyframes scrollDot {
              0% { opacity: 1; top: 8px; }
              100% { opacity: 0; top: 30px; }
            }
          `}</style>
        </div>

        {/* Tech Stack Pills */}
        <div style={{
          marginTop: "60px",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
          maxWidth: "700px",
        }}>
          {[
            { name: "Flutter", icon: "📱", color: "#02569B" },
            { name: "Dart", icon: "🎯", color: "#00B4AB" },
            { name: "React", icon: "⚛️", color: "#61DAFB" },
            { name: "Next.js", icon: "▲", color: "#FFFFFF" },
            { name: "Go", icon: "🐹", color: "#00ADD8" },
            { name: "Supabase", icon: "🟣", color: "#3ECF8E" },
            { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
            { name: "TypeScript", icon: "📘", color: "#3178C6" },
          ].map((tech) => (
            <div
              key={tech.name}
              style={{
                padding: "10px 20px",
                background: "rgba(30, 41, 59, 0.6)",
                border: "1px solid rgba(100, 116, 139, 0.3)",
                borderRadius: "25px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#cbd5e1",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "all 0.3s",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                e.currentTarget.style.borderColor = tech.color;
                e.currentTarget.style.boxShadow = `0 4px 20px ${tech.color}33`;
                e.currentTarget.style.color = tech.color;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.3)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.color = "#cbd5e1";
              }}
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
