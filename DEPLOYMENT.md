# Deployment metadata

- Release identity: `0.9.7-r2` (from freeze `frozen-v0.9.7-r2`; playable title **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.9.7-r2/`
- Source PR (not merged by this publish): https://github.com/codekay1/dragon-adventures-src/pull/4 (`integrate/v0.9.7` @ `725fd285`)
- Hosting: GitHub Pages, branch `main`, project site base `/dragon-master-trilli/`
- IDB name / Workbox cache prefix: `dragon-master-trilli` (unchanged from 0.6.0–0.9.6)
- NavigationRoute denylist: `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- SW includes `da-activate-navigate` upgrade logic: on a real upgrade, claims clients and navigates open tabs.
- Workbox `ignoreURLParametersMatching` includes `/^debug$/` so `?debug=keys` is offline-safe.
- Save schema remains v5. `testApi` is false. Debug helpers (`?debug=keys&rock=front`, Key K, `?debug=keys&fire=hold`) are inert without `?debug`.
- ZIP SHA256: `b7b0e513650be30dcc5a43305a1b74ea45ad56b65a88fd4dfd236a3403f98e00`
- Bundle: `assets/index-CSqB9oqt.js` (CSS `assets/index-YIatwtby.css`)
