let primeiroNumero = +prompt("Digite um número")
let segundoNumero = +prompt("Digite outro número")

console.log("O primeiro número é maior que o segundo?", primeiroNumero>segundoNumero);

console.log("O primeiro numero é igual ao segundo?", primeiroNumero===segundoNumero);

let restoPrimeiroDivididoPeloSegundo = primeiroNumero%segundoNumero
console.log("O primeiro numero é divisível pelo segundo?", restoPrimeiroDivididoPeloSegundo===0);

let restoSegundoDivididoPeloPrimeiro = segundoNumero%primeiroNumero
console.log("O segundo numero é divisível pelo primeiro?", restoSegundoDivididoPeloPrimeiro===0);







