// Construa um algoritmo em JavaSript que determine (imprima) se um dado número N
// inteiro (recebido através do teclado) é PAR ou ÍMPAR.



// prompt retorna string/texto

//parse === transformar
var numero = parseInt(prompt("Digite um número inteiro: "))

if (numero % 2 === 0) {
    console.log(numero + "é PAR")
} else {
    console.log(numero + "é ÍMPAR")
}