class PlaylistCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") || "";
    const category = this.getAttribute("category") || "";
    const tracks = this.getAttribute("tracks") || "0";
    const time = this.getAttribute("time") || "";
    const cover = this.getAttribute("cover") || "";

    this.innerHTML = `
      <article class="card">
        <div class="card__media" style="background-image:url('${cover}')"></div>
        <span class="card__badge">${category}</span>
        <h3 class="card__title">${name}</h3>
        <p class="card__meta">${tracks} músicas · ${time}</p>
      </article>
    `;
  }
}

customElements.define("playlist-card", PlaylistCard);