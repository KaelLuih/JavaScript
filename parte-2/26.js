const input = require('prompt-sync')();

// Mapeamento letra → Morse
const LETRA_PARA_MORSE = {
  "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".",
  "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---",
  "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---",
  "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-",
  "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--",
  "z": "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--",
  "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..",
  "9": "----.",
  " ": "/"
};

function converterParaMorse(texto) {
  return texto
    .toLowerCase()              
    .split("")                  
    .map(char => LETRA_PARA_MORSE[char] || "?") 
}


let fraseUsuario = input("Digite uma frase normal para converter em Morse: ");

let resultado = converterParaMorse(fraseUsuario);
console.log("Frase em Morse:", resultado);
