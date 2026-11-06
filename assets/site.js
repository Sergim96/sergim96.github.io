"use strict";
document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  menuToggle.querySelector("span").textContent = "＋";
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
  menuToggle.querySelector("span").textContent = open ? "−" : "＋";
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuToggle.focus();
  }
});

const videoDialog = document.querySelector("#video-dialog");
const videoPlayer = document.querySelector("#video-player");
const citationDialog = document.querySelector("#citation-dialog");
const citationText = document.querySelector("#citation-text");
const copyStatus = document.querySelector("#copy-status");
const citations = {
  sysid: `@misc{martinez2026systemidentification,
  title = {System Identification under Constraints and Disturbance: A Bayesian Estimation Approach},
  author = {Martinez, Sergi and Tonneau, Steve and Mastalli, Carlos},
  year = {2026},
  eprint = {2602.16358},
  archivePrefix = {arXiv},
  primaryClass = {cs.RO},
  note = {Conditionally accepted in IEEE Transactions on Robotics},
  url = {https://arxiv.org/abs/2602.16358}
}`,
  ral: `@article{martinez2025multicontact,
  title = {Multi-Contact Inertial Parameters Estimation and Localization in Legged Robots},
  author = {Martinez, Sergi and Griffin, Robert J. and Mastalli, Carlos},
  journal = {IEEE Robotics and Automation Letters},
  volume = {10},
  number = {5},
  pages = {4730--4737},
  year = {2025},
  doi = {10.1109/LRA.2025.3550845}
}`,
  icra: `@inproceedings{parilli2025endpointexplicit,
  title = {Endpoint-Explicit Differential Dynamic Programming via Exact Resolution},
  author = {Parilli, M. and Martinez, Sergi and Mastalli, Carlos},
  booktitle = {IEEE International Conference on Robotics and Automation (ICRA)},
  year = {2025},
  url = {https://ieeexplore.ieee.org/document/11128064}
}`,
  odyn: `@misc{rojas2026odyn,
  title = {ODYN: An All-Shifted Non-Interior-Point Method for Quadratic Programming in Robotics and AI},
  author = {Rojas, Jose and Papatheodorou, Aristotelis and Martinez, Sergi and Patrizi, Andrea and Havoutis, Ioannis and Mastalli, Carlos},
  year = {2026},
  eprint = {2602.16005},
  archivePrefix = {arXiv},
  primaryClass = {cs.RO},
  note = {Submitted to IEEE Transactions on Robotics; under review},
  url = {https://arxiv.org/abs/2602.16005}
}`,
};

if (typeof videoDialog.showModal === "function") {
  document.querySelectorAll("[data-video]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      const frame = document.createElement("iframe");
      frame.src = `https://www.youtube-nocookie.com/embed/${link.dataset.video}?rel=0`;
      frame.title = "Sergi Martínez robotics research video";
      frame.allow =
        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen";
      frame.allowFullscreen = true;
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      videoPlayer.replaceChildren(frame);
      document.querySelector("#video-external").href = link.href;
      videoDialog.showModal();
      document.body.classList.add("dialog-open");
    });
  });
}

document.querySelectorAll("[data-citation]").forEach((button) => {
  button.addEventListener("click", () => {
    citationText.textContent = citations[button.dataset.citation];
    copyStatus.textContent = "";
    if (typeof citationDialog.showModal === "function") {
      citationDialog.showModal();
      document.body.classList.add("dialog-open");
    } else {
      citationDialog.setAttribute("open", "");
    }
  });
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = document.getElementById(button.dataset.close);
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  });
});
[videoDialog, citationDialog].forEach((dialog) => {
  dialog.addEventListener("close", () => {
    if (dialog === videoDialog) videoPlayer.replaceChildren();
    document.body.classList.remove("dialog-open");
  });
  dialog.addEventListener("click", (event) => {
    const box = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < box.left ||
        event.clientX > box.right ||
        event.clientY < box.top ||
        event.clientY > box.bottom)
    )
      dialog.close();
  });
});

document.querySelector("#copy-citation").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(citationText.textContent);
    copyStatus.textContent = "BibTeX copied.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citationText);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = "Text selected. Press Ctrl+C or ⌘C to copy.";
  }
});
