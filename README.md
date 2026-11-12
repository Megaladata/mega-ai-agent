# Mega AI Agent

A desktop app for working with Megaladata using AI. The Megaladata Dock client is bundled with the app together with Node.js, Playwright, and Chromium. The project is based on OpenCode; information about the original project and licenses is kept in the [documentation archive](docs/upstream/README.md).

## Linux

Supported target: Ubuntu 22.04+ and Debian 12+, x86_64. The primary installer is a DEB; AppImage is an extra portable option. Local candidates live in `packages/desktop/dist`; they have not been published or digitally signed.

```sh
sudo apt install ./mega-ai-agent-linux-amd64.deb
```

After installation, start **Mega AI Agent**. The first-run wizard asks for the Megaladata AI server key, the Megaladata URL, username, and password. The default URL is `https://agent.megaladata.com/app/`, the default user is `user`, and the password is empty. The same fields are available in the **Megaladata** settings section. The file folder is derived from the username: `/<user>`.

The model is connected separately through the app's regular provider settings. The bundled Dock does not require a plugin, Node.js, Python, or a browser on the user's machine. On Linux, secrets are stored in plaintext with mode 0600 in the private profile directory.

## Development and verification

- [Build, install, and test Linux](docs/testing/mega-ai-agent/linux.md).
- [Current implementation status and limits](docs/migration/linux-implementation-checkpoint.md).
- [Windows and macOS testing on dedicated machines](docs/testing/mega-ai-agent/README.md).
- [Agreed design](docs/superpowers/specs/2026-09-16-mega-ai-agent-desktop-design.md).
- [Origin of the migrated sources](docs/migration/source-map.json).

Workspace dependencies are installed with Bun 1.3.14. Tests and `bun typecheck` run from the relevant package directories, not from the repo root. The build pins runtime versions and hashes; on first launch the app does not install anything through npm.

Auto-update is disabled until a dedicated update channel is verified. Old OpenCode wrapper/desktop installs and the Megaladata Dock repository are not removed automatically. Codex/Hermes client integrations are kept in the migration archive and are not part of active app development.

## Node handler development

The [single instruction set](docs/node-development/README.md) covers the readiness registry, the parallel or sequential orchestrator queue, work on one node, creating a subplan, standalone CLI acceptance, and historical evidence.

## Licenses

The [original project license](LICENSE), the migrated Dock client license, and third-party notices are preserved. Matching sources and the hash manifest ship with local installers. Archived OpenCode documents describe the original project and are not an installation guide for Mega AI Agent.
