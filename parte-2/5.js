const input = require('prompt-sync')();

const numero1 = parseFloat(input('Digite um numero: '));
const numero2 = parseFloat(input('Digite um outro numero: '));

var calculo = numero1 + numero2;

if(calculo > 10){
    console.log(`A soma dos numero é  ${calculo}` );
}else{
    console.log('o numero nao é maior que 10');
}