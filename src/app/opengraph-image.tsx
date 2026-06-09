import { ImageResponse } from "next/og";

export const alt = "Tech Trix Technologies — Innovative Software & Digital Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0A0D17",
          backgroundImage:
            "radial-gradient(900px 500px at 85% 15%, rgba(123,108,246,0.35), transparent), radial-gradient(700px 500px at 10% 90%, rgba(255,178,62,0.28), transparent)",
          color: "#ECEEF6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 6,
              background: "linear-gradient(135deg,#FFB23E,#7B6CF6)",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#9AA1BA",
            }}
          >
            Tech Trix Technologies
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 940,
            }}
          >
            <span>We build digital solutions that&nbsp;</span>
            <span style={{ color: "#FFB23E" }}>transform&nbsp;</span>
            <span>businesses.</span>
          </div>
          <div style={{ fontSize: 30, color: "#9AA1BA" }}>
            Web · Mobile · Enterprise Software · ERP & CRM · PWAs · IT Consulting
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
