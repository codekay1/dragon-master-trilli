# Deployment metadata

- Release identity: `0.9.2` (from freeze `frozen-v0.9.2`; playable title **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.9.2/`
- Hosting: GitHub Pages, branch `main`, project site base `/dragon-master-trilli/`
- IDB name / Workbox cache prefix: `dragon-master-trilli` (unchanged from 0.6.0–0.9.1-r2)
- NavigationRoute denylist: `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- SW includes `da-activate-navigate` upgrade logic: on a real upgrade, claims clients and navigates open tabs.
- Workbox `ignoreURLParametersMatching` includes `/^debug$/` so `?debug=keys` is offline-safe.
- Save schema remains v5. Bugfix over 0.9.1-r2: friendlier Q/F, keep-playing overlay title in the JS bundle, pointer-lock-loss overlay, gated `?debug=keys` log.
- ZIP SHA256: `4c86b2d27317c21972e64d76a896a65a8b37229acfc04810b79b8df3d0dcef29`
- Bundle: `assets/index-Dl-yUY-R.js`
