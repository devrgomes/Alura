alert ("Boas-Vindas ao desafio do número secreto!");

let chute;
let tentativas = 1;
let numMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numMaximo + 1);

while (chute != numeroSecreto) {
    
    chute = prompt (`Digite um número entre 1 e ${numMaximo}:`);

    if (chute == numeroSecreto) {
        break;

    } else {
        
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);

        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`);