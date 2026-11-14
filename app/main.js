const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");

if (!(menuToggle instanceof HTMLButtonElement) || !(siteMenu instanceof HTMLElement)) {
  throw new Error("Elemen navigasi tidak ditemukan.");
}

new NavigationMenu(menuToggle, siteMenu);
