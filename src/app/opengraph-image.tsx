import { ImageResponse } from "next/og";
import { sitio } from "@/models";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          backgroundColor: "#3A4C38",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="52" stroke="#CDB277" strokeWidth="1.5" />
          <path d="M60 30 C60 46, 60 46, 60 66" stroke="#F6F3EA" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M60 40 C50 34, 44 36, 38 32" stroke="#F6F3EA" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M60 40 C70 34, 76 36, 82 32" stroke="#F6F3EA" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M60 50 C52 46, 47 47, 41 44" stroke="#F6F3EA" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M60 50 C68 46, 73 47, 79 44" stroke="#F6F3EA" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M60 66 C55 74, 53 78, 44 82" stroke="#F6F3EA" strokeWidth="2" strokeLinecap="round" />
          <path d="M60 66 C65 74, 67 78, 76 82" stroke="#F6F3EA" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M30 86 C36 78, 46 78, 50 84 C52 87, 52 90, 50 92 C42 92, 34 91, 30 86 Z"
            stroke="#CDB277"
            strokeWidth="1.6"
          />
          <path
            d="M90 86 C84 78, 74 78, 70 84 C68 87, 68 90, 70 92 C78 92, 86 91, 90 86 Z"
            stroke="#CDB277"
            strokeWidth="1.6"
          />
        </svg>

        <div style={{ display: "flex", fontSize: 68, color: "#F6F3EA", letterSpacing: 2 }}>
          {sitio.nombre}
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#E6E1D4", textAlign: "center" }}>
          {sitio.lema}
        </div>
      </div>
    ),
    { ...size },
  );
}
