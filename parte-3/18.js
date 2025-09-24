let ApresentacaoPessoal ={
    nome: "Nuno Moreira Craque",
    anoNascimento: 1999,
    apresentar: function(){
        const idade = 2025 - this.anoNascimento
        return `Olá, meu nome é ${this.nome} e eu tenho ${idade} anos.`;
    }
}
console.log(ApresentacaoPessoal.apresentar); 