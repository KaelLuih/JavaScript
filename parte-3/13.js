let dadosPessoais ={
    nome: "Zé gabriel ou DELIVERY KKKKKk",
    idade: 30
}
let dadosProfissionais ={
    cargo: "Ator atua jogar bola",
    empresa: "Não é mais o vasco AMEM LKKKKKK"
}
let dadosCompletos =  { ...dadosPessoais, ...dadosProfissionais}

console.log(dadosPessoais);
console.log(dadosProfissionais);
console.log(dadosCompletos);
