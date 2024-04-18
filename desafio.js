"use strict";
/*Crie uma função que liste todos os números primos até 1000.
Número primo é aquele que é divisível somente por 1 e por ele mesmo.*/
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
function primo(num, divisor) {
    if (divisor === void 0) { divisor = 2; }
    if (num <= 1) {
        return false;
    }
    if (divisor === num) {
        return true;
    }
    if (num % divisor === 0) {
        return false;
    }
    return primo(num, divisor + 1);
}
function imprimirPrimos(determinadoNumero, atual) {
    if (atual === void 0) { atual = 2; }
    if (atual > determinadoNumero) {
        return;
    }
    if (primo(atual)) {
        console.log(atual);
    }
    imprimirPrimos(determinadoNumero, atual + 1);
}
var determinadoNumero = 1000;
imprimirPrimos(determinadoNumero);
