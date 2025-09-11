let numeros = [1, 2, 3, 4 ]
let nomes = ["Arthur" , "Arshan" , "Otavio"];
console.log(numeros)

numeros.join();
console.log(numeros)

numeros.reverse();
console.log(numeros)

let outroarray=numeros.slice(1,2);
console.log(outroarray);


numeros.sort();
console.log(numeros);



let pares = numeros.filter(function(numero){
    return numero % 2 ===0;
});
console.log(pares);


let QuadradoNumeros = numeros.map(function(numero){
return numero * numero;

});
console.log(QuadradoNumeros);

let somaTotal = numeros.reduce(function(numero,total){
    return total + numero;
})
console.log(somaTotal);



nomes.forEach(function(indice , item){
    
console.log(indice,item);
});