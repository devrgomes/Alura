let contRegressiva = 0;

while (contRegressiva != 1) {
    contRegressiva = prompt ("Digite um número de 1 a 10 para iniciar a contagem");

    if (contRegressiva <1 || contRegressiva > 10) {
        alert ("Este número NÃO faz parte da contagem!");
    } else{
        while (contRegressiva >= 1) {
            alert (contRegressiva);
            contRegressiva--;
        }
    }
}