export function renderPlaylists(list, mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  mount.innerHTML = list.map(p =>
    `<playlist-card name="${p.name}" category="${p.category}" tracks="${p.tracks}" time="${p.time}" cover="${p.cover}"></playlist-card>`
  ).join("");
}