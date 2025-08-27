'use strict'

/* Exemplo 01 */

//Procurando (querySelector) por um elemento chamado exemplo01
const exemplo01 = document.getElementById("exemplo1");
/*No getElementById não pode usar o # ou . para chamar o elemento.*/

const mensagem01 = document.querySelector("#mensagem01"); // querySelector usa a sintax do CSS.

/* Selecionando o Elemento diretamente no CSS ..... document.querySelector("div p b")*/

const pagina = document.querySelector("body");



const paragrafo = document.querySelectorAll("p")
/*querySelector("p") vai selecionar o primeiro paragrafo e o querySelectorAll("p") vai selecionar todos o paragrafos ou todos os elementos*/ 

console.log(paragrafo);


/*Sobre Eventos 
  Um evento é um acontecimento ou fenomeno que, quando acontece, dispara ações em nosso programa/site/aplicações
  
  O JavaScript suporta centenas de tipos de eventos. Exemplo: lcique do mouse, pressionar teclas, tocar na tela, rolagem da página, carregamento da pagina e etc. */



//Exemplo detectando eventos

//AO clicar 1X adiciona um texto ao paragrafo de msg
exemplo01.addEventListener("click", function(){
    mensagem01.textContent = "Opa, evento funcionou!" // progamando Evento com CLick.    
});
 // Ao clicar 2x, retira o texto do paragrafo de msg
  mensagem01.addEventListener("dblclick", function(){
    mensagem01.textContent = ""; //progamando evento com Duplo CLICK(dbl)


    
  });







