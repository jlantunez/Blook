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
  try {
    const response = await fetch(url, { method: "POST", body: data });

    if (!response.ok) {
      showErrorMessage("Error enviando el formulario. Inténtalo de nuevo más tarde.");
      return;
    }
  } catch (err) {
    console.error(err);
    showErrorMessage("Error enviando el formulario. Inténtalo de nuevo más tarde.");
    return;
  }
  
  form.reset();
  alert("¡Gracias por suscribirte!");
});

function showErrorMessage(message) {
  error.hidden = false;
  error.textContent = message;
}
