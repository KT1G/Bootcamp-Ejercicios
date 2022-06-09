"use strict";

const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]


const dni = prompt("Introduce tu Dni debe ser del siguiente formato 0000000-X")



function ComprobarDni(dni) {


  const dniSinLetra = dni.split("-")[0]
  const letraDni = dni.split("-")[1]
  const letra = letras.find((l, i) => i === dniSinLetra % 23).toLowerCase()




  if (dni.length !== 10) return console.error("Debes introducir un Dni con el siguiente formato 0000000-X")
  if (isNaN(letraDni)) return console.error("Debes introducir un Dni con letra al final") // 4 =="4"(True), "a" == tipo numero?"a" (false)
  if (dniSinLetra != dniSinLetraNum) return console.error("Debes introducir un Dni con 8 numeros") // 4 != "4" (false) , "a" != tipo numero?"a" (true)

  if (letra !== letraDni) return console.error("la letra no es correcta")




}
ComprobarDni(dni)