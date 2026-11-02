let notas = [];

function adicionarNota() {
  const campoNota = document.getElementById("nota");
  const valor = Number(campoNota.value);

  if (
    campoNota.value.trim() !== "" &&
    !isNaN(valor) &&
    valor >= 0 &&
    valor <= 10
  ) {
    notas.push(valor);
    atualizarListaNotas();
    campoNota.value = "";
    campoNota.focus();
  } else {
    document.getElementById("result").textContent =
      "Digite uma nota entre 0 e 10.";
  }
}

function atualizarListaNotas() {
  const listaNotas = document.getElementById("listaNotas");

  if (listaNotas) {
    listaNotas.innerHTML = notas
      .map((nota) => `<li>${nota}</li>`)
      .join("");
  }
}

function calcularMedia(notas) {
  if (notas.length === 0) {
    document.getElementById("result").textContent =
      "Nenhuma nota cadastrada";
    return 0;
  }

  let soma = 0;

  for (let index = 0; index < notas.length; index += 1) {
    soma += notas[index];
  }

  const media = soma / notas.length;

  if (media >= 6) {
    document.getElementById("result").textContent =
      "Pessoa estudante aprovada!";
  } else {
    document.getElementById("result").textContent =
      "Pessoa estudante reprovada!";
  }

  return media;
}

function mostrarMedia() {
  const media = calcularMedia(notas);

  document.getElementById("media").textContent =
    notas.length > 0 ? `Média: ${media.toFixed(2)}` : "";
}