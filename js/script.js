document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((l) => l.classList.remove("active"));
      e.target.classList.add("active");
    });
  });
});

// Selecciona el botón
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Muestra u oculta el botón dependiendo de la posición de scroll
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.classList.add("show"); // Muestra el botón
  } else {
    scrollTopBtn.classList.remove("show"); // Oculta el botón
  }
};

// Función para desplazarse al principio de la página
function scrollToTop() {
  const scrollStep = () => {
    const currentPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
      // Aumenta el divisor aún más y reduce el valor mínimo para un efecto muy suave
      window.scrollBy(0, -Math.max(1, currentPosition / 35)); // Divisor mayor para suavidad máxima
      requestAnimationFrame(scrollStep);
    }
  };
  requestAnimationFrame(scrollStep);
}
