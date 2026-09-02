# kushpal.github.io

My personal website — <https://kushpal.github.io>

Plain static HTML with one stylesheet and one small script. No framework, no build
step: edit a file, commit, and GitHub Pages serves it.

## Layout

```
index.html          Home
about.html          Bio, experience, education, skills
projects.html       Selected work
blog.html           Articles and press coverage
resume.html         PDF résumé viewer
404.html            Not-found page
assets/css/site.css Design tokens + every style on the site
assets/js/site.js   Theme toggle, mobile nav
```

`daily_c.html`, `c.html`, `english.html` and `navbar.html` are redirects kept so
that old links still land somewhere sensible.

## Editing

- **Colours, spacing, type** — the `:root` block at the top of `assets/css/site.css`.
  The dark palette is redefined twice below it (once for `prefers-color-scheme`,
  once for the explicit `[data-theme="dark"]` toggle); change both.
- **Navigation** — the `<ul class="nav-links">` block, repeated in each page's header.
  Set `aria-current="page"` on the current page's link.
- **A new project** — copy an `<article class="card">` block in `projects.html`.
- **Résumé** — replace `kushpal_IITGN_Resume.pdf` with the same filename.

## Previewing locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```
