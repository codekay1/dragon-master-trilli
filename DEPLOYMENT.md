# Deployment metadata

- Release identity: `0.9.4-r2` (from freeze `frozen-v0.9.4-r2`; playable title **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.9.4-r2/`
- Hosting: GitHub Pages, branch `main`, project site base `/dragon-master-trilli/`
- IDB name / Workbox cache prefix: `dragon-master-trilli` (unchanged from 0.6.0–0.9.3-r2)
- NavigationRoute denylist: `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- SW includes `da-activate-navigate` upgrade logic: on a real upgrade, claims clients and navigates open tabs.
- Workbox `ignoreURLParametersMatching` includes `/^debug$/` so `?debug=keys` is offline-safe.
- Save schema remains v5. Superseded freeze `frozen-v0.9.4` (ZIP `a8698ad1…`) was not used.
- ZIP SHA256: `5208fee96fe24b85b26987b983f8c06212d48b60dd4993199f3c1a7ea0169bb0`
- Bundle: `assets/index-1BWUeOKN.js`
