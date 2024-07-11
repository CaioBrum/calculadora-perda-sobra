<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculadora de Perda e Sobra do LMC</title>
    <!-- Estilo da ferramenta-->
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 50px;
      }
      .container {
        max-width: 500px;
        margin: 0 auto;
      }
      input,
      button {
        padding: 10px;
        margin: 10px 0;
        width: 100%;
      }
      button {
        background-color: #4caf50;
        color: white;
        border: none;
        cursor: pointer;
      }
      button:hover {
        background-color: #45a049;
      }
      .result {
        font-size: 1.2em;
        margin-top: 20px;
      }
      .copy-btn {
        background-color: #007bff;
      }
      .copy-btn:hover {
        background-color: #0056b3;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Calculadora de Perda e Sobra do LMC</h2>
      <label for="valorEscritural">Valor Total Escritural:</label>
      <input
        type="number"
        id="valorEscritural"
        placeholder="Digite o valor total escritural"
      />
      <!--Alterar texto dos botões-->
      <button onclick="calcularLMC('adicionar')">Adicionar 0,6%</button>
      <button onclick="calcularLMC('remover')">Remover 0,6%</button>
      <div class="result" id="resultado"></div>
      <button class="copy-btn" onclick="copiarResultado()">
        Copiar Resultado
      </button>
    </div>

    <script>
      function calcularLMC(acao) {
        var valorEscritural = parseFloat(
          document.getElementById("valorEscritural").value
        );
        if (isNaN(valorEscritural)) {
          document.getElementById("resultado").innerText =
            "Por favor, insira um valor válido.";
          return;
        }
        //Alterar valor a ser calculado
        var perdaSobra = (valorEscritural * 0.6) / 100;
        var resultadoFinal;
        if (acao === "adicionar") {
          resultadoFinal = valorEscritural + perdaSobra;
        } else if (acao === "remover") {
          resultadoFinal = valorEscritural - perdaSobra;
        }
        document.getElementById("resultado").innerText =
          //Alterar quantas casas decimais e se aparece como ponto ou vírgula.
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
    </script>
  </body>
</html>
