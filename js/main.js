import "./components/app-header.js";
import "./components/artist-card.js";
import "./components/playlist-card.js";
import "./components/testimonial-card.js";
import "./components/song-card.js"
import "./components/app-footer.js";

import { ARTISTS } from "./data/artists.js";
import { PLAYLISTS } from "./data/playlists.js";
import { TESTIMONIALS } from "./data/testimonials.js";

import { renderArtists } from "./render/render-artists.js";
import { renderPlaylists } from "./render/render-playlists.js";
import { renderTestimonials } from "./render/render-testimonials.js";

import { initCarousel } from "./behaviors/carousel.js";
import { initArtistsFilter } from "./behaviors/artists-filter.js";
import { initSongSearch } from "./behaviors/song-search.js";

renderArtists(ARTISTS.slice(0, 3), "featured-artists");
renderPlaylists(PLAYLISTS.slice(0, 3), "featured-playlists");
renderPlaylists(PLAYLISTS, "playlists-grid");
renderTestimonials(TESTIMONIALS, "testimonials");

initCarousel();
initArtistsFilter();
initSongSearch();