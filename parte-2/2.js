const input = require('prompt-sync')();

const numero = parseFloat(input('Digite um numero para saber seu reajuste '));

var soma = (numero * 15)/100;
var reajuste = numero + soma;

console.log(`O reajuste do seu numero é ${reajuste}`);