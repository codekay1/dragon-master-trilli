# Deployment metadata

- Release identity: `0.5.4` (playable title: **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.5.4/`
- Hosting: GitHub Pages, branch `main`, site root `/` (project site base `/dragon-master-trilli/`)
- Runtime paths are relative (`./…`); SW registers `./sw.js` with `scope: "./"`; manifest `start_url`/`scope` are `./`
- Hotfix over 0.5.3: terrain group added to scene; pitch clamp −60°..+25°; recenter C/Home/Level view
- Textures: shipped WebP pack under `textures/v1/` only; PNG texture masters are **not** published
- No Cloudflare mutation for this publish path
- Channel: hosted-qa-fix-candidate (QA)
- ZIP SHA256: `658d5c49b730d030fd312547e0e18303e8729692a177a1945cd0447118e31400`
