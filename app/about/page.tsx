"use client";

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
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: "#cbd5e1",
            lineHeight: 1.8,
            fontSize: "1.05rem",
          }}>
            <p style={{
              padding: "20px",
              background: "rgba(30, 41, 59, 0.3)",
              borderRadius: "12px",
              borderLeft: "3px solid #06b6d4",
              transition: "all 0.3s",
            }}>
              Saya Farhan Raisprawira Hartama, mahasiswa Teknik Informatika Angkatan 2023 di GI (Global Institute). Saat ini sedang menyelesaikan thesis tentang learning analytics platform dengan fokus pada Pomodoro Technique tracking dan AI-powered insights.
            </p>
            <p style={{
              padding: "20px",
              background: "rgba(30, 41, 59, 0.3)",
              borderRadius: "12px",
              borderLeft: "3px solid #3b82f6",
              transition: "all 0.3s",
            }}>
              Di KAMINDO Consulting, saya berkontribusi dalam dokumentasi dan compliance automation untuk standar ISO 27001, 37001, dan 9001. Pengalaman ini memberikan insight mendalam tentang quality assurance dan enterprise-level documentation systems.
            </p>
            <p style={{
              padding: "20px",
              background: "rgba(30, 41, 59, 0.3)",
              borderRadius: "12px",
              borderLeft: "3px solid #a855f7",
              transition: "all 0.3s",
            }}>
              Saya passionate tentang building products yang solve real problems—dari learning management systems hingga compliance automation platforms. Setiap proyek adalah kesempatan untuk menggabungkan technical excellence dengan user-centric design.
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
              color: "#a855f7",
              marginBottom: "15px",
            }}>
              GI (Global Institute)
            </h3>
            <p style={{ color: "#94a3b8", marginBottom: "10px", fontSize: "1.05rem" }}>
              Bachelor of Engineering in Information Technology
            </p>
            <p style={{ color: "#cbd5e1", marginBottom: "15px" }}>
              2023 - 2027 (Expected) | Jakarta, Indonesia
            </p>
            <p style={{ color: "#cbd5e1", fontSize: "1.1rem" }}>
              <strong style={{ color: "#22c55e" }}>GPA: 3.6+</strong> | Graduation: Agustus 2027
            </p>
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
            Core Competencies
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}>
            {[
              {
                title: "Mobile Development",
                icon: "📱",
                skills: ["Flutter", "Dart", "Riverpod", "Provider"],
                color: "#06b6d4",
              },
              {
                title: "Frontend",
                icon: "🎨",
                skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
                color: "#3b82f6",
              },
              {
                title: "Backend",
                icon: "🔧",
                skills: ["Go", "PostgreSQL", "Supabase", "API Design"],
                color: "#a855f7",
              },
              {
                title: "DevOps & Tools",
                icon: "🚀",
                skills: ["Git", "Docker", "CI/CD", "Linux"],
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
              { emoji: "🏆", text: "Maintaining GPA 3.6+ throughout college years" },
              { emoji: "🚀", text: "Developed Smart Learning Tracker with 13+ routes and real-time analytics" },
              { emoji: "📋", text: "Designed compliance documentation systems for ISO standards" },
              { emoji: "🎓", text: "Thesis on learning analytics combining Pomodoro technique with AI insights" },
              { emoji: "💡", text: "Led multiple full-stack projects from concept to deployment" },
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
