const input = require('prompt-sync')();

const salario = parseFloat(input('Digite seu salario'));

const prestacao = parseFloat(input('Digite o valor de cada prestação'));

const valor = (prestacao/salario) * 100;

if(valor > 20){
    console.log('Emprestimo não aprovado');
}else{
    console.log('emprestimo aprovado')
}