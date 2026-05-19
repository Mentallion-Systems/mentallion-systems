import { ImageResponse } from "next/og";
import { seo } from "@/lib/seo";

export const alt = "Mentallion Systems";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0f1413 0%, #1c3a2f 58%, #2d5f4d 100%)",
          color: "#fffdf8",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "880px"
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.78
            }}
          >
            Mentallion Systems
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1,
              letterSpacing: "-0.06em"
            }}
          >
            AI systems that replace manual work
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.45,
              maxWidth: "760px",
              color: "rgba(255,253,248,0.82)"
            }}
          >
            AI automation, workflow software, and production-grade platforms for
            businesses that need real results.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap"
            }}
          >
            {["Automation", "AI Systems", "Custom SaaS", "Case Studies"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    padding: "12px 20px",
                    borderRadius: "999px",
                    background: "rgba(255,253,248,0.1)",
                    border: "1px solid rgba(255,253,248,0.16)",
                    fontSize: 24
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(255,253,248,0.7)"
            }}
          >
            {seo.siteUrl.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    size
  );
}
