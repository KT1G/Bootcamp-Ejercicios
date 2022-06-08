"use strict";




const generarContraseña = (min, max) => Math.floor(Math.random() * (max - min)) + min




function comprobarIgualdad(tries) {

    const contraseña2 = generarContraseña(0,100)

    for (let i = 0; i < tries; i++) {

        if (i === tries - 1) {
            alert("Ultimo intento!")
        }  

        let contraseña = prompt("Introduce un número del 0 al 100");

        console.log(contraseña2)


        if (contraseña == contraseña2) {
            alert("has ganado!")
            return

        } else if (contraseña > contraseña2) {
            alert("Tu contraseña es mayor")
        } else if (contraseña < contraseña2) {
            alert("Tu contraseña es menor");
        }




    }

}

comprobarIgualdad(5)

alert("Fin del juego")