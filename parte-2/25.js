const input = require('prompt-sync')();


function calculadora(expressao) {
  try {
    return eval(expressao);
  } catch (erro) {
    return "Expressão inválida!";
  }
}

let expressaoEscolhida = input("Digite uma expressao");

console.log("Resultado final:" + calculadora(expressaoEscolhida));
