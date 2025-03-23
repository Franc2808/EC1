// Obtener elementos del DOM
const promocionesLink = document.getElementById("promociones-link");
const aboutLink = document.getElementById("about-link");
const contactoLink = document.getElementById("contacto-link");
const logo = document.getElementById("logo");

const mainContent = document.getElementById("main-content");
const promocionesSection = document.getElementById("promociones");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contacto");

// Función para ocultar todas las secciones y mostrar solo la seleccionada
function showSection(section) {
  // Ocultar todas las secciones
  mainContent.classList.add("hidden");
  promocionesSection.classList.add("hidden");
  aboutSection.classList.add("hidden");
  contactSection.classList.add("hidden");

  // Mostrar la sección seleccionada
  section.classList.remove("hidden");
}

//  Mostrar la sección de Promociones
promocionesLink.addEventListener("click", function (event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  showSection(promocionesSection);
});

// Mostrar la sección de About
aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  showSection(aboutSection);
});

// Mostrar la sección de Contacto
contactoLink.addEventListener("click", function (event) {
  event.preventDefault();
  showSection(contactSection);
});

// Evento para regresar al contenido principal
logo.addEventListener("click", function (event) {
  event.preventDefault();

  // Ocultar todas las secciones
  promocionesSection.classList.add("hidden");
  aboutSection.classList.add("hidden");
  contactSection.classList.add("hidden");

  // Mostrar el contenido principal
  mainContent.classList.remove("hidden");
});

// Menú desplegable en móviles
document.getElementById("menu-icon").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
});
