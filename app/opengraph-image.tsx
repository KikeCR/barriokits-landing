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
          backgroundColor: "#161310",
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(255,122,82,0.16), transparent 42%), repeating-linear-gradient(45deg, #2c251e 0, #2c251e 1px, transparent 1px, transparent 26px)",
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
              backgroundColor: "#b23a20",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M9 6 4 12l5 6" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m15 6 5 6-5 6" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="10.4" y="10.4" width="3.2" height="3.2" rx="0.6" fill="#ffffff" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: "56px", fontWeight: 700, color: "#f5f1ec" }}>
            Barrio Kits
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "36px",
            fontSize: "32px",
            color: "#b8ada0",
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
