class NavigationMenu {
  constructor(toggle, menu) {
    this.toggle = toggle;
    this.menu = menu;

    this.toggle.addEventListener("click", () => this.toggleMenu());
    this.menu.addEventListener("click", (event) => this.handleMenuClick(event));
    document.addEventListener("click", (event) => this.handleOutsideClick(event));
    document.addEventListener("keydown", (event) => this.handleKeydown(event));
  }

  toggleMenu() {
    const isExpanded = this.toggle.getAttribute("aria-expanded") === "true";
    this.setMenuOpen(!isExpanded);
  }

  setMenuOpen(isOpen) {
    this.toggle.setAttribute("aria-expanded", String(isOpen));
    this.toggle.setAttribute("aria-label", isOpen ? "Tutup menu navigasi" : "Buka menu navigasi");
    this.menu.classList.toggle("is-open", isOpen);
  }

  handleMenuClick(event) {
    if (event.target instanceof Element && event.target.closest("a")) {
      this.setMenuOpen(false);
    }
  }

  handleOutsideClick(event) {
    if (
      this.toggle.getAttribute("aria-expanded") === "true" &&
      event.target instanceof Node &&
      !this.toggle.contains(event.target) &&
      !this.menu.contains(event.target)
    ) {
      this.setMenuOpen(false);
    }
  }

  handleKeydown(event) {
    if (event.key === "Escape" && this.toggle.getAttribute("aria-expanded") === "true") {
      this.setMenuOpen(false);
      this.toggle.focus();
    }
  }
}
