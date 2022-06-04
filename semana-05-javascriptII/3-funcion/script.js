"use strict";



const generarContraseña = () => {

    const min = 0
    const max = 100

    return Math.floor(Math.random() * (max - min)) + min

}



function comprobarIgualdad() {

    const contraseña2 = generarContraseña()

    for (let i = 0; i < 3; i++) {

        if (i === 2) {
            alert("Ultimo intento!")
        }  

        let contraseña = prompt("Introduce un número del 0 al 100");

        console.log(contraseña2)


        if (contraseña == contraseña2) {
            alert("has ganado!")
            break;

        } else if (contraseña > contraseña2) {
            alert("Tu contraseña es mayor")
        } else if (contraseña < contraseña2) {
            alert("Tu contraseña es menor");
        }




    }

}

comprobarIgualdad()

alert("Fin del juego")