let lanche ={
nome: "X-Burger",
 preco: 15.00,
 ingredientes:["pao","hamburguer","queijo","alface"]
}
console.log("O lanche " + lanche.nome + " custa $" + lanche.preco);
lanche.preco = 17.50;
lanche.vegano = false;
console.log(lanche);