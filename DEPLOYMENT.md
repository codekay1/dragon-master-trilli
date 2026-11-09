# Deployment metadata

- Release identity: `0.3.1-offline-gate`
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.3.1-offline-gate/`
- Hosting: GitHub Pages, branch `main`, site root `/` (project site base `/dragon-master-trilli/`)
- Runtime paths are relative (`./…`); SW registers `./sw.js` with `scope: "./"`; manifest `start_url`/`scope` are `./` — compatible with project-site subpath without rebasing the frozen bundle
- No Cloudflare mutation for this publish path
- Channel: polished-internal-candidate (QA)
