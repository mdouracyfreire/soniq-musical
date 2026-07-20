const ENDPOINT = "https://itunes.apple.com/search";

function formatDate(iso) {
  if (!iso) return "";

  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

export async function searchSongs(term) {
  const url =  `${ENDPOINT}?term=${encodeURIComponent(term)}` + "&entity=song&limit=24";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erro ${response.status}`);
  }

  const data = await response.json();

  return data.results.map(song => ({
    track: song.trackName,
    artist: song.artistName,
    album: song.collectionName || "—",
    cover: (song.artworkUrl100 || "").replace("100x100", "500x500"),
    date: formatDate(song.releaseDate),
    preview: song.previewUrl || "",
  }));
}