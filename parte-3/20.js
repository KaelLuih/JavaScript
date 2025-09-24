let livro = {
titulo: "1984",
autor: "George Orwell",

paginas: 328
}
console.log(Object.keys(livro));
console.log(Object.values(livro))
for (let [chave, valor] of Object.entries(livro)) {
  console.log(`${chave}: ${valor}`);
}