const input = require('prompt-sync')();

var numero = parseFloat(input('Digite um numero'));

var antecessor = numero - 1;
var sucessor = numero + 1;

console.log('O numero é' + numero + 'o antecessor é:' + antecessor + 'O sucessor é:' + sucessor);