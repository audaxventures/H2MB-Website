import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoBase64 = readFileSync(join(process.cwd(), "public/images/logo.png")).toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

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
          background: "#061532",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <img src={logoSrc} alt="" width={260} height={78} style={{ objectFit: "contain" }} />
        <div
          style={{
            display: "flex",
            marginTop: 32,
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
