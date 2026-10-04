import { ImageResponse } from "next/og";
import { MARK_SVG } from "@/lib/mark-svg";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const src = `data:image/svg+xml;base64,${Buffer.from(MARK_SVG).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#faf7f2", alignItems: "center", justifyContent: "center" }}>
        {/* ImageResponse (Satori) only renders plain <img> */}
        <img src={src} width={150} height={117} alt="" />
      </div>
    ),
    size,
  );
}
