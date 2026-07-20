export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export function validateContactForm(data) {
  const errors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Nos diga como te chamar.";
  }

  if (!data.email || !isEmail(data.email)) {
    errors.email = "Email inválido.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Escreva pelo menos 10 caracteres.";
  }

  return errors;
}