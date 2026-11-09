# Deployment metadata

- Release identity: `0.5.3` (playable title: **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.5.3/`
- Hosting: GitHub Pages, branch `main`, site root `/` (project site base `/dragon-master-trilli/`)
- Runtime paths are relative (`./…`); SW registers `./sw.js` with `scope: "./"`; manifest `start_url`/`scope` are `./`
- Textures: shipped WebP pack under `textures/v1/` only; PNG texture masters are **not** published
- No Cloudflare mutation for this publish path
- Channel: hosted-qa-fix-candidate (QA)
- ZIP SHA256: `9c19cc883b5b72700fd928f068f449ec76c7b74e075ce3858c3aada209ff9a99`
- Note: frozen `VERSION.json` bytes had an unclosed `notes` string; deploy `VERSION.json` is valid JSON with hosting metadata. `FROZEN-SHA256SUMS.txt` preserves the frozen file hash.
