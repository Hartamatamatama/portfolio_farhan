"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";

// Helper function untuk ASMR smooth style transition
const getScrollStyle = (hasHydrated: boolean, isVisible: boolean, delay: string) => {
  if (!hasHydrated) return { opacity: 1, transform: "translateY(0)" }; // SSR fallback
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}`,
  };
};

export default function Experience() {
  const { ref: titleRef, isVisible: titleVisible, hasHydrated: titleHydrated } = useInView();
  const { ref: timelineRef, isVisible: timelineVisible, hasHydrated: timelineHydrated } = useInView();

  return (
    <main style={{
      minHeight: "100vh",
      paddingTop: "120px",
      paddingBottom: "80px",
      color: "#cbd5e1",
      position: "relative",
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
        {/* Title */}
        <div ref={titleRef} style={{
          marginBottom: "60px",
          ...getScrollStyle(titleHydrated, titleVisible, "0s")
        }}>
          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
            fontWeight: 900,
            marginBottom: "20px",
            backgroundImage: "linear-gradient(to right, #06b6d4, #3b82f6, #a855f7)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientShift 4s ease infinite",
          }}>
            Experience & Journey
          </h1>
          <div style={{
            width: titleVisible ? "80px" : "0px",
            height: "4px",
            background: "linear-gradient(to right, #06b6d4, #3b82f6)",
            borderRadius: "2px",
            transition: "width 0.8s ease 0.3s",
          }}></div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          ...getScrollStyle(timelineHydrated, timelineVisible, "0.1s")
        }}>
          {[
            {
              title: "Documentation & Compliance Engineer",
              company: "KAMINDO Consulting",
              period: "2024 - Present",
              icon: "📋",
              accent: "#06b6d4",
              description: "Specializing in ISO compliance documentation and process automation. Designing documentation systems for ISO 27001, ISO 37001, and ISO 9001 across multiple clients.",
              responsibilities: ["Document Design & Validation", "Compliance Automation", "Process Documentation", "Quality Assurance"],
              tags: ["ISO 27001", "ISO 37001", "ISO 9001", "Documentation"],
            },
            {
              title: "Full-Stack Developer",
              company: "Freelance & Personal Projects",
              period: "2023 - Present",
              icon: "🚀",
              accent: "#3b82f6",
              description: "Building end-to-end applications with focus on user experience and scalability. Developed Smart Learning Tracker, thesis analytics dashboard, and various web/mobile projects.",
              responsibilities: ["Flutter & Dart", "React & Next.js", "Go Backend", "Database Design", "API Development", "State Management"],
              tags: ["Flutter", "React", "Go", "PostgreSQL", "Next.js"],
            },
            {
              title: "Student - Teknik Informatika",
              company: "GI (Global Institute)",
              period: "2023 - 2027 (Expected)",
              icon: "🎓",
              accent: "#a855f7",
              description: "Pursuing degree with focus on software engineering, learning analytics, and enterprise systems. Currently developing thesis on productivity tracking and learning management.",
              responsibilities: ["Software Architecture", "Learning Analytics", "Database Systems", "API Design"],
              tags: ["GPA: 3.6+", "Jakarta, Indonesia"],
            },
          ].map((exp, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(30, 41, 59, 0.3)",
                border: "1px solid rgba(100, 116, 139, 0.2)",
                borderRadius: "20px",
                padding: "32px",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
                borderLeft: `4px solid ${exp.accent}`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = exp.accent;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 20px 40px ${exp.accent}15`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: `linear-gradient(to right, ${exp.accent}, transparent)`,
                opacity: 0,
                transition: "opacity 0.3s",
              }}
                onMouseOver={(e) => { e.currentTarget.style.opacity = "1"; }}
                onMouseOut={(e) => { e.currentTarget.style.opacity = "0"; }}
              ></div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <span style={{ fontSize: "2.5rem" }}>{exp.icon}</span>
                <div>
                  <h2 style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#e2e8f0",
                    marginBottom: "4px",
                  }}>
                    {exp.title}
                  </h2>
                  <p style={{ color: exp.accent, fontWeight: 500, fontSize: "1rem" }}>
                    {exp.company}
                  </p>
                  <p style={{ color: "#64748b", fontSize: "0.85rem" }}>
                    {exp.period}
                  </p>
                </div>
              </div>

              <p style={{ color: "#cbd5e1", lineHeight: 1.7, marginBottom: "20px", fontSize: "1rem" }}>
                {exp.description}
              </p>

              <div>
                <h3 style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: exp.accent,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  marginBottom: "12px",
                }}>
                  {idx === 0 ? "Key Responsibilities" : idx === 1 ? "Key Skills" : "Focus Areas"}
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {exp.responsibilities.map((item) => (
                    <li key={item} style={{
                      color: "#cbd5e1",
                      paddingLeft: "20px",
                      position: "relative",
                      fontSize: "0.95rem",
                      transition: "all 0.3s",
                    }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = exp.accent;
                        e.currentTarget.style.transform = "translateX(5px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#cbd5e1";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <span style={{ position: "absolute", left: "0", color: exp.accent }}>▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "20px",
                paddingTop: "15px",
                borderTop: "1px solid rgba(100, 116, 139, 0.15)",
              }}>
                {exp.tags.map((tag) => (
                  <span key={tag} style={{
                    padding: "5px 12px",
                    backgroundColor: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(100, 116, 139, 0.3)",
                    color: "#94a3b8",
                    borderRadius: "16px",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    transition: "all 0.3s",
                    cursor: "default",
                  }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = exp.accent;
                      e.currentTarget.style.color = exp.accent;
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.3)";
                      e.currentTarget.style.color = "#94a3b8";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </main>
  );
}
