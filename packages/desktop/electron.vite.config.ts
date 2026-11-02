import { sentryVitePlugin } from "@sentry/vite-plugin"
import { defineConfig } from "electron-vite"
import appPlugin from "@opencode-ai/app/vite"
import * as fs from "node:fs/promises"
import { execFileSync } from "node:child_process"

const MEGALADATA_AI_AGENT_SERVER_DIST = "../opencode/dist/node"

// Capture provenance at build time, never from the user's working directory.
const source = (() => {
  try {
    const git = (...args: string[]) =>
      execFileSync("git", args, {
        cwd: import.meta.dirname,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim()
    // electron-vite creates this untracked ESM loader while evaluating us.
    const dirty = git("status", "--porcelain", "--untracked-files=all")
      .split("\n")
      .some((line) => line && !/^\?\? "?(?:.*\/)?electron\.vite\.config\.\d+\.mjs"?$/.test(line))
    return { sha: git("rev-parse", "HEAD"), dirty }
  } catch {
    return { sha: null, dirty: null }
  }
})()

const channel = (() => {
  const raw = process.env.MEGALADATA_AI_AGENT_CHANNEL
  if (raw === "dev" || raw === "beta" || raw === "prod") return raw
  if (process.env.MEGALADATA_AI_AGENT_CHANNEL === "latest") return "prod"
  return "dev"
})()

const nodePtyPkg = `@lydell/node-pty-${process.platform}-${process.arch}`

const sentry =
  process.env.SENTRY_AUTH_TOKEN && process.env.SENTRY_ORG && process.env.SENTRY_PROJECT
    ? sentryVitePlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        telemetry: false,
        release: {
          name: process.env.SENTRY_RELEASE ?? process.env.VITE_SENTRY_RELEASE,
        },
        sourcemaps: {
          assets: "./out/renderer/**",
          filesToDeleteAfterUpload: "./out/renderer/**/*.map",
        },
      })
    : false

export default defineConfig({
  main: {
    define: {
      "import.meta.env.MEGALADATA_AI_AGENT_CHANNEL": JSON.stringify(channel),
      "import.meta.env.MEGALADATA_AI_AGENT_SOURCE_SHA": JSON.stringify(source.sha),
      "import.meta.env.MEGALADATA_AI_AGENT_SOURCE_DIRTY": JSON.stringify(source.dirty),
      // Release builds bake browser recovery; packaged mode is still required at runtime.
      "import.meta.env.MEGALADATA_AI_AGENT_BROWSER_RECOVERY": JSON.stringify(
        process.env.MEGALADATA_AI_AGENT_BROWSER_RECOVERY === "1",
      ),
    },
    build: {
      rollupOptions: {
        input: { index: "src/main/index.ts", sidecar: "src/main/sidecar.ts" },
        // Keep this identical to electron-vite's Node 20.11+ shim. Its regex insertion can
        // corrupt bundled TypeScript, while a Rollup banner places the shim safely.
        output: {
          banner: `
// -- CommonJS Shims --
import __cjs_mod__ from 'node:module';
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
const require = __cjs_mod__.createRequire(import.meta.url);
`,
        },
      },
      externalizeDeps: {
        include: [nodePtyPkg],
        exclude: ["@megaladata-ai-agent/product", "@opencode-ai/schema", "@megaladata-ai-agent/megaladata-host"],
      },
    },
    plugins: [
      {
        name: "megaladata-ai-agent:node-pty-narrower",
        enforce: "pre",
        resolveId(s) {
          if (s === "@lydell/node-pty") return nodePtyPkg
        },
      },
      {
        name: "megaladata-ai-agent:virtual-server-module",
        enforce: "pre",
        resolveId(id) {
          if (id === "virtual:megaladata-ai-agent-server") return this.resolve(`${MEGALADATA_AI_AGENT_SERVER_DIST}/node.js`)
        },
      },
      {
        name: "megaladata-ai-agent:copy-server-assets",
        async writeBundle() {
          for (const l of await fs.readdir(MEGALADATA_AI_AGENT_SERVER_DIST)) {
            if (!l.endsWith(".wasm")) continue
            await fs.writeFile(`./out/main/chunks/${l}`, await fs.readFile(`${MEGALADATA_AI_AGENT_SERVER_DIST}/${l}`))
          }
        },
      },
    ],
  },
  preload: {
    build: {
      rollupOptions: {
        input: { index: "src/preload/index.ts" },
        output: {
          format: "cjs",
          entryFileNames: "[name].js",
        },
      },
    },
  },
  renderer: {
    plugins: [appPlugin, sentry],
    publicDir: "../../../app/public",
    root: "src/renderer",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: {
          main: "src/renderer/index.html",
        },
      },
    },
  },
})
