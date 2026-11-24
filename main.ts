import fs from "node:fs";
import path from "node:path";

const joke = "Our Monday stand-up confessed it had nothing to update, then booked a 30-minute follow-up to discuss having none.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), joke, "utf8");
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}
