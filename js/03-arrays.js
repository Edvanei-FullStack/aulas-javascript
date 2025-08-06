`use strict`;

//Declarando um array (vetor)

let vocalistas = ["Ney", "Dio", "Lemmy", "David Gilmour"];

// console.log(vocalistas[0]) // vai buscar o "Ney"

console.log(vocalistas);

   // Relembrando como criar/usar arrays (vetor) //
   //No JS, vc pode colocar qualquer coisa em um array

   let seila = 6;

   const coisas = [10, "Senac", "<h2>Oie</h2>", seila, 15.88];
   console.log(coisas[1]);
   console.log(coisas[4]);
   
   /* Exercícios (FAÇA AQUI MESMO!) */

// 1) Crie um array contendo o nome de 7 coisas que vc gosta (exemplos: artistas, músicas, livros, comida... sei lá, inventa!)

let plataformas = ["Atari", "Mega Drive", "Super NES", "NeoGeo", "Playstation","X-box", "PC"]


// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string.

console.log(plataformas[4]);
console.log(plataformas[1]);

let concatenacao = (plataformas[4] + plataformas[1])
console.log(concatenacao);



// Para utilizar o template string é preciso usar ``

let Duas_plataformas = `Minha plataforma preferida é ${ plataformas[4]}, mas tambem cursto o classico ${plataformas[1]}`

console.log(Duas_plataformas);













   
   


