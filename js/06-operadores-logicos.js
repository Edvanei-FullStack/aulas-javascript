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

/*if (idade >= 18 && temCarta === true) Comparação IMplicita*/

/*if (idade >= 18 && temCarta) Comparação /


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


console.log("\nExemplo ||")
// || -> retorna VERDADEIRO se pelo menos uma das condições for VERDADEIRA

let feriado = false;
let fimDeSemana = false;

//mesmo forma simplificada if(feriado || fimDeSemana)

if(feriado === true || fimDeSemana === true){
    console.log("Não tem Aula!");    
}

else{
    console.log("Tem Aula!");
    
}


console.log("\nExemplo !");
// ! -> Inverte a lógica. O que é TRUE, vira FALSE. O que é FALSE, vira TRUE.

//Supomdo que a BlackFriday não esta ativa, ou seja nao esta em vigor

blackfriday = false;

if(!blackfriday){}

// ! esclamação operador lógico de inversão.








