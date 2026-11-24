import {join} from 'node:path';

// Chromium appends a GUID and .crdownload. Keep this runtime-owned component
// short for Windows MAX_PATH without moving files outside the private session.
export function browserDownloadsPath(directory){return join(directory,'d');}

// Megaladata chooses its save mechanism while loading. File System Access writes
// bypass Playwright downloads and MCP's chooser interception rejects its picker.
// Hide only that capability before page scripts so Megaladata uses native downloads.
export function browserDownloadScript(megaladataUrl) {
  const origin = megaladataUrl ? new URL(megaladataUrl).origin : null;
  return `if (${origin === null ? 'true' : `globalThis.location.origin === ${JSON.stringify(origin)}`}) delete globalThis.showSaveFilePicker;`;
}
