const input = require('prompt-sync')();

 function gerarSenha(tamanho){

  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
  let senha  = "";

  for (let i = 0;i< tamanho ; i++ ){
let indice  = Math.floor(Math.random() * caracteres.length);
senha += caracteres[indice];
  }
return senha;
}
let tamanho = Number(input('Digite o numero de caracter'))
console.log("Sua senha é  " , gerarSenha(tamanho));
