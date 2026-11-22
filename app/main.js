const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");

if (!(menuToggle instanceof HTMLButtonElement) || !(siteMenu instanceof HTMLElement)) {
  throw new Error("Elemen navigasi tidak ditemukan.");
}

new NavigationMenu(menuToggle, siteMenu);

const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
const observedSections = ["tentang", "karya", "sertifikat", "kegiatan", "kontak"]
  .map((id) => document.getElementById(id))
  .filter((section) => section instanceof HTMLElement);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) {
      return;
    }

    navLinks.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${visibleEntry.target.id}`
      );
    });
  },
  { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.5] }
);

observedSections.forEach((section) => sectionObserver.observe(section));

const imageDialog = document.querySelector("#image-dialog");
const imageDialogContent = document.querySelector(".image-dialog-content");
const imageDialogClose = document.querySelector(".image-dialog-close");

if (
  imageDialog instanceof HTMLDialogElement &&
  imageDialogContent instanceof HTMLImageElement &&
  imageDialogClose instanceof HTMLButtonElement
) {
  document.querySelectorAll(".certificate-section .achievement-image").forEach((image) => {
    if (!(image instanceof HTMLImageElement)) {
      return;
    }

    image.tabIndex = 0;
    image.setAttribute("role", "button");

    const openPreview = () => {
      imageDialogContent.src = image.currentSrc || image.src;
      imageDialogContent.alt = image.alt;
      imageDialog.showModal();
    };

    image.addEventListener("click", openPreview);
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPreview();
      }
    });
  });

  imageDialogClose.addEventListener("click", () => imageDialog.close());
  imageDialog.addEventListener("click", (event) => {
    if (event.target === imageDialog) {
      imageDialog.close();
    }
  });
}
