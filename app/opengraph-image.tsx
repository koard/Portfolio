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
          background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#38bdf8",
              fontSize: "48px",
              fontWeight: 800,
              borderRadius: "24px",
              border: "2px solid #1e293b",
              marginRight: "32px",
            }}
          >
            RK
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#38bdf8",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "84px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          <div>Ratchanon</div>
          <div>Kulpatrakorn</div>
        </div>

        <div
          style={{
            fontSize: "42px",
            color: "#94a3b8",
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          Software Engineer & Full-Stack Developer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
