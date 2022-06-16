"use strict";

// Aplica estilos a la tabla del index.html para que las asignaturas aprobadas (5 o más) se muestren de color verde y las suspensas en rojo.

//Puedes elegir si el color se aplica al texto o al fondo.

//Pista: todas las notas son etiquetas td y no hay ningún td que no sea una nota




function aprobados() {

    const notas = document.querySelectorAll("td");

    notas.forEach(nota => {
        if (nota.innerHTML >= 5) {
            nota.style.color = "green";
            nota.style.background = "rgb(240,240,240)";
        } else {
            nota.style.color = "red";
            nota.style.background = "rgb(220,220,220)";
        }
    })
}

aprobados()


// sumar notas matematicas
