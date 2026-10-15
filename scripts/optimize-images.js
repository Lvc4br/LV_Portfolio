import { mkdir, stat, unlink } from "node:fs/promises";
import { Buffer } from "node:buffer";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = path.join(root, "src", "assets");
const imageNames = [
  "Untitled2.png",
  path.join("atem-mini-pro", "atem_mini_pro.png"),
  path.join("atem-mini-pro", "angle-02.png"),
  path.join("atem-mini-pro", "angle-03.png"),
  path.join("atem-mini-pro", "top-view.png"),
  path.join("atem-mini-pro", "rear-ports.png"),
  path.join("playdate-console", "Front.png"),
  path.join("playdate-console", "back.png"),
  path.join("playdate-console", "center.png"),
  path.join("playdate-console", "left.png"),
  path.join("playdate-console", "up.png"),
  path.join("coca-cola", "bottle-render-dark.jpg"),
  path.join("coca-cola", "bottle-render-warm.jpg"),
  path.join("planet", "material-study.jpg"),
  path.join("planet", "planet-closeup.jpg"),
  path.join("planet", "planet-orbit-close.jpg"),
  path.join("planet", "planet-and-moon-wide.jpg"),
  path.join("planet", "planet-and-moon-tall.jpg"),
  path.join("planet", "planetary-system.jpg"),
  path.join("planet", "planet-and-moon-dark.jpg"),
  path.join("planet", "wireframe-study.jpg"),
  path.join("laser", "laser-cube-study.png"),
  path.join("laser", "laser-impact-closeup.png"),
  path.join("laser", "laser-multiple-forms.png"),
  path.join("laser", "laser-beam-detail.png"),
  "untitled.jpg",
];

await mkdir(path.join(root, "public"), { recursive: true });

for (const name of imageNames) {
  const input = path.join(assetsDir, name);
  const output = path.join(assetsDir, path.parse(name).dir, `${path.parse(name).name}.webp`);
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

const socialImagePath = path.join(root, "public", "og-image.jpg");
await sharp(path.join(assetsDir, "atem-mini-pro", "atem_mini_pro.png"))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .composite([{ input: previewTitle }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(socialImagePath);

const socialImageSize = (await stat(socialImagePath)).size;
if (socialImageSize >= 300_000) {
  throw new Error(`public/og-image.jpg is too large: ${socialImageSize} bytes`);
}

await unlink(path.join(root, "public", "og-image.webp")).catch((error) => {
  if (error.code !== "ENOENT") throw error;
});

console.log(`Created public/og-image.jpg (1200 × 630, ${socialImageSize} bytes)`);
