import { $ } from "bun"
import { resolve } from "node:path"

const root = resolve(import.meta.dir, "../../..")
const output = process.argv[2]
if (!output || !process.env.MEGA_AI_AGENT_TEST_NODE) throw Error("Report path and pinned test Node are required")
const checks = [
  { package: "product", args: ["typecheck"] },
  { package: "megaladata-host", args: ["typecheck"] },
  { package: "desktop", args: ["typecheck"] },
  { package: "opencode", args: ["typecheck"] },
]
const results = []
for (const check of checks) {
  const result = await $`${process.execPath} ${check.args}`.cwd(resolve(root, "packages", check.package)).nothrow()
  results.push({ ...check, exitCode: result.exitCode })
}
await Bun.write(
  output,
  JSON.stringify(
    {
      status: results.every((result) => result.exitCode === 0) ? "PASS" : "FAIL",
      commit: (await $`git rev-parse HEAD`.cwd(root).text()).trim(),
      platform: process.platform,
      arch: process.arch,
      bun: Bun.version,
      results,
    },
    null,
    2,
  ) + "\n",
)
if (results.some((result) => result.exitCode !== 0)) process.exitCode = 1
