const input = require('prompt-sync')();

function GerarNumeroAleatorio(min,max){
return Math.floor(Math.random() * (max - min + 1 ) *min);

}

let max = Number(input("Digite um numero maximo"));
let min = Number(input("Digite um minimo"));
let numero = GerarNumeroAleatorio(min,max);
 

console.log("O numero é: " , numero);