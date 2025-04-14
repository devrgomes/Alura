let diaDaSemana = prompt ("Qual o dia da semana e hoje?");

if (diaDaSemana === 'sábado' || diaDaSemana === 'domingo') {
    alert ("Bom fim de semana!");
} else if (diaDaSemana === 'segunda-feira' || diaDaSemana === 'teça-feira' || diaDaSemana === 'quarta-feira' || diaDaSemana === 'quinta-feira' || diaDaSemana === 'sexta-feira'){
    alert ("Boa semana!");
} else {
    alert ("Insira um dia válido");
}