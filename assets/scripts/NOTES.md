# assets/scripts/NOTES.md

## Files

### popovers.js
**Bootstrap popover initializer + accordion scroll behavior.**

- Initializes all `[data-bs-toggle="popover"]` elements on page load
- Adds smooth scroll-to-card behavior when a Bootstrap collapse/accordion opens
- **Uses jQuery** (`$`) for the scroll animation — jQuery must be loaded before this script on any page that uses it
- Loaded only on detail pages that have popovers or accordions (not on index/section pages)

### lxd-filter.js
**LXD card filter system — vanilla JS, no jQuery.**

- Reads `data-tags` attribute on each `.col` wrapper in the card grid
- Shows/hides cards based on active filter button
- Manages `aria-pressed` state on filter buttons for accessibility
- Filter state is not persisted in URL (by design for MVP)
- Loaded only on `lxd.html`

---

## jQuery Dependency

jQuery is loaded via CDN on pages that use `popovers.js`. It is NOT loaded globally — only add it to pages that need it. Do not introduce new jQuery usage; prefer vanilla JS for any new scripts.

Pages currently loading jQuery: check individual page `<head>` tags (search for `jquery` across html files).

---

## Adding New Scripts

- Keep scripts small and page-specific
- Place `<script>` tags at end of `<body>`, after the Bootstrap bundle
- No build tools — plain `.js` files only
- New sitewide utilities go in `assets/scripts/` with a descriptive name
