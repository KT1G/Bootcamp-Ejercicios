const nombre = prompt("Hola! Me puedes decir tu nombre? Escibelo bien Sino me daré cuenta !!")
const nombreLenght = nombre.length
const nameUper = ((nombre.charAt(0).toUpperCase()) + (nombre.slice(-(nombreLenght - 1)))) // aqui pasamos el nombre en minusculas a mayusculas, primera parte del argumento sacamos la primera letra con el "charAT(0)" y la ponemos en mayuscula con "ToUpperCase" la segunda parte del argumento recuperamos el resto del nombre y se lo sumamos. Ejm ( braian  b raian => "B"= nombre.charAt(0).toUpperCase() + "raian = nombre.slice(-(nombreLenght - 1))"
const nombreReves = nameUper.split("").reverse().join("")

const frase1 = ` ${nameUper} Me temo que eres menor de edad no puedes continuar...`;
const frase2 = `Bien parece que eres mayor de edad, Continuemos`;
const frase3 = `Wow ${edad} por los pelos, pero puedes continuar!`
const frase4 = `sabes que tu nombre tiene ${nombreLenght} letras y que se escribe al reves ${nombreReves} `;



if (nombre === "" || !isNaN(nombre)) {
    alert(" Eso no es un nombre xD ")
} else {
    if (nombre !== nameUper) {
        alert(`Acuerdate de poner tu nombre con mayusculas ${nombre} ---> ${nameUper}!`)
    } else {
        alert("Bien escribiste tu nombre con mayusculas!")

    }

    const edad = prompt(`Y cuantos años tienes ${nameUper} ? Si eres menor de edad no podras seguir tenlo en cuenta!`);

    if (edad < 18 || isNaN(edad)) {

        alert(frase1)

    } else {

        if (edad >= 18 && edad <= 21) {
            alert(frase3)

        } else {
            alert(frase2)

        }

        alert(frase4)
        alert("increible verdad!")
        let nombre2 = prompt("bien, te pondre a prueba. Escribe tu nombre al reves para continuar : ")


        while (nombre2 !== nombreReves) {

            nombre2 = prompt("Acuerdate de la Mayuscula! : ")
        }
        alert("bien echo")
    }
}