export function initCarousel() {
  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const track = root.querySelector(".carousel__track");
    const dotsEl = root.querySelector("[data-carousel-dots]");
    const prev = root.querySelector("[data-carousel-prev]");
    const next = root.querySelector("[data-carousel-next]");

    if (!track) return;
    const slides = [...track.children];

    if (!slides.length) return;
    let index = 0;
    let autoplayId = null;

    dotsEl.innerHTML = slides.map((_, i) => 
      `
        <button
          class="carousel__dot"
          data-index="${i}"
          aria-label="Ir para depoimento ${i + 1}">
        </button>
      `
      )
      .join("");

    const dots = [...dotsEl.querySelectorAll(".carousel__dot")];

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) =>
        dot.classList.toggle("is-active", i === index)
      );
    }

    function go(i) {
      index = (i + slides.length) % slides.length;
      update();
    }

    function start() {
      autoplayId = setInterval(() => go(index + 1), 6000);
    }

    function stop() {
      clearInterval(autoplayId);
    }

    function restart() {
      stop();
      start();
    }

    prev?.addEventListener("click", () => {
      go(index - 1);
      restart();
    });

    next?.addEventListener("click", () => {
      go(index + 1);
      restart();
    });

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        go(Number(dot.dataset.index));
        restart();
      });
    });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);

    update();
    start();
  });
}