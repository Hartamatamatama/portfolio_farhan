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
      title: "Smart Learning Tracker AI",
      description: "Aplikasi dan website tracking pembelajaran cerdas berbasis Artificial Intelligence dengan timer Pomodoro dan analitik belajar.",
      tags: ["Artificial Intelligence", "Flutter", "Supabase"],
      link: "#",
      color: "#06b6d4",
      highlights: ["Timer Pomodoro & Stopwatch", "AI Learning Report", "Mood & Analytics Tracking"]
    },
    {
      title: "Zodiac Forecasting AI",
      description: "Aplikasi peramalan zodiak berbasis Artificial Intelligence menggunakan model OpenRouter.",
      tags: ["Artificial Intelligence", "Python", "OpenRouter"],
      link: "#",
      color: "#3b82f6",
      highlights: ["Natural Language Processing", "REST API Integration", "JSON Prediction Output"]
    },
    {
      title: "Car Rental System",
      description: "Website manajemen rental mobil dengan fitur pemesanan dan ketersediaan armada real-time.",
      tags: ["PHP", "Laravel", "MySQL"],
      link: "#",
      color: "#a855f7",
      highlights: ["Booking & Availability", "Admin Dashboard", "Payment Gateway"]
    },
    {
      title: "Creative Academy Ticketing",
      description: "Platform pembelian tiket workshop Creative Academy dengan framework Laravel.",
      tags: ["PHP", "Laravel", "Ticketing"],
      link: "#",
      color: "#22c55e",
      highlights: ["Event Management", "QR Code Check-in", "E-Ticket Generation"]
    },
    {
      title: "Library Information System",
      description: "Website sistem informasi perpustakaan menggunakan framework CodeIgniter.",
      tags: ["PHP", "CodeIgniter", "MySQL"],
      link: "#",
      color: "#f59e0b",
      highlights: ["Catalog Search", "Loan & Return", "Member Management"]
    },
    {
      title: "Agriculture Info System",
      description: "Website sistem informasi khusus yang dirancang untuk membantu para petani.",
      tags: ["Web Development", "UI/UX", "PHP"],
      link: "#",
      color: "#ec4899",
      highlights: ["Crop Database", "Weather Advisory", "Farmer Forum"]
    },
    {
      title: "Fruit Catcher Game",
      description: "Aplikasi game kasual 'Fruit Catcher' interaktif dengan sistem skor.",
      tags: ["Game Development", "Java"],
      link: "#",
      color: "#ef4444",
      highlights: ["Sprite Animation", "Collision Detection", "High Score System"]
    },
    {
      title: "School Payment System",
      description: "Aplikasi desktop sederhana untuk manajemen pembayaran SPP Sekolah.",
      tags: ["Java", "Desktop App"],
      link: "#",
      color: "#6366f1",
      highlights: ["Monthly Billing", "Receipt Print", "Student Ledger"]
    },
    {
      title: "Multiple Admin Dashboards",
      description: "Mendevelop puluhan website panel admin dengan berbagai macam tema dan kebutuhan bisnis.",
      tags: ["Full-stack", "Dashboard", "CMS"],
      link: "#",
      color: "#8b5cf6",
      highlights: ["Role-based Access", "Data CRUD", "Custom Theme Engine"]
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
                e.currentTarget.style.borderColor = project.color;
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = `0 24px 48px ${project.color}15`;
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
                background: `linear-gradient(to right, ${project.color}, transparent)`,
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
                    <span style={{ width: "14px", height: "14px", borderRadius: "50%", backgroundColor: project.color, boxShadow: `0 0 12px ${project.color}`, flexShrink: 0 }}></span>
                    <h2 style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#e2e8f0",
                      transition: "color 0.3s",
                    }}>
                      {project.title}
                    </h2>
                  </div>
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
                  color: project.color,
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
                        e.currentTarget.style.color = project.color;
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
                        color: project.color,
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
                      e.currentTarget.style.borderColor = project.color;
                      e.currentTarget.style.color = project.color;
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow = `0 4px 12px ${project.color}22`;
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
