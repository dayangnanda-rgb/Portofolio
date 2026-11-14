const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");

if (menuToggle && siteMenu) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    siteMenu.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    siteMenu.classList.toggle("is-open", !isExpanded);
  });

  siteMenu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
