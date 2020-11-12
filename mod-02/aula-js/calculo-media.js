// criar um programa que calcule a média das notas entre os alunos e envie mensagem do cálculo da média

const aluno1 = "Angélica";
const notaAluno1 = 10;

const aluno2 = "Flávio";
const notaAluno2 = 8.7;

const aluno3 = "Vitor";
const notaAluno3 = 6.2;

const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3;

// Se a média for maior que 7, parabenizar a turma
if (media > 7) {
  console.log(`A média da turma foi ${media.toFixed(1)}! Parabéns!`)
} else {
  console.log(`A média da turma foi ${media.toFixed(1)}! Precisam estudar mais!`)
}