'use strict'

/*Sobre Funções
Funções são blocos de código responsáveis por executar determinadas tarefas. Para usar estes blocos/funções, é necessário "chamar/invocar" a função desejada através do seu nome.

Vantagens ao usar funções:
- Reutilização de código
- Organização de código-fonte, permitindo a separação de diferentes lógicas e responsabilidades
- Performance melhor
- Maior facilidade para manutenções

No JavaScript, exitem varias maneiras de se criar uma função: função anônima, função nomeada/declarada e arrow function*/

console.log("Exemplo 1: função anônima");

const exemplo1 = function () {
    //corpo da função: ação que função vai fazer
    console.log("Ola Função Anônima");

};

// chamando/invocando a função
exemplo1();

console.log("\nExemplo 2: Função Nomeada/Declarada");
function exemplo2() {
    console.log("Esta é uma função nomeada!");

};

exemplo2();

console.log("\nExemplo 3: Arrow Function (Função Flecha/Seta");

/*Sintaxe potencialmente mais simples para funções na JavaScrip */
const exemplo3 = () => {
    console.log("Sintaxe Arrow Function!");

    exemplo3();

};

/*Obs: funções (em qualquer sintaxe) também podem trabalhar com parâmetros/argumento.

Quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe valores/dados através de parâmetros/argumentos entre os parenteses.

Geralmente, ao terminar o processamento dos dados, a função "retorna" para fora um resultado. */

function saudacao(nome = "Visitante") {
    console.log("Olá, " + nome);

}


saudacao("Tiago");
saudacao("Monica");
saudacao("Catarina");
saudacao(); //Nesse caso, é usado "Visitante" como valor como se fosse uma condição se tiver nome vai escrever a "Visitante"

console.log("n\Exemplo 5: função com parametros e retorno");

/*Sempre que tivemos a necessidade de trabalhar om o resultado do processamento de uma função, então essa função deve ter return */


function multiplicar(valor1, valor2) {
    return valor1 * valor2

};

//Chamamos a função e recebemos o retorno/resultado dela
let resultado1 = multiplicar(10, 5);
let resultado2 = multiplicar(200, 10);


//Exibimos o resultado

console.log("Resultado 1: " + resultado1);
console.log(`Resultado 2: ${resultado2}`); // preciso apreender o template string

console.log("\nExemplo 6: Simplificando com Arrow Function");

/* Versão 1: Sintaxe declarada/nomeada

function somar(valor1, valor2){
    return valor1 + valor2
}; */

//Versão 2: Sintaxe Arrow Function com retorno implicido
const somar = (valor1, valor2) => valor1 + valor2;


console.log(somar(150, 500));

console.log("\nExemplo 7: formatando valor monetário");

let preco = 5000;
let desconto = preco * 0.10; // 10%
let precoFinal = preco - desconto;

function formatarMoeda(valor) {
    return new Intl.NumberFormat("pr-br", {
        style: "currency",
        currency: "BRL"

    }).format(valor)
}

console.log(`Preço original:" ${formatarMoeda(preco)}`);
console.log(`Desconto: ${ formatarMoeda(desconto)}`);
console.log(`Preço Final:" ${formatarMoeda(precoFinal)}`);

//Exemplo: usando recursos da classe Intl (Internacionalização)
const exemplo = new Intl.NumberFormat("pr-br", {
    style: "currency",
    currency: "BRL"

}).format(preco);

console.log(exemplo);



















