function calcularLMC(acao) {
  var valorEscritural = parseFloat(
    document.getElementById("valorEscritural").value
  );
  if (isNaN(valorEscritural)) {
    document.getElementById("resultado").innerText =
      "Por favor, insira um valor válido.";
    return;
  }
  var perdaSobra = (valorEscritural * 0.6) / 100;
  var resultadoFinal;
  if (acao === "adicionar") {
    resultadoFinal = valorEscritural + perdaSobra;
  } else if (acao === "remover") {
    resultadoFinal = valorEscritural - perdaSobra;
  }
  document.getElementById("resultado").innerText =
    "Resultado Final: " + resultadoFinal.toFixed(2).replace(".", ",");
}

function copiarResultado() {
  var resultado = document.getElementById("resultado").innerText;
  if (resultado) {
    navigator.clipboard
      .writeText(resultado)
      .then(() => alert("Resultado copiado!"))
      .catch((err) => console.log("Algo deu errado", err));
  }
}
