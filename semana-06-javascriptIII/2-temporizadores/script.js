"use strict";


// Crea un programa que imprima cada 5 segundos el tiempo que ha pasado desde la ejecución del mismo. Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución.

// A continuación, crea una función que sea capaz de parar el programa. Dicha función recibirá dos parámetros: un número y una letra (D, H, M o S), que determinarán el tiempo que tardará en ejecutarse. Para que quede más claro, mostrará un aviso de que el programa se ha parado.

// ** - Extra: ** Haz que el texto se ajuste a singular y plural (ej: 1 minuto / 2 minutos)

// ** Ejemplo output: ** "Han pasado 0 días, 0 horas, 1 minuto y 20 segundos desde la ejecución".

// Nota: Por las propias limitaciones de JavaScript no hace falta que sea totalmnete preciso, puede haber variaciones de 1s.

let segundos = 0;

const time = setInterval(() => {


    segundos += 5;
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    let min = ""
    let seg = ""
    let hor = ""
    let dia = ""

    if (minutos === 1) {
        min = " minuto"
    } else {
        min = " minutos"
    }
    if (segundos === 1) {
        seg = " segundo"
    } else {
        seg = " segundos"
    }
    if (horas === 1) {
        hor = " hora"
    } else {
        hor = " horas"
    }
    if (dias === 1) {
        dia = " dia"
    } else {
        dia = " dias"
    }




    console.log(`han pasado ${dias} ${dia}, ${horas % 24} ${hor}, ${minutos % 60} ${min} y ${segundos % 60}${seg} desde la ejecucion`);


}, 5000);



function pararTiempo(num, letra) {
    let tiempo
    let segundos = 1000

    if (letra === "S") {
        tiempo = segundos * num
    }

    if (letra === "M") {
        tiempo = segundos * num * 60
    }
    if (letra === "H") {
        tiempo = segundos * num * 60 * 60
    }
    if (letra === "D") {
        tiempo = segundos * num * 60 * 60 * 24
    }

    setTimeout(() => {
        clearInterval(time)

    }, tiempo);

}


pararTiempo(2, "M")