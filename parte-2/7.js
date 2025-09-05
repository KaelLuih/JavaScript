const input = require('prompt-sync')();

const preco = parseFloat(input('Digite o valor o produto'));


if(preco <= 20){
const calculo = ((preco*45)/100)+preco;
console.log(`O valor que ficou foi de ${calculo}` );
}else{
calculo = ((preco*30)/100)+preco;
console.log(`O valor que ficou foi de ${calculo}` );
}