let idades = [19,20,17];


let maioresde18 = idades.every(function(numero){

    return numero > 18
});

console.log(maioresde18);