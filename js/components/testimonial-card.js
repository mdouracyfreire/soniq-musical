class TestimonialCard extends HTMLElement {
  connectedCallback() {
    const quote = this.getAttribute("quote") || "";
    const author = this.getAttribute("author") || "";
    const since = this.getAttribute("since") || "";

    this.innerHTML = `
      <blockquote class="testimonial__quote">
        <p>"${quote}"</p>
        <cite class="testimonial__author">
          ${author} • ${since}
        </cite>
      </blockquote>
    `;
  }
}

customElements.define("testimonial-card", TestimonialCard);