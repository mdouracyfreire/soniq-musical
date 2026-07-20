export function renderTestimonials(list, mountId) {
  const mount = document.getElementById(mountId);

  if (!mount) return;
  mount.innerHTML = list
    .map(
      (testimonial) => `
        <li class="carousel__slide">
          <testimonial-card
            quote="${testimonial.quote}"
            author="${testimonial.author}"
            since="${testimonial.since}">
          </testimonial-card>
        </li>
      `
    ).join("");
}