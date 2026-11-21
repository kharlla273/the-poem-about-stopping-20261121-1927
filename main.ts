// "The Hand That Rests" — a short poem about stopping.
// Entry for the make.fun bounty "The poem about stopping".
// Node 22 entrypoint: writes the poem (UTF-8) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "The hand hovers, then rests.",
  "Not every door needs opening;",
  "some rooms are kept by staying out.",
  "",
  "I learned the bravest verb",
  "is not to go, but to remain —",
  "the finger lifted from the key,",
  "the whole world held, unpressed, in place.",
].join("\n");

const length = Array.from(poem).length;
if (length < 1 || length > 280) {
  throw new Error(`poem must be 1-280 code points, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
console.log(`wrote /output/entry.txt (${length} code points)`);
