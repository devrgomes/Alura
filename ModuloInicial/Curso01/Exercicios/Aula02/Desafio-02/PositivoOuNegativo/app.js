let numero = prompt ("Informe um número:");

if (numero >= 0) {
    alert (`Você escreveu ${numero} e este número é positivo`);
}else if (numero < 0) {
    alert (`Você escreveu ${numero} e este número é negativo`);
}else {
    alert ("Escreva um número");
}