// Data do início do namoro
const dataNamoro = new Date("2022-10-15T00:00:00");

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataNamoro;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  const tempoElement = document.getElementById("tempo");

  if (tempoElement) {
    tempoElement.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💖`;
  } else {
    console.log("Elemento #tempo não encontrado");
  }
}

setInterval(atualizarContador, 1000);
atualizarContador();