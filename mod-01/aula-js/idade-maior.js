// DESAFIO 1

// Verificar se a pessoa é maior igual de 18 anos. 
// Se sim, deixar entrar; se não, bloquear a entrada.
// Se a pessoa tiver 17 anos, avisar para voltar quando fizer 18.

const idade = 17

if (!(idade >= 18) || (idade === 17)) {
  console.log("Você não pode entrar.")
} else {
  console.log("Você pode entrar.");
}

"Volte quando fizer 18 anos."