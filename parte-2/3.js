    const input = require( 'prompt-sync')();

    const tempo = parseFloat(input('Digite o tempo que demorou em horas '));
    const velocidade = parseFloat(input('Digite a velocidade media '));

    const distancia = tempo * velocidade;

    console.log(`A distancia final foi de ${distancia}`);
    