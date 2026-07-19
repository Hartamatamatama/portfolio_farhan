import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Farhan Raisprawira Hartama - Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1a1f35 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Orbs */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: "100px",
              fontWeight: 900,
              background: "linear-gradient(to right, #06b6d4, #3b82f6, #a855f7)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "20px",
              letterSpacing: "-2px",
            }}
          >
            Farhan Raisprawira
          </div>
          <div
            style={{
              fontSize: "40px",
              color: "#94a3b8",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "40px",
            }}
          >
            Full-stack Developer & Mobile Engineer
          </div>

          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "40px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "30px", color: "#06b6d4" }}>💻</span>
              <span style={{ color: "#e2e8f0", fontSize: "30px" }}>Next.js</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "30px", color: "#3b82f6" }}>📱</span>
              <span style={{ color: "#e2e8f0", fontSize: "30px" }}>Flutter</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "30px", color: "#a855f7" }}>⚙️</span>
              <span style={{ color: "#e2e8f0", fontSize: "30px" }}>Go</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}