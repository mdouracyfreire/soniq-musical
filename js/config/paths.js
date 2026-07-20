const inPages = window.location.pathname.includes("/pages/");

export const ROOT_PATH = inPages ? "../" : "./";
export const ASSETS_PATH = `${ROOT_PATH}assets/`;
export const IMAGES_PATH = `${ASSETS_PATH}images/`;