# assets/css/NOTES.md

## Files

### main.css
**The primary custom stylesheet. Loaded on every page.**

Contains:
- `main > .container` padding to clear the fixed navbar (60px top)
- `nav.navbar` — the teal gradient (this is the brand's most distinctive visual element — do not change without explicit approval)
- `.img-wrapper` — overflow scroll container used on some detail pages
- CSS custom properties overriding Bootstrap's `--bs-primary` for teal brand colors
- Google Font import for Plus Jakarta Sans (headings)
- `--bs-font-sans-serif` override for heading elements

### lxd-album-template.css
**Bootstrap album example boilerplate.** Loaded on `lxd.html` and some detail pages.

Mostly unused placeholder styles from the Bootstrap Album example. The `.nav-scroller` rules here are not used. Safe to leave as-is — do not add new rules here; put new rules in `main.css`.

### sticky-nav-footer.css
**Duplicate of lxd-album-template.css.** Same content, legacy artifact from early site setup. Not worth removing now as it may be referenced somewhere. Do not add rules here.

---

## What Goes Where

| New style needed | Where to put it |
|-----------------|----------------|
| Sitewide (affects all pages) | `main.css` |
| LXD filter UI | `main.css` (under a `/* LXD Filter */` comment) |
| Writing page specific | `main.css` (under a `/* Writing */` comment) |
| One-off for a detail page | `main.css` with a scoped selector |

---

## CSS Custom Properties (Bootstrap Overrides)

Defined in `main.css` on `:root`. These override Bootstrap's default blue primary with the teal brand palette:

```css
:root {
  --bs-primary: #097967;
  --bs-primary-rgb: 9, 121, 103;
  --bs-link-color: #097967;
  --bs-link-hover-color: #065e50;
  --bs-btn-bg: #097967;          /* btn-primary background */
  --bs-btn-border-color: #097967;
  --bs-btn-hover-bg: #065e50;
  --bs-btn-hover-border-color: #065e50;
  --bs-btn-active-bg: #044C44;
  --bs-btn-active-border-color: #044C44;
}
```

Note: Bootstrap 5.3 uses component-level CSS vars so full override requires targeting `.btn-primary` directly in addition to `:root` — see `main.css` for the full implementation.
