# Sergi Martínez — personal research website

A responsive, accessible personal website for research opportunities, scientific collaborations and robotics work. Built with plain HTML, CSS and JavaScript for GitHub Pages; no build tools, dependencies or paid services are required.

Website: https://sergim96.github.io/

## Edit the site

- `index.html`: biography, research projects, publications, software, awards and contact details.
- `assets/style.css`: colours, typography and responsive layouts.
- `assets/site.js`: navigation, research video dialogs, BibTeX entries and citation copying.
- `assets/Sergi-Martinez-CV.pdf`: downloadable CV. Replace this file when the CV changes.
- `assets/images/`: portrait and research figures.
- `assets/videos/`: short, silent experiment loops with matching poster images.
- `sitemap.xml`: update `lastmod` after substantive content changes.

Publication titles and author names are written directly into the HTML so the research remains readable and indexable without JavaScript. Research videos load from YouTube’s privacy-enhanced domain only after a visitor chooses to watch. There are no analytics, cookies set by this site, contact-form services or tracking scripts.

When a publication’s status changes, update its status in `index.html` and its BibTeX note in `assets/site.js`. The SysID paper is **conditionally accepted**, while ODYN is **under review**. The Crocoddyl estimation contribution is linked as a **draft pull request**.

The institutional affiliation reflects information supplied on 6 November 2026. Internship dates are omitted from the web biography. The downloadable CV retains the details supplied by its author.

Experiment loops load and play only when their panel is visible. Each has a pause/play control. Videos pause when the tab is hidden or a dialog is open; visitors who prefer reduced motion see the poster until they choose to play. Full YouTube videos remain available separately.

The **Research in progress** section presents three unpublished research directions through four simulation clips. Descriptions cover the research goals and the motions shown. These are preliminary results and do not imply hardware validation or real-time performance.

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
- Experiment loops: excerpts from the author’s original SysID publication video (stair climbing, 338–345 seconds; walking, 294–301 seconds) and the Go1 jumping comparison footage used in the multi-contact estimation publication video. The excerpts retain the source footage’s experiment-speed labels; audio and non-video metadata have been removed. Clips are encoded as 960-pixel H.264 MP4 at 24 fps, with fast-start metadata for browser playback.
- Research-in-progress clips: approved by the author for this site on 6 November 2026. The adaptive MPC payload and friction comparisons replay saved simulation results at 0.5× speed (fixed controller left, adaptive right). The Allegro clip replays a saved, validated 0.8-second cube-turn execution at 0.2× speed; the reference-guided optimisation reached its iteration limit, so the clip makes no convergence or optimality claim. The Kangaroo clip replays a saved walking trajectory of the fixed co-designed model at 0.5× speed. It shows the resulting model in motion, rather than the design optimisation process. New previews were rendered from archived states without rerunning a solver. All four clips are silent H.264 MP4 files with fast-start metadata. Source hashes, playback settings and validation records are retained with the local preview exports; private research source files are not included in this repository.

Research photographs and figures retain their original authorship and applicable rights. This repository does not grant an additional licence to redistribute the research imagery or portrait. The favicon and site layout were created for this website.
