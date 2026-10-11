import { mkdir } from "node:fs/promises";
import { Buffer } from "node:buffer";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = path.join(root, "src", "assets");
const imageNames = [
  "Untitled2.png",
  "atem_mini_pro.png",
  "Front.png",
  "Modal.png",
  "pw_project (1).png",
  "untitled.jpg",
];

await mkdir(path.join(root, "public"), { recursive: true });

for (const name of imageNames) {
  const input = path.join(assetsDir, name);
  const output = path.join(assetsDir, `${path.parse(name).name}.webp`);
  await sharp(input).webp({ quality: 84, effort: 6 }).toFile(output);
  console.log(`Created ${path.relative(root, output)}`);
}

const previewTitle = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#080808" stop-opacity=".1"/>
        <stop offset="1" stop-color="#080808" stop-opacity=".9"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#shade)"/>
    <text x="72" y="430" fill="#d71932" font-family="Arial, sans-serif" font-size="20" letter-spacing="5">PORTFOLIO / SÃO PAULO</text>
    <text x="68" y="530" fill="#f3f3f0" font-family="Arial, sans-serif" font-size="90" font-weight="700" letter-spacing="-5">LUCA TONIOLO</text>
    <text x="74" y="580" fill="#f3f3f0" font-family="Arial, sans-serif" font-size="25" letter-spacing="4">3D × CODE</text>
  </svg>
`);

await sharp(path.join(assetsDir, "atem_mini_pro.png"))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .composite([{ input: previewTitle }])
  .webp({ quality: 88, effort: 6 })
  .toFile(path.join(root, "public", "og-image.webp"));

console.log("Created public/og-image.webp (1200 × 630)");
