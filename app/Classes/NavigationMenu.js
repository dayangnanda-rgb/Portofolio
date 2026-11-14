class NavigationMenu {
  constructor(toggle, menu) {
    this.toggle = toggle;
    this.menu = menu;

    this.toggle.addEventListener("click", () => this.toggleMenu());
    this.menu.addEventListener("click", (event) => this.handleMenuClick(event));
    document.addEventListener("keydown", (event) => this.handleKeydown(event));
  }

  toggleMenu() {
    const isExpanded = this.toggle.getAttribute("aria-expanded") === "true";
    this.toggle.setAttribute("aria-expanded", String(!isExpanded));
    this.menu.classList.toggle("is-open", !isExpanded);
  }

  closeMenu() {
    this.toggle.setAttribute("aria-expanded", "false");
    this.menu.classList.remove("is-open");
  }

  handleMenuClick(event) {
    if (event.target instanceof Element && event.target.closest("a")) {
      this.closeMenu();
    }
  }

  handleKeydown(event) {
    if (event.key === "Escape") {
      this.closeMenu();
    }
  }
}
