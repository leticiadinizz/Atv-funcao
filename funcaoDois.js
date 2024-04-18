//*Exercício 2- Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles. Nome: Letícia Calixto Diniz//*
console.clear();
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
var n2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
var n3 = parseInt(teclado("Digite o terceiro n\u00FAmero: "));
function parametro(numero1, numero2, numero3) {
    var menor = 0;
    if (n1 < n2 && n1 < n3) {
        console.log("O menor numero \u00E9: ".concat(n1));
    }
    else if (n2 < n1 && n2 < n3) {
        console.log("O menor numero \u00E9: ".concat(n2));
    }
    else if (n3 < n1 && n3 < n2) {
        console.log("O menor numero \u00E9: ".concat(n3));
    }
}
parametro(n1, n2, n3);
