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

export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible, hasHydrated: titleHydrated } = useInView();
  const { ref: contactRef, isVisible: contactVisible, hasHydrated: contactHydrated } = useInView();
  const { ref: formRef, isVisible: formVisible, hasHydrated: formHydrated } = useInView();
  const { ref: factsRef, isVisible: factsVisible, hasHydrated: factsHydrated } = useInView();

  const contacts = [
    { icon: "📧", label: "Email", value: "1123150117@global.ac.id", link: "mailto:1123150117@global.ac.id", color: "#06b6d4" },
    { icon: "💼", label: "LinkedIn", value: "farhan-hartama", link: "https://www.linkedin.com/in/farhan-hartama", color: "#3b82f6" },
    { icon: "🐙", label: "GitHub", value: "hartamatamatama", link: "https://github.com/hartamatamatama", color: "#a855f7" },
    { icon: "💬", label: "Telegram", value: "@vedora88", link: "https://t.me/vedora88", color: "#22c55e" },
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
            Get In Touch
          </h1>
          <div style={{
            width: titleVisible ? "80px" : "0px",
            height: "4px",
            background: "linear-gradient(to right, #06b6d4, #3b82f6)",
            borderRadius: "2px",
            transition: "width 0.8s ease 0.3s",
          }}></div>
          <p style={{ color: "#94a3b8", fontSize: "1.125rem", lineHeight: 1.7, marginTop: "20px" }}>
            I&apos;m always interested in hearing about new projects, collaborations, and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        {/* Contact Methods */}
        <div ref={contactRef} style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "60px",
          ...getScrollStyle(contactHydrated, contactVisible, "0.1s")
        }}>
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(30, 41, 59, 0.3)",
                border: "1px solid rgba(100, 116, 139, 0.2)",
                borderRadius: "16px",
                padding: "24px",
                textDecoration: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "12px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = contact.color;
                e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow = `0 20px 40px ${contact.color}20`;
                e.currentTarget.style.background = "rgba(30, 41, 59, 0.5)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.background = "rgba(30, 41, 59, 0.3)";
              }}
            >
              <div style={{ fontSize: "2.5rem" }}>{contact.icon}</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#e2e8f0" }}>
                {contact.label}
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>{contact.value}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div ref={formRef} style={{
          marginBottom: "60px",
          ...getScrollStyle(formHydrated, formVisible, "0.2s")
        }}>
          <h2 style={{
            fontSize: "1.875rem",
            fontWeight: 600,
            color: "#e2e8f0",
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <span style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}>✉️</span>
            Send me a message
          </h2>
          <form style={{
            background: "rgba(30, 41, 59, 0.3)",
            border: "1px solid rgba(100, 116, 139, 0.2)",
            borderRadius: "20px",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            {[
              { label: "Your Name", type: "text", placeholder: "John Doe" },
              { label: "Your Email", type: "email", placeholder: "john@example.com" },
              { label: "Subject", type: "text", placeholder: "Project Inquiry" },
            ].map((field) => (
              <div key={field.label}>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#cbd5e1",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    background: "rgba(15, 23, 42, 0.5)",
                    border: "1px solid rgba(100, 116, 139, 0.3)",
                    borderRadius: "12px",
                    color: "#cbd5e1",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                    transition: "all 0.3s",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#06b6d4";
                    e.currentTarget.style.backgroundColor = "rgba(15, 23, 42, 0.8)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(6, 182, 212, 0.15)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.3)";
                    e.currentTarget.style.backgroundColor = "rgba(15, 23, 42, 0.5)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
            ))}
            <div>
              <label style={{
                display: "block",
                marginBottom: "8px",
                color: "#cbd5e1",
                fontWeight: 500,
                fontSize: "0.95rem",
              }}>
                Your Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={6}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(100, 116, 139, 0.3)",
                  borderRadius: "12px",
                  color: "#cbd5e1",
                  fontSize: "1rem",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                  transition: "all 0.3s",
                  resize: "vertical",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#06b6d4";
                  e.currentTarget.style.backgroundColor = "rgba(15, 23, 42, 0.8)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(6, 182, 212, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.3)";
                  e.currentTarget.style.backgroundColor = "rgba(15, 23, 42, 0.5)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                padding: "14px 36px",
                background: "linear-gradient(to right, #06b6d4, #3b82f6)",
                color: "white",
                fontWeight: 600,
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                alignSelf: "flex-start",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(6, 182, 212, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Send Message →
            </button>
          </form>
        </div>

        {/* Quick Facts */}
        <div ref={factsRef} style={{
          background: "rgba(30, 41, 59, 0.3)",
          border: "1px solid rgba(100, 116, 139, 0.2)",
          borderRadius: "20px",
          padding: "32px",
          ...getScrollStyle(factsHydrated, factsVisible, "0.3s")
        }}>
          <h3 style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#e2e8f0",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <span style={{ fontSize: "1.5rem" }}>💡</span>
            Quick Facts About Me
          </h3>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            color: "#cbd5e1",
          }}>
            {[
              { emoji: "⏰", text: "Response Time: Usually within 24 hours" },
              { emoji: "💼", text: "Open to: Full-time roles, Contract work, Collaborations" },
              { emoji: "🎓", text: "Graduating: August 2027 (Expected)" },
              { emoji: "🚀", text: "Interests: Learning Tech, Compliance Automation, Analytics" },
              { emoji: "🔗", text: "Open to: Mentorship, Knowledge sharing, Open source" },
            ].map((fact, i) => (
              <div
                key={i}
                style={{
                  padding: "14px 20px",
                  background: "rgba(15, 23, 42, 0.3)",
                  borderRadius: "12px",
                  transition: "all 0.3s",
                  cursor: "default",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(30, 41, 59, 0.5)";
                  e.currentTarget.style.transform = "translateX(8px)";
                  e.currentTarget.style.borderLeft = "3px solid #06b6d4";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(15, 23, 42, 0.3)";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.borderLeft = "none";
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>{fact.emoji}</span>
                <span>{fact.text}</span>
              </div>
            ))}
          </div>
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
