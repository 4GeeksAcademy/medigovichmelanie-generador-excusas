import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateExcuse(); // Generar una excusa cuando la página cargue
  // Agregar funcionalidad para generar una nueva excusa con un botón
  document.getElementById("generateButton").addEventListener("click", generateExcuse);
};

function generateExcuse() {
  let quien = ["Mi abuela", "Mi hermana", "Mi coche", "Mi perro"];
  let accion = ["se accidentó", "se enfermó", "se averió", "se perdió"];
  let cuando = ["ayer", "anoche", "esta mañana", "hace una hora"];
  let que = ["y debo llevarla al hospital", "y debo cuidarla", "y debo llevarlo al taller", "y debo encontrarlo"];
  let excuse =
    `${quien[Math.floor(Math.random() * quien.length)]}
    ${accion[Math.floor(Math.random() * accion.length)]}
    ${cuando[Math.floor(Math.random() * cuando.length)]}
    ${que[Math.floor(Math.random() * que.length)]}.`;
  document.getElementById("excuse").innerText = excuse; // Mostrar en el HTML
}
