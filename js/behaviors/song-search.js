import { searchSongs } from "../api/songs-api.js";
import { renderSongs } from "../render/render-songs.js";

export function initSongSearch() {
  const form = document.getElementById("search-form");

  if (!form) return;

  const input = document.getElementById("search-input");
  const status = document.getElementById("search-status");
  const results = document.getElementById("search-results");

  function setStatus(message) {
    status.innerHTML = message;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const term = input.value.trim();

    if (!term) return;

    setStatus(`
      <span class="loader"></span>
      Ouvindo o ar em busca de "${term}"...
    `);

    results.innerHTML = "";

    try {
      const songs = await searchSongs(term);

      if (!songs.length) {
        setStatus(`Nada por aqui pra "${term}". Tente outra vibe.`);
        return;
      }

      setStatus(`${songs.length} músicas encontradas.`);
      renderSongs(songs, "search-results");

    } catch (error) {
      console.error(error);
      setStatus("Deu ruído no cabo. Tente de novo em instantes.");
    }
  });

  input.value = "Legião Urbana";
  form.dispatchEvent(new Event("submit"));
}