import { realpathSync } from "node:fs"
import { dirname, isAbsolute, resolve, sep } from "node:path"

// Exact entry points only: recharts has no exports map to prevent package traversal.
const MODULES = new Set(["react", "react/jsx-runtime", "react/jsx-dev-runtime", "react-dom", "react-dom/client", "recharts"])
const inside = (root, path) => path === root || path.startsWith(root + sep)
const scheme = /^[a-z][a-z0-9+.-]*:/i

export function checkSpecifier(specifier, importer, src) {
  if (/[?#]/.test(specifier)) return `Import “${specifier}” with query or hash is not allowed`
  if (/^\.\.?(?:[/\\]|$)/.test(specifier))
    return inside(src, resolve(dirname(importer), specifier)) ? undefined : `Import “${specifier}” is outside src/`
  if (isAbsolute(specifier) || scheme.test(specifier)) return `Import “${specifier}” by absolute path or URL is not allowed`
  return MODULES.has(specifier) ? undefined : `Module “${specifier}” is not part of the dashboard template`
}

export function dashboardResolver(root = process.cwd()) {
  const src = resolve(root, "src")
  // Vite ids use forward slashes on Windows; resolve converts them to native paths.
  const file = id => resolve(id.split("?")[0])
  const fromSrc = id => typeof id === "string" && !id.startsWith("\0") && inside(src, file(id))
  return {
    name: "megaladata-dashboard-resolver",
    enforce: "pre",
    async resolveId(source, importer) {
      // Vite virtual modules and imports from the installed kit are trusted.
      if (source.startsWith("\0") || !fromSrc(importer)) return null
      const error = checkSpecifier(source, file(importer), src)
      if (error) this.error(error)
      const resolved = await this.resolve(source, importer, { skipSelf: true })
      if (!resolved || resolved.id.startsWith("\0")) return resolved
      const kit = realpathSync(resolve(root, "node_modules"))
      const target = file(resolved.id)
      if (!inside(src, target) && !inside(kit, target)) this.error(`Module “${source}” is outside src/ and the template: ${resolved.id}`)
      const canonical = realpathSync(target)
      if (!inside(realpathSync(src), canonical) && !inside(kit, canonical)) this.error(`Module “${source}” is outside src/ and the template: ${resolved.id}`)
      return resolved
    },
    // Whatever resolution path Vite took, the bundle must stay within src and the kit.
    generateBundle(_options, bundle) {
      const kit = realpathSync(resolve(root, "node_modules"))
      const allowed = path => inside(src, path) || inside(kit, path) || path === resolve(root, "index.html")
      for (const id of this.getModuleIds()) if (!id.startsWith("\0") && !allowed(file(id))) this.error(`Module is outside src/ and the template: ${id}`)
      for (const item of Object.values(bundle))
        for (const name of item.type === "asset" ? (item.originalFileNames ?? []) : [])
          if (!allowed(resolve(root, name))) this.error(`File is outside src/ and the template: ${name}`)
    },
  }
}
