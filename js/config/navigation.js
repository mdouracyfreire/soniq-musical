export const NAVIGATION = [
  {
    key: "home",
    label: "Início",
    page: "index.html",
    header: true,
    footer: true,
  },
  {
    key: "artists",
    label: "Artistas",
    page: "artists.html",
    header: true,
    footer: true,
  },
  {
    key: "playlists",
    label: "Playlists",
    page: "playlists.html",
    header: true,
    footer: true,
  },
  {
    key: "songs",
    label: "Músicas",
    page: "songs.html",
    header: true,
    footer: true,
  },
  {
    key: "contact",
    label: "Contato",
    page: "contact.html",
    header: false,
    footer: false,
  },
];

export function getNavigationLinks() {
  const inPages = window.location.pathname.includes("/pages/");

  const rootPath = inPages ? "../" : "./";
  const pagesPath = inPages ? "./" : "./pages/";

  return NAVIGATION.map((link) => ({
    ...link,
    href:
      link.page === "index.html"
        ? `${rootPath}${link.page}`
        : `${pagesPath}${link.page}`,
  }));
}