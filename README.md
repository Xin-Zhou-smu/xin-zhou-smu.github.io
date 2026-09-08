# Xin Zhou’s academic homepage

Personal website for Xin Zhou, Research Scientist at Singapore Management University.
Built with Jekyll and published by GitHub Pages from the `master` branch.

## Update content

- `_data/profile.yml`: identity, contact links, research interests, education, teaching, honors, and service.
- `_data/publications.yml`: the publication list. Preserve author order and use the corresponding Google Scholar record's year for `year`, including when publisher dates differ. Add a `selected` number to show an entry on the homepage; the number determines its order. Only add `paper`, `preprint`, and `code` URLs once verified. Mark arXiv-only works with `status: preprint`.
- `_data/navigation.yml`: the main navigation.
- `_includes/academic/home.html`: introductory wording and homepage sections.

The homepage introduction uses the author-approved biography. Publication and first-author counts are derived from entries without `status: preprint` (currently 30 published works, including one book chapter, and 11 first-author works). The statistics line uses the same publication count; citation and h-index totals come from the Google Scholar **All** columns, stored with their verification date in `profile.scholar_metrics` (1,891 citations and h-index 20, checked on 2026-09-08). Refresh these values from the linked profile when updating the metrics. The compact statistics line takes presentation inspiration from Guang Yang’s homepage.

The annual citation chart between the biography and research interests reads `profile.scholar_metrics.citations_by_year`. These are the five bars displayed on Scholar: 2022–2026 (11, 58, 269, 796, 737). They are annual counts, not cumulative totals, and do not include earlier years. `partial: true` distinguishes an unfinished year; update this flag along with the data and `checked_on` date. The chart uses proportional bars with a zero baseline, visible values, accessible labels, and the site's light/dark palette; it works without JavaScript or external chart services.

The publication list was refreshed on 2026-09-08 from [Xin Zhou's Google Scholar](https://scholar.google.com/citations?user=eQxzKOUAAAAJ&hl=en&pagesize=100&sortby=pubdate): 42 records become 39 distinct works (6 in 2026 and 14 in 2025). `scholar_ids` maps every source record to its entry. SE-Jury, SeCuRepair, and the code smell detection study each merge their preprint and published records; the published Scholar entry supplies `year`. Other entries retain their own Scholar year, even when their latest title or venue is newer.

Full author lists, current titles, venues, and links were checked against publisher-deposited Crossref metadata, ACL Anthology, and arXiv. `source` records the verification URL. For example, the latest ICSE vulnerability-detection version updates author order, and the TSE bug-localization paper corrects Scholar's “Lulu Lulu” to “Lulu Wang”. `aliases` keeps older titles searchable, including SecureAgentBench and Mind the Gap. Do not create a second entry when a preprint is published; update its metadata and retain the arXiv URL as `preprint`.

Homepage selections include all 21 qualifying CCF-A papers in the current list (TOSEM, TSE, ICSE, ASE, ACL, and ESEC/FSE), plus the existing SWE-RPG, LessLeak-Bench, and CCBERT selections: 24 entries ordered by Scholar year, newest first. Classification follows the [CCF seventh-edition directory released in 2026](https://www.ccf.org.cn/Academic_Evaluation/By_category/2026-03-31/870181.shtml). Conference selections count full/regular papers; NIER short papers are not counted as CCF-A. CSUR is not listed in this directory. Recheck venue and paper type when adding a selection; keep `year` tied to Scholar independently of venue classification.

The email address comes from the original repository configuration and the author’s published papers. Research summaries paraphrase the linked papers; no personal information was copied from the visual references.

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
