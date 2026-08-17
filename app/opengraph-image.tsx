import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";
export const alt = `${siteConfig.name}, developer boilerplate starters and code templates`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#09090b",
          backgroundImage:
            "linear-gradient(to right, #18181b 1px, transparent 1px), linear-gradient(to bottom, #18181b 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              backgroundColor: "#c2410c",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M9 6 4 12l5 6" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m15 6 5 6-5 6" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="10.4" y="10.4" width="3.2" height="3.2" rx="0.6" fill="#ffffff" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: "56px", fontWeight: 700, color: "#f4f4f4" }}>
            Barrio Kits
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "36px",
            fontSize: "32px",
            color: "#a1a1aa",
            maxWidth: "900px",
          }}
        >
          Developer boilerplate starters and code templates
        </div>
      </div>
    ),
    { ...size },
  );
}
