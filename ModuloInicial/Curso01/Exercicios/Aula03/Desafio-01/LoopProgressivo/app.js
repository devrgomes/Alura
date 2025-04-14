let contProgressivo = 0;

while (contProgressivo != 10) {

    contProgressivo = prompt("Digite um número de 1 a 10 para iniciar a contagem!");

    if (contProgressivo < 1 || contProgressivo > 10) {
        alert ("O número digitado NÃO faz parte da contagem!");
    }else {
        while (contProgressivo <=10) {
        alert (contProgressivo);
        contProgressivo++;
        }
    }

}