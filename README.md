# Dragon Master Trilli (public runtime)

Internal QA candidate — **not** final quality-accepted.

Offline-friendly Chromebook dragon adventure. This repository contains **compiled runtime assets only** (no game source, workbook, photos, or private intake).

## Play

Open the GitHub Pages URL for this repository (project site). On first visit while online, wait until the HUD shows **Offline ready**, then bookmark or install. After that you can cold-launch offline.

ZIP under `download/` is a static-file mirror for backup/hosting — **not** a double-click installer. Prefer the HTTPS Pages URL over `file://`.

## Privacy & saves

- No accounts. Saves stay in this browser on this Chromebook for **this site origin** only (IndexedDB / local storage).
- Export JSON backups from pause menu. Powerwash or clearing site data can erase progress.
- Changing origin/port (including a different Pages URL) starts a fresh empty save.
- Persistence is requested, not guaranteed.
- No analytics or accounts in this build; gameplay does not require network after the first successful cache.

## Version

See `VERSION.json` (`0.3.1-offline-gate`). Third-party notices: `NOTICE.txt` and `licenses/`.

## Deploy note

Published via GitHub Pages from this public runtime-only tree. Frozen release identity hashes: see `FROZEN-SHA256SUMS.txt` (byte-identical to the frozen release `SHA256SUMS.txt`).
