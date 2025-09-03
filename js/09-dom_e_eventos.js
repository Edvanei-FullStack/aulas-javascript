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
  
  O JavaScript suporta centenas de tipos de eventos. Exemplo: clique do mouse, pressionar teclas, tocar na tela, rolagem da página, carregamento da pagina e etc. */



//Exemplo detectando eventos

//AO clicar 1X adiciona um texto ao paragrafo de msg
exemplo01.addEventListener("click", function () {
    mensagem01.textContent = "Opa, evento funcionou!" // programando Evento com CLick.

    mensagem01.classList.add("destaque"); //este class "destaque" esta interna no Head do Html. ao clicar vai mudar de acordo com a estilização. Para inserir a estilização usamos o .add

});

// Ao clicar 2x, retira o texto do paragrafo de msg
mensagem01.addEventListener("dblclick", function () {
    mensagem01.textContent = ""; //progamando evento com Duplo CLICK(dbl)

    mensagem01.classList.remove("destaque")//utilizando o .remove para remover a estilização interna no Html



});

/*Exercícios
 
1) Crie uma constante nova e selecione o h1 da sua página

2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado.

3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda (padrão). */


const evento = document.querySelector("#evento");
console.log(evento);

evento.addEventListener("mouseover", function () {
    evento.textContent = "Praticando Eventos!"
    evento.classList.add("centralizar");
});

const evento1 = document.getElementById("evento1");


evento1.addEventListener("click", function () {
    evento.textContent = "Eventos"

    evento.classList.remove("centralizar");

    
});

/*Exemplo*/
const botaoModoNoturno = document.querySelector("#noturno");


botaoModoNoturno.addEventListener("click", function(){
    //Usamos toggle para alternar entre adicionar a classe Ou remover a classe, de acordo com cada clique no botão.
    pagina.classList.toggle("modo-noturno"); 

    pagina.style.transition = "2s"

      if(pagina.classList.contains("modo-noturno")){
      botaoModoNoturno.textContent = "Desativar";

    } else{
      botaoModoNoturno.textContent = "Ativar";
    }




  
    
});

/* DESAFIOS!
    1) Faça a mudança de cores acontecer gradualmente (use o transition!)
    
    pagina.style.transition = "2s"    */
    

    /*2) Se o modo noturno estiver ativado, ou seja, se a classe modo-noturno
    estiver aplicada à página, faça o texto do botão mudar para "Desativar".
    Caso contrário, faça o texto do botão exibir "Ativar". 
    
     if(pagina.classList.contains("modo-noturno")){
      botaoModoNoturno.textContent = "Desativar";

    } else{
      botaoModoNoturno.textContent = "Ativar";
    }

*/


/* Evento 02 */

const janelinha = document.querySelector("#janelinha")

//monitorando o evento de mouseout no documento inteiro

document.addEventListener("mouseout", function(event){

  if(event.clientY < 0){ // client Y significa eixo horizontal se fosse cliente X seria eixo vertical
    
    janelinha.showModal(); //showModal vai abrir a Janelinha
    

  }
    
  });  
  
  /*Selecionar o botão existente DENTRO da janelaModal (já selecionada anteriormente.)*/

  const botaoFechar = janelinha.querySelector("button");

  //Qunado acontecer o acionamento/clique no botão Fechar, fazemos a janelaModal fechar (close) */
  botaoFechar.addEventListener("click", function(){
    janelinha.close();

  });




















