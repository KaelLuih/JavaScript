let configuracoes = {
    tema: "Dark",
    idioma: "pt-br"
};

Object.freeze(configuracoes);

let novasConfiguracoes = { 
    ...configuracoes,   
    tema: "Light"      
};

console.log(configuracoes);      
console.log(novasConfiguracoes); 
