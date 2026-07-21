class SongCard extends HTMLElement {
  connectedCallback() {
    const track = this.getAttribute("track") || "";
    const artist = this.getAttribute("artist") || "";
    const album = this.getAttribute("album") || "";
    const cover = this.getAttribute("cover") || "";
    const date = this.getAttribute("date") || "";
    const preview = this.getAttribute("preview") || "";
    this.innerHTML = `
      <article class="card">
        <div class="card__media" style="background-image:url('${cover}')"></div>
        <span class="card__badge">${date}</span>
        <h3 class="card__title">${track}</h3>
        <p class="card__meta">${artist} · ${album}</p>
        ${preview ? `<audio controls preload="none" src="${preview}" style="width:100%"></audio>` : ""}
      </article>
    `;
  }
}
customElements.define("song-card", SongCard);