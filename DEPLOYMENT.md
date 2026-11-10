# Deployment metadata

- Release identity: `0.8.0` (from freeze `frozen-v0.8.0-r2`; playable title **Dragon Adventures**)
- Source frozen path (box, not in repo): `/workspace/dragon-master-trilli/release/frozen-v0.8.0-r2/`
- Hosting: GitHub Pages, branch `main`, project site base `/dragon-master-trilli/`
- IDB name / Workbox cache prefix: `dragon-master-trilli` (unchanged from 0.6.0 / 0.7.0)
- NavigationRoute denylist: `[/^\/api/, /\/test-[^/]*(\/|$)/]` so unlisted `/test-*` paths load from network
- SW includes `da-activate-navigate` upgrade logic: on a real upgrade, claims clients and navigates open tabs.
- No unlisted test folder on this branch. Rejected freeze `frozen-v0.8.0` (ZIP `033c3108…`) was not used.
- ZIP SHA256: `33a1099ba07f43ab80bd03b7be7a9666931dbd622e84189497cbc59222ea9d5b`
- Bundle: `assets/index-BTK7CKVm.js`
