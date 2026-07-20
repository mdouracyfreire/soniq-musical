import { getNavigationLinks } from "../config/navigation.js";

class AppHeader extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute("current") || "home";

    const links = getNavigationLinks();

    const navigationLinks = links
      .filter((link) => link.header)
      .map((link) => `
              <a href="${link.href}" class="${link.key === current ? "is-active" : ""}">${link.label}
              </a>
            `,
          ).join("");

    const contactLink = links.find((link) => link.key === "contact");

    this.innerHTML = `
      <header class="header">
        <div class="header__inner">
          <a class="logo" href="index.html">SON<em>i</em>Q</a>

          <nav class="nav" aria-label="Principal">
            ${navigationLinks}
          </nav>

          <div class="header__cta">
            <a href="${contactLink.href}" class="btn btn__primary">Assinar</a>
          </div>
          <button class="burger" aria-label="Menu" aria-expanded="false"><span></span></button>
        </div>
      </header>
    `;

    const headerEl = this.querySelector(".header");
    const burger = this.querySelector(".burger");

    burger.addEventListener("click", () => {
      const open = headerEl.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
  }
}

customElements.define("app-header", AppHeader);