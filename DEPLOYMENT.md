# Deployment metadata

- Release identity: `0.9.1-r2` (from freeze `frozen-v0.9.1-r2`; playable title **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.9.1-r2/`
- Hosting: GitHub Pages, branch `main`, project site base `/dragon-master-trilli/`
- IDB name / Workbox cache prefix: `dragon-master-trilli` (unchanged from 0.6.0–0.9.0-r3)
- NavigationRoute denylist: `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- SW includes `da-activate-navigate` upgrade logic: on a real upgrade, claims clients and navigates open tabs.
- Save schema remains v5. Plain freeze `frozen-v0.9.1` (ZIP `09435ef7…`, over Low perf cap) was not used.
- ZIP SHA256: `7d6e055303e5195d0e0d9ee9ba63cf82b517a8b2a67a396d0a5fcee4f7bf6316`
- Bundle: `assets/index-CgylUb7I.js`
