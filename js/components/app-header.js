class AppHeader extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute("current") || "home";
    const inPages = window.location.pathname.includes("/pages/");

    const rootPath = inPages ? "../" : "./";
    const pagesPath = inPages ? "./" : "./pages/";

    const links = [
      { key: "home", href: `${rootPath}index.html`, label: "Início"},
      { key: "artistas", href: `${pagesPath}artists.html`, label: "Artistas"},
      { key: "playlist", href: `${pagesPath}playlist.html`, label: "Playlist"},
      { key: "contato", href: `${pagesPath}contact.html`, label: "Contato"},
    ];

    this.innerHTML = `
      <header class="header">
        <div class="header__inner">
          <a class="logo" href="index.html">SON<em>i</em>Q</a>

          <nav class="nav" aria-label="Principal">
            ${links.map(link => `<a href="${link.href}" class="${link.key === current ? "is-active" : ""}">${link.label}</a>`).join("")}
          </nav>

          <div class="header__cta">
            <a href="${pagesPath}contact.html" class="btn btn__primary">Assinar</a>
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