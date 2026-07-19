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

export default function Projects() {
  const { ref: titleRef, isVisible: titleVisible, hasHydrated: titleHydrated } = useInView();
  const { ref: descRef, isVisible: descVisible, hasHydrated: descHydrated } = useInView();
  const { ref: gridRef, isVisible: gridVisible, hasHydrated: gridHydrated } = useInView();

  const projects = [
    {
      title: "Smart Learning Tracker",
      description: "Comprehensive learning management platform built with Flutter + Supabase for tracking study sessions, mood patterns, and productivity insights.",
      status: "In Progress",
      highlights: [
        "13+ Routes dengan Riverpod state management",
        "Pomodoro & Stopwatch timer dengan foreground service alarm 3x",
        "Mood tracking dengan 4 parameter, 5 warna split dark/light",
        "History search dengan pagination (10/25/50/100) + filter & export",
        "AI-powered report generation via OpenRouter",
        "Session chaining untuk continued learning sessions",
        "Analytics dashboard dengan 7/14/30 hari insights",
      ],
      tags: ["Flutter", "Dart", "Riverpod", "Supabase", "PostgreSQL"],
      icon: "📱",
      accent: "#06b6d4",
    },
    {
      title: "Thesis: Learning Analytics Dashboard",
      description: "Full-stack analytics platform analyzing student engagement patterns through Pomodoro sessions. Combines Flutter frontend with Go backend.",
      status: "In Progress",
      highlights: [
        "Real-time Pomodoro session tracking",
        "Advanced analytics: 7/14/30-day trend analysis",
        "AI insights menggunakan pattern recognition",
        "Custom dashboard dengan drag-and-drop widgets",
      ],
      tags: ["Flutter", "Go", "PostgreSQL", "Analytics", "AI"],
      icon: "📊",
      accent: "#3b82f6",
    },
    {
      title: "ISO Compliance Automation",
      description: "Enterprise compliance documentation system for ISO 27001, 37001, and 9001 standards.",
      status: "Production",
      highlights: [
        "Automated document generation & validation",
        "Compliance checklist automation",
        "Audit trail & version control",
        "Multi-client support untuk KAMINDO Consulting",
      ],
      tags: ["Documentation", "Compliance", "Enterprise"],
      icon: "📋",
      accent: "#22c55e",
    },
    {
      title: "BIMBEL MAMA ALIF Platform",
      description: "Learning platform untuk private tutoring center dengan progress tracking dan parent communication.",
      status: "In Progress",
      highlights: [
        "Student progress dashboard",
        "Parent & tutor communication hub",
        "Attendance tracking system",
        "Performance analytics per subject",
      ],
      tags: ["React", "Next.js", "Supabase"],
      icon: "🎓",
      accent: "#a855f7",
    },
    {
      title: "This Portfolio",
      description: "Interactive portfolio website built with Next.js, TypeScript, and inline CSS. Showcasing all projects and experiences with ASMR animations.",
      status: "Production",
      highlights: [
        "Full-stack Next.js 16 dengan App Router",
        "Dark mode dengan gradient design system",
        "Fully responsive & accessible (WCAG compliant)",
        "Static generation untuk fast page load",
        "Typing effect, hover animations, scroll reveals",
      ],
      tags: ["Next.js", "React", "TypeScript", "CSS"],
      icon: "🦇",
      accent: "#06b6d4",
    },
  ];

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
            Featured Projects
          </h1>
          <div style={{
            width: titleVisible ? "80px" : "0px",
            height: "4px",
            background: "linear-gradient(to right, #06b6d4, #3b82f6)",
            borderRadius: "2px",
            transition: "width 0.8s ease 0.3s",
          }}></div>
        </div>

        {/* Description */}
        <p ref={descRef} style={{
          color: "#94a3b8",
          fontSize: "1.125rem",
          lineHeight: 1.7,
          marginBottom: "50px",
          ...getScrollStyle(descHydrated, descVisible, "0.1s")
        }}>
          Showcasing my recent work across mobile, web, and enterprise systems. Each project reflects my commitment to clean code, user experience, and solving real-world problems.
        </p>

        {/* Projects Grid */}
        <div ref={gridRef} style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          ...getScrollStyle(gridHydrated, gridVisible, "0.2s")
        }}>
          {projects.map((project, idx) => (
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
                
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = project.accent;
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = `0 24px 48px ${project.accent}15`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Glow effect on hover */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: `linear-gradient(to right, ${project.accent}, transparent)`,
                opacity: 0,
                transition: "opacity 0.3s",
              }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              ></div>

              {/* Project Header */}
              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "15px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "2rem" }}>{project.icon}</span>
                    <h2 style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#e2e8f0",
                      transition: "color 0.3s",
                    }}>
                      {project.title}
                    </h2>
                  </div>
                  <span style={{
                    backgroundColor: project.status === "Production" ? "rgba(34, 197, 94, 0.15)" : "rgba(59, 130, 246, 0.15)",
                    color: project.status === "Production" ? "#4ade80" : "#60a5fa",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    border: `1px solid ${project.status === "Production" ? "rgba(34, 197, 94, 0.3)" : "rgba(59, 130, 246, 0.3)"}`,
                    transition: "all 0.3s",
                  }}>
                    {project.status}
                  </span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.6 }}>
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div style={{ marginBottom: "20px" }}>
                <h3 style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: project.accent,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  marginBottom: "15px",
                }}>
                  Highlights
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {project.highlights.map((highlight, hidx) => (
                    <li
                      key={hidx}
                      style={{
                        color: "#cbd5e1",
                        paddingLeft: "20px",
                        position: "relative",
                        fontSize: "0.95rem",
                        transition: "all 0.3s",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = project.accent;
                        e.currentTarget.style.transform = "translateX(5px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#cbd5e1";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: "0",
                        color: project.accent,
                        transition: "all 0.3s",
                      }}>▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                paddingTop: "15px",
                borderTop: "1px solid rgba(100, 116, 139, 0.15)",
              }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "6px 14px",
                      backgroundColor: "rgba(15, 23, 42, 0.6)",
                      border: "1px solid rgba(100, 116, 139, 0.3)",
                      color: "#94a3b8",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      transition: "all 0.3s",
                      cursor: "default",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = project.accent;
                      e.currentTarget.style.color = project.accent;
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow = `0 4px 12px ${project.accent}22`;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.3)";
                      e.currentTarget.style.color = "#94a3b8";
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
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
