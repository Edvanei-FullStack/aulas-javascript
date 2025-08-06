`use strict`;

//Exemplo 1: objeto com dados de uma pessoa 
console.log("Exempplo 1\n")
                      //   \n  utilizado para pular linha.

const pessoa = {
    nome: "Chaves",
    idade: 8,
    cidade: "São Paulo",
    estado: "SP" 

}

console.log(pessoa);

console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos`);


//Exemplo 2: Objeto com Array
console.log("\nExemplo\n");

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
}

/*Para acessar algum dos volumes, primeiro passamos pela propriedade(volumes) usando `Ponto` e, chegando nela usamos os 'colchetes' com indice pois se trata de um array.*/

console.log(`Meu Livro preferido é ${livro.volumes[1]}`);










