const input = require('prompt-sync')();

const numero = parseFloat(input('Digite um numero'));

if(numero > 20){
    var divisao = numero/2;
    console.log(divisao);
}else{
    console.log(numero);
}