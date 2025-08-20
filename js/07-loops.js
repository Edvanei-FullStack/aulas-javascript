"use strict"

/* Loops ou estruturas de repetição
são comandos que, baseados em alguma condição lógica, são programados para executar ações repetidas vezes.


comandos mais tradicionais: while (ENQUANTO) e for (PARA)

Normalmente, os laços são controlados através de uma variavel contadora. */

console.log("Exemplo 1: WHILE (enquanto)");


//Abaixo foi adicionado uma variavel let contador...
// while -> enquanto a varial for menor 5 o loop retorna com o valor.

let contador = 1;
while(contador <= 5) {
    console.log("Valor do contador: "+contador);

//incremento vai adicionando 1 numero inteiro a cada loop.    
contador++; 

}

/*Normalmente, os loops são controlados através de uma variavel contadora. Esta variavél é comunente chamda de "i", "j","k" ou qualquer outra letra se necessario.*/

console.log("Exemplo 1:WHILE (enquanto)");

let i = 1;
while(i <=5){
    console.log("Valor de i: "+i);
    i++ //incremento
    //i = i + 1
    
}

console.log("\nExemplo 2: FOR (para)");

/* for( inicialização da variavel; condiçao; atualização) */
for( let j = 1; j <= 10; j++ ){
    console.log("J vale"+j);
    

}

//Loop regressivo pode ser usado com qualquer comando for ou while

console.log("\nExemplo 3: loop regressivo ");
for(let k = 10; k >= 1; k--){
    console.log("K vale "+k);
    
}

console.log("\nExemplo 4: loop e array");

const bandas = ["Slayer", "Metallica", "Iron", "Nightwish", "Judas Priest"];

for( let i = 0; i < bandas.length; i++ ){
    console.log( bandas[i] );
    
}

console.log("\n--------------\n");


// Usando Loop for/of  (exclusivo do JS)
/*Usamos uma var/const (no caso, banda) para acessar cada elemento do array (no caso, bandas) */

for(const banda of bandas){
    console.log(banda);
    
}









