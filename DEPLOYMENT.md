# Deployment metadata

- Release identity: `0.9.6` (from freeze `frozen-v0.9.6`; playable title **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.9.6/`
- Source PR (not merged by this publish): https://github.com/codekay1/dragon-adventures-src/pull/3 (`integrate/v0.9.6` @ `6215654`)
- Hosting: GitHub Pages, branch `main`, project site base `/dragon-master-trilli/`
- IDB name / Workbox cache prefix: `dragon-master-trilli` (unchanged from 0.6.0–0.9.5-r3)
- NavigationRoute denylist: `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- SW includes `da-activate-navigate` upgrade logic: on a real upgrade, claims clients and navigates open tabs.
- Workbox `ignoreURLParametersMatching` includes `/^debug$/` so `?debug=keys` is offline-safe.
- Save schema remains v5. `testApi` is false. Debug helpers (`?debug=keys&rock=front`, Key K, `?debug=keys&fire=hold`) are inert without `?debug`.
- ZIP SHA256: `461a2c89848714e4ed2c050d5891a2def4f65e2766adc5c52be13e00fe14915a`
- Bundle: `assets/index-DvvvUYdF.js` (CSS `assets/index-YIatwtby.css`)
