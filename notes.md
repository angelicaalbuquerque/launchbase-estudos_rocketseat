# Anotações

## Módulo 01 - Introdução à programação

### Iniciando com a programação Web

**O que é programação?**

Programação é ensinar o computador, passando diversas instruções em algoritmos, que são um conjunto de regras com passos que devem ser feitos para um resultado ser alcançado. Com isso, configuramos e criamos nossos softwares.

**Linguagens de programação**

O computador precisa de uma linguagem específica para entender algumas coisas. A linguagem da máquina é binária e nós, programadores, escrevemos de maneira mais humana. É aí que entram as linguagens de programação, que são diversas, como: Python, Java, PhP e Javascript, que são maneiras de conversar com o computador.

Escolhemos uma linguagem depedendo do tipo do aplicativo que vamos desenvolver: Desktop, Web e Mobile.

**Por que Javascript?**

Porque esta linguagem está em todos os tipos de aplicativos.

É uma linguagem moderna, pensando sempre no futuro; tem comunidade muito forte; é popular, sem uma das principais linguagens utilizadas no mundo, até mesmo por grandes empresas; é fácil de escrever e a sintaxe é fácil de aprender.

### Iniciando no JavaScript

Variável: tudo que vou gravar na memória do computador por um tempo, mas quando o programa terminar de executar some da memória. Fica salva nessa memória do computador e posso chamar quando eu quiser durante a execução do meu programa.

Constante: formato de variável que não aceita que valores sejam modificados.

```bash
const nome = "Angélica";
```

Para testar um arquivo .js, é necessário um "motor" para rodar. O Chrome já tem um "motor" embutido nele, que faz entender o JS. Para usar esse "motor" na nossa máquina, usamos o NodeJS.

Console.log(): Executa uma série de instruções que mostra uma mensagem no terminar. No caso, a variável nome.

typeof: Quando coloco console.log(typeof nome), ele me retorna o tipo daquela variável.

#### Estruturas condicionais

If

Se (verdadeiro) {
//faz alguma coisa
} senão {
//faz outra coisa
}

```bash
if (media > 7) {
  console.log(`A média da turma foi ${media.toFixed(1)}! Parabéns!`)
} else {
  console.log(`A média da turma foi ${media.toFixed(1)}! Precisam estudar mais!`)
}
```
