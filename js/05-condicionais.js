'use strict'

/*Comandos Condicionais Mais comuns:

if   -> SE

else -> SENÂO

*/

console.log("Exemplo 1");

let numero = 5;

if(numero >= 10){
     console.log("Se vc esta vendo essa mensagem é porque a condição é VERDADEIRA!");
     
}

console.log("Exemplo 2");

let aluno = "Ozzy";
let idade = 19;

/* Lógica: verificar se o aluno é maior ou menor de idade*/


//Condicional Composta (if/else)
if(idade < 18){
    console.log("Você é menor de idade!");    
}

else{
    console.log("Você é maior de idade, Parabens!");    
}

/*Geral

 Exercício Condicional
 
1. Crie duas variáveis conforme a seguir:
 
- Nota 1 (contendo um valor de 0 a 10)
- Nota 2 (contendo outro valor de 0 a 10)


 
/* 2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.

let media = ( nota1 + nota2 ) /2;
console.log(media);

 
3. /*Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
Caso contrário, mostre "reprovado".



if(media >= 7){
    console.log("Aprovado!");    
  
}

else{ console.log("Reprovado!");

} */

/*Atalho ifelse

if (condition) {
    
} else { } */ 


//Condicional Encadeada/Sucessiva

/* Verificandoo desempenho do aluno conforme a média:

- Média acima de 9? ótimo
- Média acima de 7? Bom
- Média acima de 5? Ruim
- Média até 5? Péssimo */






let nota1 = 10;

let nota2 = 10;

let media = (nota1 + nota2) /2;



if(media > 9){
    console.log("Ótimo!");        
}

else if( media > 7){
    console.log("Bom!");
    
}

else if( media > 5){
    console.log("Ruim!!!");
    
}

else(media => 5 ) {
    console.log("Pessimo!");

}
    

    










