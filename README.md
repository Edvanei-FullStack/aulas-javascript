# Atividades de programação em JavaScript

Introdução ao JavaScript para programação web.

## Sobre a Linguagem

- JavaScript **NÃO É** Java!
- JavaScript = JS = EcmaScript
- É uma linguagem voltada para a web (Front-End e Back-End)
- Front-End: depende do navegador, depende de página HTML
- Back-End: depende da plataforma Node.js depende de linha de comando.
- JS pode ser usado também para criação de aplicações web, usando tecnologias como React, Angular, React Native etc.

## Onde usar o JS dentro do Front-End

Recursos interativos em geral, como por exemplo:

- Funcionalidades de menu responsivo.
- Galeria de Fotos
- Carrossel/Slider de Conteudo
- Recursos avançados de formulário (validação mais profissional, interações com API) 
- Interações avançadas (manipulação de teclado, mouse, gestos etc)


--- 

## Sobre arrays 

Arrays são estruturas de dados **indexados**, também conhecidos como vetores ou matrizes.

Na prática, um array é uma lista de dados sequenciais, e cada dado é armazenado em uma posição/indice do array.

**Obs.:** a contagem dos índices **sempre inicia em ZERO**

## A concatenação

 Em JavaScript é o processo de unir duas ou mais strings (ou outros valores) em uma única string. Existem várias formas de fazer isso:

 ## Usando o Operador +
 
let nome = "Edvanei";
let sobrenome = "Cruz";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); // "Edvanei Cruz"

## Usando o operador +=

let saudacao = "Olá, ";
saudacao += "Edvanei!";
console.log(saudacao); // "Olá, Edvanei!"

## Usando template  (crase `)

let nome = "Edvanei";
let idade = 25;
let mensagem = `Meu nome é ${nome} e tenho ${idade} anos.`;
console.log(mensagem);

## Usando o método .concat()

let parte1 = "Bom ";
let parte2 = "dia!";
let frase = parte1.concat(parte2);
console.log(frase); // "Bom dia!"



## Sobre Objetos

Objetos também são estruturas de dados só que **não-indexados**, ou seja, o acesso aos dados é feito de forma diferente do que vimos nos arrays.

No objeto, acessamos através de **propriedades** e **valores**
declarados dentro do objeto.

Normalmente, o objeto é programado de acordo com algum contexto relacionado ao mundo real.


## DOM

A manipulação do DOM (Document Object Model) é o processo de modificar a estrutura, conteúdo e estilo de uma página web através de uma linguagem de script, como o JavaScript. Isso permite a criação de interfaces de usuário dinâmicas, onde elementos podem ser adicionados, removidos ou alterados em tempo real, sem a necessidade de recarregar a página. Para realizar essas operações, os desenvolvedores utilizam métodos para selecionar elementos (como getElementById ou querySelector), para criar e remover elementos (como createElement e remove), e para modificar atributos e estilos. 

Como funciona a manipulação do DOM

1. Representação em árvore:
O DOM representa o documento HTML como uma árvore de objetos, onde cada nó é um elemento da página, um atributo ou um texto. 

2. Acesso e Interação:
O JavaScript tem acesso a essa estrutura em árvore, permitindo que os desenvolvedores selecionem elementos específicos. 

3. Modificação:

Após selecionar os elementos, o JavaScript pode modificar o conteúdo, a estrutura (adicionar/remover elementos), e os estilos (CSS) da página. 
Principais operações
Seleção de elementos:

## document.getElementById('ID'): Seleciona um elemento específico usando seu ID.  

## document.querySelector('seletorCSS'): Seleciona o primeiro elemento que corresponde a um seletor CSS. 

## document.querySelectorAll('seletorCSS'): Seleciona todos os elementos que correspondem a um seletor CSS. 

# Criação e remoção de elementos:

document.createElement('tag'): Cria um novo elemento HTML. 
element.remove(): Remove um elemento do DOM. 

parentNode.removeChild(childNode): Outra forma de remover um elemento filho. 

Modificação de conteúdo e atributos:

element.innerHTML = 'novo conteúdo': Altera o conteúdo HTML de um elemento. 

element.textContent = 'novo texto': Modifica o texto de um elemento. 

element.style.backgroundColor = 'blue': Altera o estilo CSS de um elemento. 

Adição de elementos:
parentNode.appendChild(newElement): Adiciona um novo elemento como filho de outro. 

Vantagens
Páginas interativas: Permite criar websites e aplicações web dinâmicas e interativas. 
Atualizações em tempo real: O conteúdo da página pode ser atualizado sem a necessidade de recarregar a página inteira. 

Experiência do usuário: Facilita a criação de animações, efeitos visuais e respostas a ações do usuário. 

## EVentos

🚨 Como funcionam os eventos
👉 Sintaxe básica:
elemento.addEventListener("tipoEvento", funçãoCallback);


tipoEvento: o tipo do evento (ex: "click", "mouseover", "keydown").

funçãoCallback: o que você quer que aconteça quando o evento ocorrer.

🎯 Exemplos práticos
1. Clique em um botão

HTML:

<button id="meuBotao">Clique aqui</button>


JavaScript:

const botao = document.getElementById("meuBotao");

botao.addEventListener("click", () => {
  alert("Você clicou no botão!");
});

2. Mudança em um input

HTML:

<input id="nome" type="text" placeholder="Digite seu nome" />


JavaScript:

const inputNome = document.getElementById("nome");

inputNome.addEventListener("change", () => {
  console.log("Nome alterado para:", inputNome.value);
});

3. Tecla pressionada (keydown)
document.addEventListener("keydown", (evento) => {
  console.log("Tecla pressionada:", evento.key);
});

4. Mouse passando por cima (mouseover / mouseout)
const caixa = document.getElementById("caixa");

caixa.addEventListener("mouseover", () => {
  caixa.style.backgroundColor = "yellow";
});

caixa.addEventListener("mouseout", () => {
  caixa.style.backgroundColor = "white";
});

🧠 Dicas para aprender eventos

Comece com o evento "click", que é o mais comum.

Use console.log() dentro do evento pra ver o que está acontecendo.

Pratique com elementos reais (botões, inputs, caixas).

Teste no navegador direto com o console do DevTools (F12).












