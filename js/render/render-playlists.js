import { IMAGES_PATH } from "../config/paths.js";

export function renderPlaylists(list, mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  mount.innerHTML = list.map(p =>
    `<playlist-card name="${p.name}" category="${p.category}" tracks="${p.tracks}" time="${p.time}" cover="${IMAGES_PATH}/playlists/${p.cover}"></playlist-card>`
  ).join("");
}