import { productChannel } from "@mega-ai-agent/product"

export type Channel = "dev" | "beta" | "prod"

export function resolveChannel(): Channel {
  return productChannel(Bun.env.MEGA_AI_AGENT_CHANNEL)
}
