# Xin Zhou’s academic homepage

Personal website for Xin Zhou, Research Scientist at Singapore Management University.
Built with Jekyll and published by GitHub Pages from the `master` branch.

## Update content

- `_data/profile.yml`: identity, contact links, research interests, education, teaching, honors, and service.
- `_data/publications.yml`: the complete publication list. Preserve author order. Add a `selected` number to show an entry on the homepage; the number determines its order. Only add `paper` and `code` URLs once verified.
- `_data/navigation.yml`: the main navigation.
- `_includes/academic/home.html`: introductory wording and homepage sections.

The initial migration preserves the 16 papers from the original homepage. Existing titles, author order, and years are retained. The original `EMSM` typo was corrected to `EMSE` against the [SMU publication record](https://ink.library.smu.edu.sg/sis_research/10106/). The email address comes from the original repository configuration and the author’s published papers. Research summaries paraphrase the linked papers; no personal information was copied from the visual references.

## Pages and presentation

- `/`: profile, research interests, selected publications, education, honors, and contact.
- `/publications/`: publications grouped by year, with browser-side search and year filters.
- `/experience/`: research appointment, education, teaching, service, and honors.
- Existing `/about/`, `/about.html`, `/cv/`, `/resume`, `/resume/`, `/service/`, and `/services/` links redirect to the corresponding pages.

The layout is in `_layouts/academic.html`, components in `_includes/academic/`, styles in `assets/css/academic.css`, and optional interactions in `assets/js/academic.js`. Navigation and publication content remain usable without JavaScript. The color theme follows the system preference until the reader selects a theme; their choice is stored locally.

Fonts are hosted locally in `assets/fonts/`, along with their SIL Open Font License notices. The original portrait is reused without altering the image. Unused AcademicPages example pages and collections are retained in source but excluded from the built website in `_config.yml`.

## Local development

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

Open `http://localhost:4000`. To check a production build compatible with GitHub Pages:

```sh
bundle exec jekyll build --safe
```

Commit and push to `master` to trigger the existing Pages deployment. No Node build step is required.

## Credits

The redesigned presentation draws visual inspiration from [Jieke Shi](https://jiekeshi.tech/), [Ting Zhang](https://happygirlzt.com/academic.html), [Junda He](https://jundahe.github.io/), and [Guang Yang](https://ntdxyg.github.io/en/). The repository originated from AcademicPages, based on Michael Rose’s Minimal Mistakes theme; its original MIT license is preserved in `LICENSE`.
