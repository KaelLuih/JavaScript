const input = require('prompt-sync')();

let numeros = [];

numeros.push(parseFloat(input('Digite um numero')));
numeros.push(parseFloat(input('Digite um numero')));
numeros.push(parseFloat(input('Digite um numero')));

console.log('Array invertido '+ numeros.reverse());