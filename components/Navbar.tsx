"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useSound } from "@/hooks/useSound";

export default function Navbar() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const { playHover, playSwoosh } = useSound();
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      background: "transparent",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
      zIndex: 100,
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "all 0.3s ease",
    }}>
      <Link href="/" style={{
        fontSize: "1.5rem",
        fontWeight: 900,
        background: "linear-gradient(to right, #06b6d4, #3b82f6)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: "2px",
        textDecoration: "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseOver={(e) => {
        playHover();
        e.currentTarget.style.filter = "brightness(1.3) drop-shadow(0 0 10px rgba(6, 182, 212, 0.4))";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.filter = "none";
        e.currentTarget.style.transform = "scale(1)";
      }}
      onClick={() => playSwoosh()}
      >
        FR
      </Link>
      
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        {["Home", "About", "Projects", "Experience", "Contact"].map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = pathname === path || (pathname?.startsWith(path) && path !== "/");
          
          return (
            <Link
              key={item}
              href={path}
              onClick={() => {
                if (!isActive) playSwoosh();
              }}
              style={{
                color: isActive ? "#06b6d4" : "#94a3b8",
                textDecoration: "none",
                fontWeight: isActive ? 600 : 500,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                fontSize: "0.95rem",
                textShadow: isActive ? "0 0 15px rgba(6, 182, 212, 0.5)" : "none",
                position: "relative",
              }}
              onMouseOver={(e) => {
                if (!isActive) playHover();
                e.currentTarget.style.color = "#06b6d4";
                e.currentTarget.style.textShadow = "0 0 10px rgba(6, 182, 212, 0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = isActive ? "#06b6d4" : "#94a3b8";
                e.currentTarget.style.textShadow = isActive ? "0 0 15px rgba(6, 182, 212, 0.5)" : "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {item}
              {/* Active dot indicator */}
              {isActive && (
                <span style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#06b6d4",
                  boxShadow: "0 0 8px #06b6d4",
                }}></span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
