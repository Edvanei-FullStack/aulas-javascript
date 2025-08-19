'use strict'

/* Operadores LÓGICOS 
&&  ->   E           -> AND
||  ->   OU          -> OR
!   ->  NÂO/NEGAÇÃO  -> NOT

*/

// && -> retorna TRUE se TODAS as condições forem VERDADEIRAS

console.log("Exemplo &&");
let idade = 30;
let temCarta = true;


if (idade >= 18 && temCarta === true){
    console.log("Pode dirigir");    
    
}

else{
    console.log("Não pode Dirigir");
    
}


/* Sobre duplo e triplo sinal de igual
- Ao usar Duplo sinal de IGUAL(==)a comparação esta relacionada a somente VALOR, ou seja, NÃO IMPORTA o tipo de dados (string, number, etc)

- Ao usar Triplo sinal de igual (===) a compração é do VALOR E DO TIPO DE DADO, ou seja, IMPORTA TUDO, na duvida use 3 sinais*/

let a = 10;
let b = "10";
//let resultadoComparacao = a == b; // TRUE
let resultadoComparacao = a === b;
//let resultadoComparacao = a === b; // False
console.log(resultadoComparacao);



