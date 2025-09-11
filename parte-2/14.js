const input = require('prompt-sync')();

function contarCaractere(str, caractere){
    let contador = 0;

    for(let i = 0; i < str.length ; i++){
        if(str[i] === caractere){
            contador++;
        }
    }
    return contador;


}

    const texto = input('Digite um texto');
    const letra = input('Digite o caracter a ser contato')
console.log(`O caractere "${letra}" aparece ${contarCaractere(texto, letra)} vezes na string.`);