//*Exercício 1- Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar 1 se o número for par e 0 se for ímpar.Nome: Letícia Calixto Diniz*//

console.clear();

const teclado = require (`prompt-sync`)();

let x: number = parseInt(teclado(`Digite um número inteiro: `));

function divisão (dividendo :number): number{
    let resultado: number = dividendo % 2;
    if (resultado == 0){
        console.log(`Número par!! 0`);
    }
    else if (resultado ==1){
        console.log(`Numero impar!! 1`);
    }
    return resultado;
}

let resultado: number = divisão(x);