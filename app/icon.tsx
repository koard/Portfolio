import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#38bdf8",
          fontWeight: 800,
          fontFamily: "Inter, sans-serif",
          borderRadius: "8px",
          border: "1px solid #1e293b",
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
