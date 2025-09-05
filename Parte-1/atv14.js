 const input = require('prompt-sync')();
 const palavra = input('Digite uma palavra: ');
 const invertida = palavra.split('').reverse().join('');
 console.log('Invertida:', invertida);