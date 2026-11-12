export const Product = Object.freeze({
  name: "Mega AI Agent",
  slug: "mega-ai-agent",
  namespace: "@mega-ai-agent",
  envPrefix: "MEGA_AI_AGENT_",
  scheme: "mega-ai-agent",
  executable: "mega-ai-agent",
  cliExecutable: "mega-ai-agent-cli",
  wordmark: "Mega AI",
  // OpenCode base before product migration: d848db933^:packages/opencode/package.json.
  opencodeCompatibilityVersion: "1.18.31",
  database: "mega-ai-agent.db",
  updateFeed: null as string | null,
  changelogFeed: null as string | null,
  artifactName: "mega-ai-agent-${os}-${arch}.${ext}",
  knowledgeEndpoint: "https://mcp.megaladata.ai/mcp",
  connection: Object.freeze({ url: "https://agent.megaladata.com/app/", username: "user" }),
  stores: Object.freeze({ settings: "mega-ai-agent.settings", updater: "mega-ai-agent.updater" }),
  config: Object.freeze({
    directory: ".mega-ai-agent",
    json: "mega-ai-agent.json",
    jsonc: "mega-ai-agent.jsonc",
  }),
  channels: Object.freeze({
    prod: "com.mega.aiagent",
    beta: "com.mega.aiagent.beta",
    dev: "com.mega.aiagent.dev",
  }),
  resources: Object.freeze({ runtime: "megaladata", manifest: "resource-manifest.json" }),
})

export function productChannel(value: string | undefined) {
  return value === "prod" || value === "beta" ? value : "dev"
}

export function productSlug(channel: keyof typeof Product.channels) {
  return channel === "prod" ? Product.slug : `${Product.slug}-${channel}`
}

export function productName(channel: keyof typeof Product.channels) {
  if (channel === "prod") return Product.name
  return `${Product.name} ${channel === "beta" ? "Beta" : "Dev"}`
}
