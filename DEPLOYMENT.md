# Deployment metadata

- Release identity: `0.9.0-r3` (from freeze `frozen-v0.9.0-r3`; playable title **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.9.0-r3/`
- Hosting: GitHub Pages, branch `main`, project site base `/dragon-master-trilli/`
- IDB name / Workbox cache prefix: `dragon-master-trilli` (unchanged from 0.6.0–0.8.2)
- NavigationRoute denylist: `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- SW includes `da-activate-navigate` upgrade logic: on a real upgrade, claims clients and navigates open tabs.
- Save schema is v5. Rejected freeze `frozen-v0.9.0` (ZIP `9b66fc1f…`) and repackaged `frozen-v0.9.0-r2` (ZIP `4510876f…`) were not used.
- ZIP SHA256: `936c722a07b29ef02a5550abd9e8c46d7b59ead547e965d84b8ffd35c48144e0`
- Bundle: `assets/index-BKrciRb4.js`
