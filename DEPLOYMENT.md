# Deployment metadata

- Release identity: `0.5.5` (playable title: **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.5.5/`
- Hosting: GitHub Pages, branch `main`, site root `/` (project site base `/dragon-master-trilli/`)
- 0.5.5 = 0.5.4 + NavigationRoute denylist `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- IDB name / Workbox cacheId unchanged from 0.5.4
- No Cloudflare mutation for this publish path
- Channel: hosted-qa-fix-candidate (QA)
- ZIP SHA256: `0ac71646703c4e0e0f2f22c49e872934ab1fe071f5062a510ce11c76cf041a89`

## Unlisted test build

- Path: `/test-060a4/` (no link from root index)
- Identity: `0.6.0-a4t2` isolated TEST (IDB `dragon-master-trilli-test`, Workbox prefix `dragon-master-trilli-test`)
- Root NavigationRoute denylist lets this path load from network under 0.5.5+
