# shrinkhlashrivastava.github.io

Portfolio site for Shrinkhla Shrivastava — product designer. Static HTML and CSS,
no build step, served directly by GitHub Pages from the `main` branch.

## Structure

```
index.html                     Home: hero, selected work, about preview, recommendations
about/index.html               About, experience snapshot, testimonials
work/<project-slug>/index.html One case study per folder; the folder name is the public URL
assets/
  css/site.css                 Shared stylesheet for home, about and the short case studies
  css/case-angelpbx.css        Page-scoped styles for the Smart IVR deep dive
  js/site.js                   Shared behaviour (footer year, testimonial carousel)
  js/lightbox.js               Click-to-enlarge for case study evidence images
  images/brand/                Logo, avatar, portrait
  images/<project-slug>/       Case study imagery, one folder per project
  resume.pdf                   Linked from the header and footer of every page
.nojekyll                      Serve files as-is; skip Jekyll processing
```

## Conventions

- **Paths** are absolute from the site root (`/assets/...`) so a page can move
  between folders without rewriting its references.
- **Names** are lowercase kebab-case and describe content, not export order:
  `discovery-and-reservation.png`, not `3844.png`.
- **Project slugs** match across `work/`, `assets/images/` and the home page card,
  so one project's files stay together. Slugs are public URLs — renaming one breaks
  shared links.
- **Styles** live in `assets/css/`. Anything used by more than one page belongs in
  `site.css`; a long-form page with its own layout gets `case-<slug>.css`.
- **Images** carry `width`, `height` and descriptive `alt`; anything below the fold
  also carries `loading="lazy"`.

## Case studies

| Project | URL | Status |
| --- | --- | --- |
| AngelPBX — Smart IVR | `/work/angelpbx/` | Live |
| SAVOR Hospitality | `/work/savor/` | Live |
| Dealer Operations Platform | `/work/dealer-platform/` | Coming soon (card disabled on home) |

## Local preview

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Use a server rather than opening the files
directly — the root-absolute asset paths do not resolve over `file://`.
