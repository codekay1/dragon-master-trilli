# Deployment metadata

- Release identity: `0.9.5-r3` (from freeze `frozen-v0.9.5-r3`; playable title **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.9.5-r3/`
- Hosting: GitHub Pages, branch `main`, project site base `/dragon-master-trilli/`
- IDB name / Workbox cache prefix: `dragon-master-trilli` (unchanged from 0.6.0–0.9.4-r2)
- NavigationRoute denylist: `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- SW includes `da-activate-navigate` upgrade logic: on a real upgrade, claims clients and navigates open tabs.
- Workbox `ignoreURLParametersMatching` includes `/^debug$/` so `?debug=keys` is offline-safe.
- Save schema remains v5. Superseded freezes `frozen-v0.9.5` (ZIP `a21270e2…`) and `frozen-v0.9.5-r2` (ZIP `4250337b…`) were not used.
- ZIP SHA256: `8a39ce095cd3c34249eca80fb091cdbbeea0764c600904dfb951c0d4310d258c`
- Bundle: `assets/index-DGXl-Ueq.js` (CSS `assets/index-YIatwtby.css`)
