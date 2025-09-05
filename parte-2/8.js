const input = require("prompt-sync")();

const idade = parseFloat(input('Digite sua idade'));

if(idade < 16){
    console.log('não tem a idade apropriada para votar');
}else if(idade <= 18 || idade < 65){
    console.log('Idade de obrigação de votar');

}else{
        console.log('não tem a nescecidade de votar mas pode ');

}