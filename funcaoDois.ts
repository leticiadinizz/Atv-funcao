//*Exercício 2- Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles. Nome: Letícia Calixto Diniz//*

console.clear();

const teclado = require (`prompt-sync`)();

let n1: number =parseInt(teclado(`Digite o primeiro número: `));
let n2: number =parseInt(teclado(`Digite o segundo número: `));
let n3: number = parseInt(teclado(`Digite o terceiro número: `));

function  parametro (numero1:number,numero2: number,numero3: number):void{
    let menor: number = 0;
    if (n1 < n2 && n1 < n3){
        console.log(`O menor numero é: ${n1}`);
    }
    else if (n2 < n1 && n2 < n3){
        console.log(`O menor numero é: ${n2}`);
    }
    else if (n3 < n1 && n3 < n2){
        console.log(`O menor numero é: ${n3}`);
    }
}
parametro(n1,n2,n3)
