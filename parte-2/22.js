let fruta = ["maça " , "Banana " , "Laranja "];

console.log(fruta[1]);

fruta.push ("Morango");

console.log(fruta);

fruta.shift();
console.log(fruta);

let numero = [1,2,3,4,5];
numero.push (99);
console.log(numero);

numero.pop();
console.log(numero);

numero.unshift(56);
console.log(numero);


numero.shift();
console.log(numero);


let frutas2 = ["uva" , "goiaba " , "maracuja"];

let todasAsFrutas = fruta.concat(frutas2);
console.log(todasAsFrutas);


let frutas3 = todasAsFrutas.slice(2);
console.log(frutas3);

todasAsFrutas.splice(1,2);
console.log(todasAsFrutas);


console.log(todasAsFrutas.indexOf("Banana"));


let LetrasM = todasAsFrutas.filter(l => l[0] === "m"); 
console.log(LetrasM); 


let arrayDobro = numero.map(function(numeros){
    return numeros * 2;
})
console.log(arrayDobro);

todasAsFrutas.forEach(function(item,indice){
    console.log(item,indice);
} )