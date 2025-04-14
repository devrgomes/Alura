let nota = parseFloat(prompt("Digite a nota da sua prova:"));

if (nota < 7) {
    console.log (`Sua nota foi ${nota}, portanto você está REPROVADO, boa sorte da proxima vez!`);
    alert (`Sua nota foi ${nota}, portanto você está REPROVADO, boa sorte da proxima vez!`);
} else {
    console.log (`Sua nota foi ${nota}, portanto está APROVADO, meus parabéns!`);
    alert (`Sua nota foi ${nota}, portanto está APROVADO, meus parabéns!`);
}
/*let resultado = nota < 7 ? 'REPROVADO' : 'APROVADO';

console.log (resultado);
alert (resultado);*/