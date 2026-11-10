# Deployment metadata

- Release identity: `0.8.2` (from freeze `frozen-v0.8.2`; playable title **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.8.2/`
- Hosting: GitHub Pages, branch `main`, project site base `/dragon-master-trilli/`
- IDB name / Workbox cache prefix: `dragon-master-trilli` (unchanged from 0.6.0 / 0.7.0 / 0.8.0 / 0.8.1)
- NavigationRoute denylist: `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- SW includes `da-activate-navigate` upgrade logic: on a real upgrade, claims clients and navigates open tabs.
- Save schema remains v4. Bugfix over 0.8.1: Q tap fire lasts ~1.2s with lingering glow; F on a tamed dragon shows a friend toast.
- ZIP SHA256: `31b6f73aede9609ccf0765a3521041b38d023d3ad112c271d4459b312e040a2b`
- Bundle: `assets/index-Bb3r4Giw.js`
