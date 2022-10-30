window.onload = function(){

    var botao1 = document.querySelector('#botao1');
    var botao2 = document.querySelector('#botao2');

    function mostrarMensagem(textoDaMensagem, elemento) {
        elemento.innerHTML = textoDaMensagem;
    }


    
    document.querySelector("#botoes #botao1").onclick = function () {
        botao1.classList.toggle("first");     
        if(botao1.classList.contains("first")){
            botao1.style.backgroundColor = "coral"
            this.innerHTML = "FECHAR PORTÃO";

        } else {
            this.innerHTML = "ABRIR PORTÃO";
            botao1.style.backgroundColor = "black"    

        }
    }

    document.querySelector("#botoes #botao2").onclick = function () {
            botao2.classList.toggle("second");    
            if(botao2.classList.contains("second")){
                botao2.style.backgroundColor = "coral"
                this.innerHTML = "APAGAR LUZ";
    
            } else {
                this.innerHTML = "ACENDER LUZ";
                botao2.style.backgroundColor = "black"    
    
            }

    }

/*
    botao1.onclick = function(){

        botao1.style.backgroundColor = "#008000";

    }

    botao2.onclick = function(){
        botao2.style.backgroundColor = "#008000";
        mostrarMensagem("APAGAR LUZ", botao2);
    }*/

}
