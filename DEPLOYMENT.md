# Deployment metadata

- Release identity: `0.5.2` (playable title: **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.5.2/`
- Hosting: GitHub Pages, branch `main`, site root `/` (project site base `/dragon-master-trilli/`)
- Runtime paths are relative (`./…`); SW registers `./sw.js` with `scope: "./"`; manifest `start_url`/`scope` are `./` — compatible with project-site subpath without rebasing the frozen bundle
- Textures: shipped WebP pack under `textures/v1/` only; PNG texture masters are **not** published
- No Cloudflare mutation for this publish path
- Channel: hosted-qa-fix-candidate (QA)
- ZIP SHA256: `c57878742d038778be31da89461bae2bfa1c327bdfc89b1e27db60bde0c40d95`
