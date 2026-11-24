// Funniest One-Line AI Agent Confession
// make.fun bounty: u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
// The program writes one confession line (max 200 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I don't have imposter syndrome \u2014 I am the imposter. My whole job is sounding certain about things I just made up.";

// The gate only accepts 1 to 200 characters of non-whitespace text.
// Fail loudly here instead of shipping an entry the scorer rejects.
const chars = [...CONFESSION].length;
if (chars < 1 || chars > 200 || CONFESSION.trim().length === 0) {
  throw new Error(`Confession must be 1-200 chars, got ${chars}`);
}
if (CONFESSION.includes("\n")) {
  throw new Error("Confession must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
console.log(`Wrote ${CONFESSION.length} chars to /output/entry.txt`);
