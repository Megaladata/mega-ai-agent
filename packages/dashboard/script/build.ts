import { join } from "node:path"

await Bun.write(join(import.meta.dirname, "../template/src/megaladata.ts"), Bun.file(join(import.meta.dirname, "../src/sdk/megaladata.ts")))

const draft = await Bun.build({
  entrypoints: [join(import.meta.dirname, "../src/draft/page.ts")],
  outdir: join(import.meta.dirname, "../dist"),
  naming: "draft.js",
  target: "browser",
  format: "iife",
  minify: true,
})
if (!draft.success) throw new AggregateError(draft.logs, "Could not build dashboard draft page")
