//Obtener elementos clase .clore

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){

    
    //Agregar evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');
        
        //Quitarle las clases de animacion
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        //Agregar clases animacion de salida fadeOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function(){
            location.href = "/";
        },600);

    });

});

