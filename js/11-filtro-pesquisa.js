'use strict'

const campoBusca = document.querySelector("#busca")
const jogos = document.querySelectorAll("#jogos li")

//Monitoramento a digitação em tempo real dentro do campo busca
campoBusca.addEventListener("input", function(){
    //Capturando o que é digitado e transformando em letra minuscula
    const termoDigitado = campoBusca.value.toLowerCase();
    console.log(termoDigitado); 



// Acessando cada jogo dentro da lista de clientes
    for(const jogo of jogos ){
    // Se o nome do cliente incluir algum caractere digitado
    if( jogo.textContent.toLowerCase().includes(termoDigitado)){
        jogo.style.display = "list-item";
        //Então mantemos o <li> visivel

    } else {
        //Senão, escondemos o <li>
        jogo.style.display ="none"
        
    }

}


    

});

