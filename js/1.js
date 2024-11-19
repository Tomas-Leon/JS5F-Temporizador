let tiempoRestante = 0;
let intervaloId = null;

const entradaTiempo = document.getElementById("entrada-tiempo");
const mostrarTemporizador = document.getElementById("temporizador");
const botonIniciar = document.getElementById("iniciar");
const botonPausar = document.getElementById("pausar");
const botonReiniciar = document.getElementById("reiniciar");

function formatearTiempo(segundos) {
  const horas = String(Math.floor(segundos / 3600)).padStart(2, "0");
  const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
  const segundosRestantes = String(segundos % 60).padStart(2, "0");
  return `${horas}:${minutos}:${segundosRestantes}`;
}

function actualizarDisplay() {
  mostrarTemporizador.textContent = formatearTiempo(tiempoRestante);
}

botonIniciar.addEventListener("click", () => {
  if (intervaloId) return; 

  
  if (entradaTiempo.value) {
    tiempoRestante = parseInt(entradaTiempo.value, 10);
    entradaTiempo.value = ""; 
  }

  intervaloId = setInterval(() => {
    if (tiempoRestante > 0) {
      tiempoRestante--;
      actualizarDisplay();
    } else {
      clearInterval(intervaloId);
      intervaloId = null;
      alert("¡Tiempo finalizado!");
    }
  }, 1000);
});

botonPausar.addEventListener("click", () => {
  clearInterval(intervaloId);
  intervaloId = null;
});

botonReiniciar.addEventListener("click", () => {
  clearInterval(intervaloId);
  intervaloId = null;
  tiempoRestante = 0;
  actualizarDisplay();
});

actualizarDisplay();
