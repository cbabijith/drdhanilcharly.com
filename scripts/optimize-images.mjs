import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "_assets");
const OUT = path.join(ROOT, "public", "images");
await mkdir(OUT, { recursive: true });

const jobs = [
  // [source, output, width, quality]
  ["doctor-portrait.jpg", "doctor-hero.webp", 1000, 82],
  ["doctor-portrait.jpg", "doctor-hero@2x.webp", 1400, 80],
  ["doctor-about.png", "doctor-about.webp", 720, 82],
  ["logo.png", "logo.png", 300, 90],
  ["shoulder-knee.png", "service-pain-management.webp", 900, 80],
  ["arthoscopy.png", "service-arthroscopic-care.webp", 900, 80],
  ["sk-arthoscopy.png", "service-shoulder-knee-arthroscopy.webp", 900, 80],
  ["patient-care.png", "service-personalized-care.webp", 900, 80],
  ["regenerative.png", "service-regenerative.webp", 900, 80],
  ["knee.png", "service-sports-injury.webp", 900, 80],
  ["abhilash-kt.png", "avatar-abhilash.webp", 120, 85],
  ["rahul-savariya.png", "avatar-rahul.webp", 120, 85],
  // Speciality page cards
  ["sk-arthoscopy.png", "speciality-shoulder.webp", 900, 80],
  ["speciality-knee.jpg", "speciality-knee.webp", 900, 80],
  ["knee.png", "speciality-sports.webp", 900, 80],
  ["speciality-trauma.jpg", "speciality-trauma.webp", 900, 80],
  ["speciality-regenerative.jpg", "speciality-regenerative.webp", 900, 80],
  // Shoulder dislocation page
  ["dislocation-1.jpg", "dislocation-1.webp", 900, 80],
  ["dislocation-2.jpg", "dislocation-2.webp", 900, 80],
  // Gallery (portrait photos are 800x1200)
  ["gallery-about.png", "gallery-about.webp", 760, 82],
  ["gallery-photo-1.png", "gallery-photo-1.webp", 760, 82],
  ["gallery-photo-2.png", "gallery-photo-2.webp", 760, 82],
  ["gallery-photo-3.png", "gallery-photo-3.webp", 760, 82],
  ["gallery-photo-4.png", "gallery-photo-4.webp", 760, 82],
  ["arthoscopy.png", "gallery-arthroscopic-care.webp", 900, 80],
  ["sk-arthoscopy.png", "gallery-shoulder-arthroscopy.webp", 900, 80],
  ["patient-care.png", "gallery-patient-care.webp", 900, 80],
  ["knee.png", "gallery-sports-injury.webp", 900, 80],
  ["regenerative.png", "gallery-regenerative.webp", 900, 80],
  // Blog covers
  ["blog-gym.jpg", "blog-gym.webp", 900, 80],
  ["blog-examining.jpg", "blog-examining.webp", 1200, 80],
  ["blog-physio.jpg", "blog-physio.webp", 1200, 80],
  ["blog-anatomy.jpg", "blog-anatomy.webp", 1100, 80],
  ["blog-sportsman.jpg", "blog-sportsman.webp", 1200, 80],
  ["blog-consult.jpg", "blog-consult.webp", 900, 80],
];

for (const [src, out, width, quality] of jobs) {
  const isPngOut = out.endsWith(".png");
  const img = sharp(path.join(SRC, src)).resize({ width, withoutEnlargement: true });
  const pipeline = isPngOut ? img.png({ quality, compressionLevel: 9 }) : img.webp({ quality, effort: 5 });
  const info = await pipeline.toFile(path.join(OUT, out));
  console.log(`${out}: ${(info.size / 1024).toFixed(0)} KB (${info.width}x${info.height})`);
}

// Favicon from logo (32px + 180px apple touch)
await sharp(path.join(SRC, "logo.png")).resize(48).png().toFile(path.join(ROOT, "public", "favicon-48.png"));
await sharp(path.join(SRC, "logo.png")).resize(180).png().toFile(path.join(ROOT, "public", "apple-touch-icon.png"));
console.log("favicon + apple-touch-icon done");
