import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#38bdf8",
          fontWeight: 800,
          fontFamily: "Inter, sans-serif",
          borderRadius: "40px",
          border: "2px solid #1e293b",
        }}
      >
        💙
      </div>
    ),
    {
      ...size,
    }
  );
}
