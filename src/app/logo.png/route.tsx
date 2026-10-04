import { ImageResponse } from "next/og";
import { MARK_SVG } from "@/lib/mark-svg";

/** 512×512 PNG logo referenced by the LocalBusiness structured data. */
export const dynamic = "force-static";

export function GET() {
  const src = `data:image/svg+xml;base64,${Buffer.from(MARK_SVG).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#faf7f2", alignItems: "center", justifyContent: "center" }}>
        {/* ImageResponse (Satori) only renders plain <img> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={360} height={280} alt="" />
        <div style={{ marginTop: 12, fontSize: 64, letterSpacing: 14, color: "#1e1b17" }}>LUMÉA</div>
      </div>
    ),
    { width: 512, height: 512 },
  );
}
