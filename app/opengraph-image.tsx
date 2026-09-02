import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0f1c2e",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#3fab6c", letterSpacing: 4 }}>
          H2MB
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 960,
            textTransform: "uppercase",
          }}
        >
          {"Building Manitoba's Green Hydrogen Future"}
        </div>
      </div>
    ),
    { ...size },
  );
}
