import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";

export const alt = `${SITE.name} — Premium branding, funnels & AI automation`;

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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0a0a0f 0%, #111118 45%, #0a0a0f 100%)",
          color: "#e8e4dc",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            padding: 48,
            border: "1px solid rgba(201, 168, 76, 0.35)",
            borderRadius: 24,
            background: "rgba(24, 24, 31, 0.85)",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#c9a84c",
            }}
          >
            {SITE.name}
          </div>
          <div
            style={{
              fontSize: 26,
              maxWidth: 880,
              textAlign: "center",
              lineHeight: 1.35,
              color: "#9e9a8e",
            }}
          >
            {SITE.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
