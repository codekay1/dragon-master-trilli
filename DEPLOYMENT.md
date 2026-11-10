# Deployment metadata

- Release identity: `0.9.3-r2` (from freeze `frozen-v0.9.3-r2`; playable title **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.9.3-r2/`
- Hosting: GitHub Pages, branch `main`, project site base `/dragon-master-trilli/`
- IDB name / Workbox cache prefix: `dragon-master-trilli` (unchanged from 0.6.0–0.9.2)
- NavigationRoute denylist: `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- SW includes `da-activate-navigate` upgrade logic: on a real upgrade, claims clients and navigates open tabs.
- Workbox `ignoreURLParametersMatching` includes `/^debug$/` so `?debug=keys` is offline-safe.
- Save schema remains v5. Superseded freeze `frozen-v0.9.3` (ZIP `92570f45…`) was not used.
- ZIP SHA256: `b0c6084e8480d4d8f93f1b9bf7cdccd167355e9699b385a72e837629d1ace1c3`
- Bundle: `assets/index-m6Ge8gRU.js`
