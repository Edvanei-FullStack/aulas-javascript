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












