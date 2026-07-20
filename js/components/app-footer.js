import { getNavigationLinks } from "../config/navigation.js";

class AppFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();

    const links = getNavigationLinks();

    const navigationLinks = links
      .filter((link) => link.footer)
      .map((link) => `
          <a href="${link.href}">
            ${link.label}
          </a>
        `).join("");

    const contactLink = links.find((link) => link.key === "contact");

    this.innerHTML = `
      <footer class="footer">
        <div class="footer__inner">

          <div>
            <p class="footer__logo">SON<em>i</em>Q</p>

            <p>
              Streaming editorial para quem coleciona atmosfera.
              Feito no Brasil, ouvido no mundo.
            </p>
          </div>

          <div>
            <h4>Navegar</h4>
            ${navigationLinks}
          </div>

          <div>
            <h4>Empresa</h4>

            <a href="${contactLink.href}">Contato</a>
            <a href="#">Imprensa</a>
            <a href="#">Carreiras</a>
            <a href="#">Manifesto</a>
          </div>

          <div>
            <h4>Social</h4>

            <a href="https://instagram.com" target="_blank">Instagram</a>
            <a href="https://spotify.com" target="_blank">Spotify</a>
            <a href="https://youtube.com" target="_blank">YouTube</a>
            <a href="https://bandcamp.com" target="_blank">Bandcamp</a>
          </div>
        </div>

        <div class="footer__bottom">
          <span>© ${year} SONIQ. Todos os discos girando.</span>
          <span>Feito com ♥ e um pouco de reverb.</span>
        </div>
      </footer>
    `;
  }
}

customElements.define("app-footer", AppFooter);