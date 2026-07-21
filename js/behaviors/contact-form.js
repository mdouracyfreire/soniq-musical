import { validateContactForm } from "../utils/validation.js";

export function initContactForm() {
  const form = document.getElementById("contact-form");

  if (!form) return;

  const toast = document.getElementById("toast");

  function showError(field, message = "") {
    const error = form.querySelector(`.error[data-for="${field}"]`);

    if (error) {
      error.textContent = message;
    }
  }

  function clearErrors() {
    ["name", "email", "message"].forEach(field => {
      showError(field);
    });
  }

  function showToast() {
    toast.hidden = false;

    requestAnimationFrame(() => {
      toast.classList.add("is-visible");
    });

    setTimeout(() => {
      toast.classList.remove("is-visible");

      setTimeout(() => {
        toast.hidden = true;
      }, 400);
    }, 3600);
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    clearErrors();

    const data = Object.fromEntries(
      new FormData(form).entries()
    );

    const errors = validateContactForm(data);

    if (Object.keys(errors).length) {
      Object.entries(errors).forEach(([field, message]) => {
        showError(field, message);
      });

      return;
    }

    form.reset();
    showToast();
  });

  form.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("input", () => {
      showError(input.name);
    });
  });
}