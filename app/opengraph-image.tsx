import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ratchanon Kulpatrakorn - Software Engineer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020617",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* Background Decorative Gradient */}
        <div
          style={{
            position: "absolute",
            right: "-20%",
            bottom: "-20%",
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 60%)",
            borderRadius: "50%",
          }}
        />

        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              background: "#0f172a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
              border: "1px solid #1e293b",
              marginRight: "24px",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "#94a3b8",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
        </div>

        {/* Bottom Title Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "110px",
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: "32px",
              letterSpacing: "-0.03em",
            }}
          >
            <div style={{ color: "#f8fafc" }}>Ratchanon</div>
            <div style={{ color: "#f8fafc" }}>Kulpatrakorn</div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "44px",
              color: "#94a3b8",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            <div style={{ color: "#38bdf8", marginRight: "24px", fontWeight: 800 }}>&gt;</div>
            <div>Full-Stack Developer</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
