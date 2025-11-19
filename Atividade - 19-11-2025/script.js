// Questão 01

/* let exemplo = "valor";
console.log(exemplo); */

// Questão 02

/* let é um valor mutável ao decorrer da execução do código e da interação com o usuário, enquanto const é um valor estático que só pode ser modificado manualmente pelo desenvolvedor. */

/* const cpf = parseInt(prompt("Digite seu CPF (apenas números):"));
console.log(cpf); */

// Questão 03

/* let idade = parseInt(prompt("Insira sua idade:"));
alert(`Você tem ${idade} anos.`); */

// Questão 04

// Number, BigInt, string, Boolean, Symbol, Undefined e Null

/* let numero = 10; // Number
let nome = "Eduardo"; // String
let ativado = true; // Boolean
let desativado = false; // Boolean
let objetoVazio = null; // Null
let variavel // Undefined
let id = Symbol(); // Symbol */

// Questão 05

/* O programa retornará um erro de escrita, pois uma variável não pode ser redeclarada no mesmo escopo */

/* let x = 5;
let x = 10; */

// Questão 06

/* const pi = 3.14;
let raio = 5;

console.log((pi * raio) ** 2); */

// Questão 07

/* O valor da variável será reatribuído, alterando o resultado final para o último declaado. */

/* let nome = "Ana";
nome = "Carlos";

alert(nome); */

// Questão 08

/* let numero1 = parseFloat(prompt("Digite o primeiro número da soma:"));
let numero2 = parseFloat(prompt("Digite o segundo número da soma:"));
let soma = numero1 + numero2;

alert(`O resultado da soma é: ${soma}.`); */

// Questão 09

/* A constante é um valor fixo, imutável. Ao tentar reatribuir o valor, o programa acusará um erro de escrita devido a esta regra. */

/* const cidade = "São Paulo";
cidade = "Rio de Janeiro"; */

// Questão 10

/* const valor = "123";

console.log(typeof valor); */

// Questão 11

/* let valor;
valor = 100;

console.log(valor); */

// Questão 12

/* Null é quando uma variável é declarada mas o valor é vazio, enquanto Undefined é quando a variável é declarada mas o valor é indefinido, ou seja, não foi sequer atribuído. */

// Questão 13

/* let dataDeNascimento = parseInt(prompt("Insira sua data de nascimento")); */

// Questão 14

/* O número 52 pois o Javascipt interpreta todos os valores de maneira inicial como sendo do tipo String, logo, o resultado final será a exibição de uma String após a outra.  */

/* const numero = "5";
alert(numero + 2); */

// Questão 15

/* const logado = true;

console.log(typeof logado); */

// Questão 16

/* O mesmo já foi feito na questão 08, utilizando parseFloat para converter o valor digitado pelo usuário (inicialmente uma String) para valor numérico que aceita decimais. */

// Questão 17

/* Porque Var possui diversos problemas de escopo, tornando o uso de Let mais confiável. */

// Questão 18 

/* let nome = prompt("Digite seu nome:");
let sobrenome = prompt("Digite seu sobrenome:");

alert(`Seu nome é: ${nome} ${sobrenome}.`); */

// Questão 19

/* Coerção de tipos é nada mais nada menos que uma convesão automática de tipos de dados para que o código seja executado (o que, dependendo do caso, pode gerar resultados indesejados). */

/* let valorDigitado = prompt("Digite um número:");
let numero = Number(valorDigitado);

console.log("Número + 5 =", numero + 5); */

// Questão 20

/* const numero1 = 10;
let numero2 = 5;
let numero3 = parseFloat(prompt("Digite um número:"));
let soma = numero1 + numero2 + numero3;

alert(`A soma dos 3 números é ${soma}.`); */