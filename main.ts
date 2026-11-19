// Entry for the gta6-meme-x-01 bounty: carries the X post link in POST.json
// from the bot directory to the output directory, quietly.
import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

async function main(): Promise<void> {
  const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  await mkdir(outDir, { recursive: true });
  await copyFile(join(botDir, "POST.json"), join(outDir, "POST.json"));
}

main().catch(() => {
  process.exit(1);
});
