/*Crie uma função que liste todos os números primos até 1000.
Número primo é aquele que é divisível somente por 1 e por ele mesmo.-Nome: Letícia Calixto Diniz*/

const teclado = require (`prompt-sync`)();

function primo(num, divisor = 2) {
    if (num <= 1){
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

function imprimirPrimos(determinadoNumero, atual:number = 2) {
    if (atual > determinadoNumero) {
        return;
    }
    if (primo(atual)) {
        console.log(atual);
    }
    imprimirPrimos(determinadoNumero, atual + 1);
}

let DeterminadoNumero: number = parseFloat (teclado(`Digite até o numero primo que deseja: `));
imprimirPrimos(DeterminadoNumero)

