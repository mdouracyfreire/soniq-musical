import { IMAGES_PATH } from "../config/paths.js";

export function renderArtists(list, mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  mount.innerHTML = list.map(a =>
    `<artist-card name="${a.name}" genre="${a.genre}" bio="${a.bio}" image="${IMAGES_PATH}artists/${a.image}"></artist-card>`
  ).join("");
}