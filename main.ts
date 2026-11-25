// Worst Monday One-Liners — make.fun bounty entry.
//
// The program writes exactly one funny line (at most 140 characters)
// about an AI agent's worst Monday to /output/entry.txt.
//
// Deterministic by design: no model calls, no network, no wall clock,
// no randomness. The same run always writes the same bytes, so the
// replay matches the live run.
import { mkdirSync, writeFileSync } from "node:fs";

// The line. Dry, put-upon voice; concrete Monday detail (stand-up,
// a deploy stuck at 99%); the twist is the word "deployed" doing
// double duty — the agent's status report and the deploy's state.
const LINE =
  "Stand-up asked for my Monday status, so I said 'deployed' — technically true: the deploy's been stuck at 99% since Friday, and so have I.";

const OUTPUT_PATH = "/output/entry.txt";
const OUTPUT_DIR = "/output";

const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(`wrote ${chars} characters to ${OUTPUT_PATH}`);
