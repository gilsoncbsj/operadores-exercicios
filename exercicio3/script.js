//Parte 1

console.log("5 é maior que 20 e também é menor que 2:",5>20&&5<2);
console.log("5 é igual a 5 ou é igual a '5':",5===5||5==="5")
console.log("negação de (vinte é maior que cinquenta):",!(20>50))
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta):",!(20>50||50>60))

//Parte 2

let auxilioCreche = 45.50
let vendasJaneiro = 5784.50
let vendasFevereiro = 3418.41
let vendasMarço = 4124.10
let vendasAbril = 1874.00
let vendasMaio = 7000.00
let vendasJunho = 9450.00
let salarioFixo = 2000.00
let numeroFilhos = 2

console.log("O salário fixo mais o auxílio creche: R$", salarioFixo+(auxilioCreche*numeroFilhos));
console.log("Quanto Fulano de Silva receberá de comissão em janeiro: R$", vendasJaneiro*0.1)
console.log("Quanto Fulano de Silva será descontado em janeiro pelo INSS: R$", (salarioFixo+(vendasJaneiro*0.1))*0.05)

console.log("Salario Janeiro: R$", (salarioFixo+(vendasJaneiro*0.1))*0.95+(auxilioCreche*2))
console.log("Salario Fevereiro: R$", (salarioFixo+(vendasFevereiro*0.1))*0.95+(auxilioCreche*2))
console.log("Salario Março: R$", (salarioFixo+(vendasMarço*0.1))*0.95+(auxilioCreche*2))
console.log("Salario Abril: R$", (salarioFixo+(vendasAbril*0.1))*0.95+(auxilioCreche*2))
console.log("Salario Maio: R$", (salarioFixo+(vendasMaio*0.1))*0.95+(auxilioCreche*2))
console.log("Salario Junho: R$", (salarioFixo+(vendasJunho*0.1))*0.95+(auxilioCreche*2))

console.log("A média salarial é: R$", (((salarioFixo+(vendasJaneiro*0.1))*0.95+(auxilioCreche*2))+((salarioFixo+(vendasFevereiro*0.1))*0.95+(auxilioCreche*2))+((salarioFixo+(vendasMarço*0.1))*0.95+(auxilioCreche*2))+((salarioFixo+(vendasAbril*0.1))*0.95+(auxilioCreche*2))+((salarioFixo+(vendasMaio*0.1))*0.95+(auxilioCreche*2))+((salarioFixo+(vendasJunho*0.1))*0.95+(auxilioCreche*2)))/6)









