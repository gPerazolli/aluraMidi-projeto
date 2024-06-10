const listaTeclas = document.querySelectorAll('.tecla');

function tocaSom(idAudio){
    document.querySelector(idAudio).play();
} 
    
for(let count = 0; count < listaTeclas.length; count++) {

    const tecla = listaTeclas[count];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio)
    };

    tecla.onkeydown = function(event){
        if (event.code === "Space" || event.code === "Enter"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
