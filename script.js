document.addEventListener("keydown", (event) => {
  let link;

  if (event.key === "ArrowRight") {
    link = document.querySelector('.post-navigation a[rel="next"]');
  } else if (event.key === "ArrowLeft") {
    link = document.querySelector('.post-navigation a[rel="prev"]');
  }

  if (link) {
    location.assign(link.href);
  }
});

const form = document.getElementById("subscribe-form");
const error = document.getElementById("subscribe-error");

form?.addEventListener("submit", async (event) => {
  const data = new FormData(form);
  const url = form.action;

  event.preventDefault();

  if (!location.search.includes("testmode")) {
    try {
      const response = await fetch(url, { method: "POST", body: data });

      if (!response.ok) {
        showErrorMessage("NETWORK_ERROR");
        return;
      }
      const result = await response.json();
      if (!result.success) {
        showErrorMessage(result.error?.code);
        return;
      }
    } catch (err) {
      console.error(err);
      showErrorMessage("NETWORK_ERROR");
      return;
    }
  }

  const template = document.getElementById("subscribe-success-template");

  if (template) {
    const clone = template.content.cloneNode(true);
    form.replaceWith(clone);
    document.querySelector(".newsletter")?.scrollIntoView({ behavior: "smooth" });
  }
});
form?.addEventListener("input", clearErrorMessage);

const ERROR_MESSAGES = {
    'INVALID_EMAIL': 'El email introducido no es válido',
    'EMAIL_EXISTS': 'Este email ya está siendo utilizado',
    'INVALID_LIST': 'Error en la configuración de la lista',
    'REQUIRED_FIELD': 'Todos los campos son obligatorios',
    'API_ERROR': 'Error temporal del servicio. Inténtalo de nuevo',
    'NETWORK_ERROR': 'Error de conexión con la plataforma. Estarán tocando algo',
    'SPAM_DETECTED': 'Suscripción bloqueada por medidas de seguridad',
    'RATE_LIMIT': 'Demasiados intentos. Espera unos minutos',
    'INVALID_NAME': 'El nombre debe tener entre 2 y 30 caracteres',
    'DEFAULT': 'Ha ocurrido un error inesperado. Inténtalo de nuevo'
};

function showErrorMessage(id) {
  error.hidden = false;
  if ("scrollIntoViewIfNeeded" in error) {
    error.scrollIntoViewIfNeeded({ behavior: "smooth" });
  }

  error.animate({
    opacity: [0, 1],
    transform: ['translateY(10px)', 'translateY(0)']
  }, {
    duration: 400,
    fill: 'forwards'
  });

  error.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.6A9.6 9.6 0 0 1 2.4 12 9.6 9.6 0 0 1 12 2.4a9.6 9.6 0 0 1 9.6 9.6 9.6 9.6 0 0 1-9.6 9.6m0-7.2a1.199 1.199 0 1 0 0 2.4c.664 0 1.2-.536 1.2-1.2s-.536-1.2-1.2-1.2m0-7.2c-.683 0-1.226.581-1.178 1.264l.278 3.9a.898.898 0 0 0 1.793 0l.277-3.9A1.18 1.18 0 0 0 11.992 7.2z"/></svg>
    ${ERROR_MESSAGES[id] || ERROR_MESSAGES['DEFAULT']}
    `;
}

function clearErrorMessage() {
  if (error.hidden) return;
  error.animate({
    opacity: [1, 0],
    transform: ['translateY(0)', 'translateY(10px)']
  }, {
    duration: 500,
    fill: 'forwards'
  }).onfinish = () => {
    error.hidden = true;
    error.innerHTML = '';
  };
}