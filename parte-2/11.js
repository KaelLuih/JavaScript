const input = require('prompt-sync')();

function crescente(){

    let numeros = [];

    numeros.push(parseFloat(input('Digite um numero: ')));
    numeros.push(parseFloat(input('Digite um numero: ')));
    numeros.push(parseFloat(input('Digite um numero: ')));

  return numeros.sort((a, b) => a - b);




}
console.log('A ordem crescente ficou assim ' + crescente());