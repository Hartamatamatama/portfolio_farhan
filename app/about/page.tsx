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

export default function About() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const { ref: titleRef, isVisible: titleVisible, hasHydrated: titleHydrated } = useInView();
  const { ref: bgRef, isVisible: bgVisible, hasHydrated: bgHydrated } = useInView();
  const { ref: eduRef, isVisible: eduVisible, hasHydrated: eduHydrated } = useInView();
  const { ref: skillsRef, isVisible: skillsVisible, hasHydrated: skillsHydrated } = useInView();
  const { ref: achRef, isVisible: achVisible, hasHydrated: achHydrated } = useInView();

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
            About Me
          </h1>
          <div style={{
            width: titleVisible ? "80px" : "0px",
            height: "4px",
            background: "linear-gradient(to right, #06b6d4, #3b82f6)",
            borderRadius: "2px",
            transition: "width 0.8s ease 0.3s",
          }}></div>
        </div>

        {/* Background Section */}
        <section ref={bgRef} style={{
          marginBottom: "60px",
          ...getScrollStyle(bgHydrated, bgVisible, "0.1s")
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
            }}>👤</span>
            Background
          </h2>
          <div style={{
            background: "rgba(30, 41, 59, 0.4)",
            border: "1px solid rgba(100, 116, 139, 0.2)",
            borderRadius: "16px",
            padding: "30px",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: "default",
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.4)";
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(6, 182, 212, 0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <p style={{ marginBottom: "20px" }}>
              Halo! Saya adalah <strong style={{ color: "#06b6d4" }}>mahasiswa Teknik Informatika Angkatan 2023 di GI (Global Institute)</strong> dengan passion mendalam di bidang <strong style={{ color: "#3b82f6" }}>Pengembangan Perangkat Lunak</strong> (Web & Mobile).
            </p>
            <p style={{ marginBottom: "20px" }}>
              Saat ini, saya sedang fokus mempelajari teknologi web ter-update seperti <strong style={{ color: "#a855f7" }}>PHP, Laravel, Next.js</strong> dan ekosistem Artificial Intelligence.
            </p>
            <p>
              Di luar koding, saya selalu mencari tantangan baru, terus berkreasi membangun aplikasi cerdas (Smart Apps) berbasis AI, dan ikut aktif memimpin organisasi kampus.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section ref={eduRef} style={{
          marginBottom: "60px",
          ...getScrollStyle(eduHydrated, eduVisible, "0.2s")
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
              background: "linear-gradient(135deg, #a855f7, #6366f1)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}>🎓</span>
            Education
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Kuliah */}
            <div style={{
              background: "rgba(30, 41, 59, 0.4)",
              border: "1px solid rgba(100, 116, 139, 0.2)",
              borderRadius: "16px",
              padding: "30px",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#a855f7";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(168, 85, 247, 0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#e2e8f0",
                marginBottom: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}>
                GI (Global Institute)
                <span style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#94a3b8",
                  background: "rgba(15, 23, 42, 0.6)",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  border: "1px solid rgba(100, 116, 139, 0.3)",
                }}>2023 - 2027 (Expected)</span>
              </h3>
              <p style={{
                fontSize: "1.1rem",
                color: "#a855f7",
                marginBottom: "16px",
                fontWeight: 500,
              }}>Teknik Informatika</p>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                color: "#94a3b8",
              }}>
                <li style={{ display: "flex", gap: "10px" }}><span style={{ color: "#a855f7" }}>▹</span> <strong>IPK: 4.0</strong></li>
                <li style={{ display: "flex", gap: "10px" }}><span style={{ color: "#a855f7" }}>▹</span> Fokus mempelajari Web Development (PHP, Laravel) & Artificial Intelligence.</li>
                <li style={{ display: "flex", gap: "10px" }}><span style={{ color: "#a855f7" }}>▹</span> Aktif di UKM Core IT, English Club, Entrepreneur, JAGOKU, dan Leader Global Accounting Club.</li>
              </ul>
            </div>
            
            {/* SMK */}
            <div style={{
              background: "rgba(30, 41, 59, 0.4)",
              border: "1px solid rgba(100, 116, 139, 0.2)",
              borderRadius: "16px",
              padding: "30px",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#a855f7";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(168, 85, 247, 0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#e2e8f0",
                marginBottom: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}>
                SMK Negeri 3 Kuningan
                <span style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#94a3b8",
                  background: "rgba(15, 23, 42, 0.6)",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  border: "1px solid rgba(100, 116, 139, 0.3)",
                }}>2020 - 2023</span>
              </h3>
              <p style={{
                fontSize: "1.1rem",
                color: "#a855f7",
                marginBottom: "16px",
                fontWeight: 500,
              }}>Multimedia</p>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                color: "#94a3b8",
              }}>
                <li style={{ display: "flex", gap: "10px" }}><span style={{ color: "#a855f7" }}>▹</span> Mendapatkan Ranking 1 Pada Kelas XI Semester 2.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} style={{
          marginBottom: "60px",
          ...getScrollStyle(skillsHydrated, skillsVisible, "0.3s")
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
            }}>⚡</span>
            Keahlian Teknis
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}>
            {[
              {
                title: "Programming",
                icon: "💻",
                skills: ["PHP", "JavaScript", "C#", "C++", "Python", "Java"],
                color: "#06b6d4",
              },
              {
                title: "Web & Framework",
                icon: "🌐",
                skills: ["Laravel", "CodeIgniter", "HTML", "CSS"],
                color: "#3b82f6",
              },
              {
                title: "Tools & Deployment",
                icon: "🔧",
                skills: ["MySQL", "GitHub", "SSH Deployment", "CPanel"],
                color: "#a855f7",
              },
              {
                title: "Other Skills",
                icon: "🤖",
                skills: ["OpenRouter (AI)", "Canva", "Microsoft Office"],
                color: "#22c55e",
              },
            ].map((category, idx) => (
              <div
                key={category.title}
                style={{
                  background: "rgba(30, 41, 59, 0.4)",
                  border: "1px solid rgba(100, 116, 139, 0.2)",
                  borderRadius: "16px",
                  padding: "24px",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "default",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = category.color;
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = `0 20px 40px ${category.color}22`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{
                  fontSize: "2rem",
                  marginBottom: "12px",
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: category.color,
                  marginBottom: "16px",
                }}>
                  {category.title}
                </h3>
                <ul style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}>
                  {category.skills.map((skill) => (
                    <li key={skill} style={{
                      color: "#cbd5e1",
                      paddingLeft: "20px",
                      position: "relative",
                      fontSize: "0.95rem",
                      transition: "all 0.3s",
                    }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = category.color;
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
                        color: category.color,
                        fontWeight: "bold",
                      }}>▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section ref={achRef} style={{
          ...getScrollStyle(achHydrated, achVisible, "0.4s")
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
              background: "linear-gradient(135deg, #22c55e, #06b6d4)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}>🏆</span>
            Key Achievements
          </h2>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}>
            {[
              { emoji: "🏆", text: "Juara 1 Lomba Cerdas Cermat Tingkat Kampus" },
              { emoji: "🎓", text: "Meraih IPK 4.0 di Program Studi Teknik Informatika GI" },
              { emoji: "🌟", text: "Leader UKM Global Accounting Club (Mengajar Basic Accounting)" },
              { emoji: "🚀", text: "Mendevelop puluhan website admin & sistem informasi untuk berbagai klien" },
              { emoji: "🧠", text: "Sertifikasi Big Data Analytics & Cloud Practitioner Essentials" },
            ].map((achievement, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(30, 41, 59, 0.3)",
                  border: "1px solid rgba(100, 116, 139, 0.15)",
                  borderRadius: "12px",
                  padding: "18px 24px",
                  color: "#cbd5e1",
                  fontSize: "1rem",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "default",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#06b6d4";
                  e.currentTarget.style.transform = "translateX(10px)";
                  e.currentTarget.style.background = "rgba(30, 41, 59, 0.5)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(6, 182, 212, 0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.15)";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.background = "rgba(30, 41, 59, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{achievement.emoji}</span>
                <span>{achievement.text}</span>
              </div>
            ))}
          </div>
        </section>
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
