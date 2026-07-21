class ArtistCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") || "";
    const genre = this.getAttribute("genre") || "";
    const bio = this.getAttribute("bio") || "";
    const image = this.getAttribute("image") || "";

    this.innerHTML = `
      <article class="card">
        <div class="card__media card__media__round">
          <img src="${image}" alt="Foto de ${name}">
        </div>
        <span class="card__badge">${genre}</span>
        <h3 class="card__title">${name}</h3>
        <p class="card__bio">${bio}</p>
      </article>
    `;
  }
}

customElements.define("artist-card", ArtistCard);