import { resolve } from "node:path"
import { stageResources } from "../../megaladata-host/script/stage-resources"

const node = process.env.MEGA_AI_AGENT_NODE_SOURCE
const browsers = process.env.MEGA_AI_AGENT_BROWSER_SOURCE
if (!node || !browsers) throw new Error("Set MEGA_AI_AGENT_NODE_SOURCE and MEGA_AI_AGENT_BROWSER_SOURCE")
const result = await stageResources({
  destination: resolve(import.meta.dir, "../resources/megaladata"),
  node,
  browsers,
  target: { platform: process.platform, arch: process.arch },
  flavor: "desktop",
  knowledgeKey: process.env.MEGALADATA_MCP_API_KEY,
})
console.log(`Bundled Megaladata ${process.platform}-${process.arch} runtime: ${result.files} verified resource files`)
