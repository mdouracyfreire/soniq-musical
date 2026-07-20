export function renderArtists(list, mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  mount.innerHTML = list.map(a =>
    `<artist-card name="${a.name}" genre="${a.genre}" bio="${a.bio}" image="${a.image}"></artist-card>`
  ).join("");
}