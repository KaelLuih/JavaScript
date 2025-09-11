const input = require('prompt-sync')();

function gerarNumeroAleatorio(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function criarMatriz(linhas, colunas) {
  const matriz = [];

  for (let i = 0; i < linhas; i++) {
    const linha = [];
    for (let j = 0; j < colunas; j++) {
      linha.push(gerarNumeroAleatorio());
    }
    matriz.push(linha);
  }

  return matriz;
}

const linhas = Number(input("Digite o número de linhas da matriz: "));
const colunas = Number(input("Digite o número de colunas da matriz: "));

const matriz = criarMatriz(linhas, colunas);

console.log("Matriz gerada automaticamente:");
console.table(matriz);
