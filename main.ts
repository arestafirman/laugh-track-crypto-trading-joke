import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My accountant spent a week filing my 214 trades, billed me $600, and listed my $18,400 loss under 'charitable donations to the market.'";

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
