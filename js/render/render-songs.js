export function renderSongs(list, mountId) {
  const mount = document.getElementById(mountId);

  if (!mount) return;

  mount.innerHTML = list.map((song) => `
        <song-card
          track="${song.track}"
          artist="${song.artist}"
          album="${song.album}"
          cover="${song.cover}"
          date="${song.date}"
          preview="${song.preview}">
        </song-card>
      `
    ).join("");
}