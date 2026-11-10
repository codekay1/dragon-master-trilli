# Deployment metadata

- Release identity: `0.8.1` (from freeze `frozen-v0.8.1`; playable title **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.8.1/`
- Hosting: GitHub Pages, branch `main`, project site base `/dragon-master-trilli/`
- IDB name / Workbox cache prefix: `dragon-master-trilli` (unchanged from 0.6.0 / 0.7.0 / 0.8.0)
- NavigationRoute denylist: `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- SW includes `da-activate-navigate` upgrade logic: on a real upgrade, claims clients and navigates open tabs.
- Save schema remains v4. Bugfix over 0.8.0-r2: short Q taps fire a 0.6s burst; F feeds a nearby dragon from any drumstick in the bag.
- ZIP SHA256: `4f883e8f0a9bd3e1e571cfcb60a89fdaf3c7c2e70a049595f110554f5bb02de6`
- Bundle: `assets/index-B5ixTGTd.js`
