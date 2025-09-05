function crescente(array) {
    if(array.length !== 3){
        return "O array precisa ter 3 números exatos";
    }

    let a = array[0];
    let b = array[1];
    let c = array[2];
    let temp;

    if(a > b) { temp = a; a = b; b = temp; }
    if(a > c) { temp = a; a = c; c = temp; }
    if(b > c) { temp = b; b = c; c = temp; }

    return [a, b, c];
}


const numeros = [42, 7, 19];
console.log(crescente(numeros)); 
