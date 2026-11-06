# Sergi Martínez — personal research website

A responsive, accessible personal website for research opportunities, scientific collaborations and robotics work. Built with plain HTML, CSS and JavaScript for GitHub Pages; no build tools, dependencies or paid services are required.

Website: https://sergim96.github.io/

## Edit the site

- `index.html`: biography, research projects, publications, software, awards and contact details.
- `assets/style.css`: colours, typography and responsive layouts.
- `assets/site.js`: navigation, research video dialogs, BibTeX entries and citation copying.
- `assets/Sergi-Martinez-CV.pdf`: downloadable CV. Replace this file when the CV changes.
- `assets/images/`: portrait and research figures.
- `sitemap.xml`: update `lastmod` after substantive content changes.

Publication titles and author names are written directly into the HTML so the research remains readable and indexable without JavaScript. Research videos load from YouTube’s privacy-enhanced domain only after a visitor chooses to watch. There are no analytics, cookies set by this site, contact-form services or tracking scripts.

When a publication’s status changes, update its status in `index.html` and its BibTeX note in `assets/site.js`. The SysID paper is **conditionally accepted**, while ODYN is **under review**. The Crocoddyl estimation contribution is linked as a **draft pull request**.

The viva date, immediate availability and institutional affiliation reflect information supplied on 6 November 2026; update these after the viva or when circumstances change. Internship dates are omitted from the web biography. The downloadable CV retains the dates supplied by its author.

## Preview locally

From this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. Stop the server with Ctrl+C when finished.

## GitHub Pages

This repository is intended to be named `sergim96.github.io`. In **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/ (root)`. The `.nojekyll` file allows GitHub Pages to serve the static files directly. Changes pushed to `main` publish automatically.

All public-site content is in this repository; it does not require access to private research repositories.

## Content and image provenance

- Biography and experience: the author’s CV and [RoMI Lab profile](https://www.romilab.org/team/sergi-martinez).
- Portrait: [RoMI Lab team photograph](https://www.romilab.org/images/team/sergi-martinez.png).
- `b1-z1.png` and `system-identification.png`: figures from the author’s co-authored [SysID paper](https://arxiv.org/abs/2602.16358), from its [HTML version](https://arxiv.org/html/2602.16358v1).
- `multi-contact.png`: figure from the author’s co-authored [multi-contact estimation paper](https://arxiv.org/html/2403.17161v2).
- The approximately 50% friction-error reduction is from the SysID paper’s Section IX-D, Table I: energy-observation ablation in the biped and quadruped simulation models, averaged over 100 random initialisations per model. It is not a hardware performance claim.
- RA-L publication metadata: [DOI 10.1109/LRA.2025.3550845](https://doi.org/10.1109/LRA.2025.3550845).
- Crocoddyl contribution: [public draft PR #1525](https://github.com/loco-3d/crocoddyl/pull/1525).

Research photographs and figures retain their original authorship and applicable rights. This repository does not grant an additional licence to redistribute the research imagery or portrait. The favicon and site layout were created for this website.
