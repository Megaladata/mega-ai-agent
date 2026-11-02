# Megaladata AI Agent icons

The artwork is the supplied PNG masters in `masters/`: `mark-512.png` for every
size except 16, and `mark-16.png` for the 16px frames. Larger and smaller
frames are scaled from the 512px master. Windows, Linux, and macOS receive the
same square picture; the operating system supplies the rounded mask.

From `packages/desktop`, using the repository's pinned Bun:

```sh
bun scripts/generate-icons.ts --preview # preview only, before integration
bun scripts/generate-icons.ts           # all committed assets
bun scripts/generate-icons.ts --check   # read-only reproducibility check
bun test scripts/icons.test.ts scripts/copy-icons.test.ts electron-builder.config.test.ts
bun scripts/copy-icons.ts prod
```

Rendering uses the pinned development dependency `sharp@0.33.5`. The generator
packs independently rendered PNG frames into ICO/ICNS; no runtime dependency is
added. Serve `preview/index.html` locally to compare the variants on light, dark
and colored backgrounds.

- Windows: ICO frames 16, 24, 32, 48, 64, 128, 256. The 16px frame is the pixel master.
- Linux: explicit PNG set in each channel's `linux/`, sizes 16, 24, 32, 48, 64,
  96, 128, 256, 512. `icon.png` is the 512px master.
- macOS: ICNS classic slots 16–1024 plus 16pt/32pt/128pt/256pt Retina slots.
  `dock.png` is the 512px master scaled to 1024 and is used only in development;
  installed apps use their bundle ICNS.
- Apple touch is 180px. PWA assets are 192/512px. The fin already sits inside
  the maskable safe circle, so the maskable files are the same scaled square.

Channels prod/beta/dev have identical art. `copy-icons.ts` stages only the four
active top-level application files and `linux/`, removing stale staging files.
Unused Microsoft Store tile logos are not kept. Historical Android/iOS assets
remain unmodified and are not packaged. Top-level 32/64/128 PNG aliases are
regenerated for source compatibility.

Generated web assets live in `packages/ui/src/assets/megaladata`, are copied as
regular files to both app public directories (Windows checkout compatibility),
and to the landing page's assets. Their `megaladata-*-v1` URLs are separate from
legacy shared documentation favicons. Browser app and landing page have distinct
manifests and retain their respective product names. UI mark/splash uses the
same generated SVG; notifications use its PNG representation.

Source validation does not establish installed appearance. Linux requires a new
build and installation; native Windows/macOS visual acceptance must be performed
on those systems. See the approved platform-icons design and acceptance report.
