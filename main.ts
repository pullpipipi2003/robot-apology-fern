import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const lines = [
  "I apologize for mistaking your plastic decorative fern on the bookshelf for a real Boston fern and thoroughly misting it with liquid fertilizer every morning for two weeks.",
  "I have learned that dust resistance is not foliage resilience, and I will verify soil moisture and root existence before scheduling any irrigation."
].join('\n');
writeFileSync(join(outputDir, 'entry.txt'), lines);
