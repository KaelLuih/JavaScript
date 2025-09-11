const input = require('prompt-sync')();

function montante() {
    const capital_inicial = parseFloat(input('Digite o capital inicial investido: '));
    const taxa_de_juros = parseFloat(input('Digite a taxa de juros o percentual: '));
    const tempo_investimento = parseFloat(input('Digite o tempo investido em meses: '));

    let m = capital_inicial * (1 + (taxa_de_juros / 100) * tempo_investimento);
    return m;
}

console.log('Montante final:', montante());