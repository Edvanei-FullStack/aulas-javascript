'use strict'

const campoSenha = document.querySelector("#senha");
const botaoMostrar = document.querySelector("#mostrar");

/* Monitoramos o evento pointerdown/pointeup pois ele funcionará tanto para o acionamento com mouse no desktop qunato com o dedo em mobile*/
 
botaoMostrar.addEventListener("pointerdown", function(){
    // Tá "segurando" o botão? Troca o type para text e mostra a senha
    senha.type = "text";
});

botaoMostrar.addEventListener("pointerup", function(){
    // Soltou o botão? Volta o type para password e esconde a senha
    senha.type = "password";
});
    /// pointer tem suas variações: pode ser pointermove, up, down, leave 
botaoMostrar.addEventListener("pointerout", function (){
    senha.type ="password"

} );




 