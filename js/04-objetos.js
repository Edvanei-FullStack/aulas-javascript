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

// Exemplo 3: Array de Ojetos
console.log("\nExemplo 3\n");
const livros = 

[
    {
        titulo: "O Assassinato no Expresso do Oriente",
        autor:  "Agatha Hkes"
    },

    {   titulo: "Crepúsculo",
        Autor: "Stephanie Myers"},


    {
        titulo:"Um livro Qualquer",
        autor:"Fulano de Tal"   }   


];

console.log(livros);

console.log(livros[2].titulo);


/* Exercícios

1. Crie um objeto chamado "aluno" contendo os seguintes dados:
- Nome Completo
- Data de Nascimento (ENTRE ASPAS)
- (Use ARRAY) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente):
  - rua
  - número
  - bairro;



2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */


const aluno = {
    nome: "Edvanei Cruz",
    data_de_nascimento: "25 09 1987",
    lista_de_telefones: ["11 97750-1932", "4632655-8363"],
    endereço: {
        rua: "Castanheiro",
        numero: " 4 ",
        bairro: "Sto Eduardo"
        
    }
    
    


}

console.log(aluno);  

console.log(`O Nei esta com ${aluno.data_de_nascimento}, e reside no endereço: ${aluno.endereço, endereço.rua}`);























