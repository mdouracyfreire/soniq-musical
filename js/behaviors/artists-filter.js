import { ARTISTS } from "../data/artists.js";
import { renderArtists } from "../render/render-artists.js";

export function initArtistsFilter() {
  const grid = document.getElementById("artists-grid");
  
  if (!grid) return;

  renderArtists(ARTISTS, "artists-grid");
  const chipsEl = document.getElementById("genre-chips");
  const search = document.getElementById("artist-search");
  const empty = document.getElementById("artists-empty");

  const genres = [
    "Todos",
    ...new Set(ARTISTS.map(artist => artist.genre)),
  ];

  let activeGenre = "Todos";
  chipsEl.innerHTML = genres.map(genre => `
    <button
      class="chip ${genre === activeGenre ? "is-active" : ""}"
      data-genre="${genre}">
      ${genre}
    </button>
  `).join("");

  function applyFilter() {
    const query = search.value.trim().toLowerCase();
    const filtered = ARTISTS.filter((artist) => {
      const matchesGenre =
        activeGenre === "Todos" ||
        artist.genre === activeGenre;

      const matchesQuery =
        !query ||
        artist.name.toLowerCase().includes(query) ||
        artist.genre.toLowerCase().includes(query) ||
        artist.bio.toLowerCase().includes(query);

      return matchesGenre && matchesQuery;
    });

    renderArtists(filtered, "artists-grid");
    empty.hidden = filtered.length > 0;
  }

  search.addEventListener("input", applyFilter);
  chipsEl.addEventListener("click", (event) => {
    const button = event.target.closest(".chip");
    
    if (!button) return;

    activeGenre = button.dataset.genre;
    chipsEl.querySelectorAll(".chip").forEach(chip =>
      chip.classList.toggle("is-active", chip === button)
    );

    applyFilter();
  });
}