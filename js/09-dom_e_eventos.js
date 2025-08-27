'use strict'

/* Exemplo 01 */

//Procurando (querySelector) por um elemento chamado exemplo01
const exemplo01 = document.getElementById("exemplo1");
/*No getElementById não pode usar o # ou . para chamar o elemento.*/

const mensagem01 = document.querySelector("#mensagem01"); // querySelector usa a sintax do CSS.

/* Selecionando o Elemento diretamente no CSS ..... document.querySelector("div p b")*/

const pagina = document.querySelector("body");


console.log(exemplo01);
console.log(mensagem01);
console.log(pagina);


const paragrafo = document.querySelectorAll("p")
/*querySelector("p") vai selecionar o primeiro paragrafo e o querySelectorAll("p") vai selecionar todos o paragrafos dentro de um Array*/ 

console.log(paragrafo);






