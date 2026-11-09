# Deployment metadata

- Release identity: `0.6.0` (from freeze `frozen-v0.6.0-rc2`; playable title **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.6.0-rc2/`
- Hosting: GitHub Pages, branch `main`, project site base `/dragon-master-trilli/`
- IDB name / Workbox cacheId: `dragon-master-trilli` (unchanged)
- NavigationRoute denylist: `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- Unlisted test folder `/test-060a4/` removed (Winston request). Root SW denylist for `/test-*` retained.
- ZIP SHA256: `933f4975f12cb9ec0372a6761a91a846d09e01191bea139c7306cbd6797c311c`
