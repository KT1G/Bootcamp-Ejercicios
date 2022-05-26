const nombre = prompt("Hola! Me puedes decir tu nombre? Escibelo bien Sino me dare cuenta !!")
const nombreLenght = nombre.length
const nameUper = ((nombre.charAt(0).toUpperCase()) + (nombre.slice(-(nombreLenght - 1)))) // aqui pasamos el nombre en minusculas a mayusculas, primera parte del argumento sacamos la primera letra con el "charAT(0)" y la ponemos en mayuscula con "ToUpperCase" la segunda parte del argumento recuperamos el resto del nombre y se lo sumamos. Ejm ( braian  b raian => "B"= nombre.charAt(0).toUpperCase() + "raian = nombre.slice(-(nombreLenght - 1))"
const nombreReves = nombre.split("").reverse().join("")


if (nombre === "" || !isNaN(nombre)) {
    alert(" Eso no es un nombre xD ")  
}
else {
    if (nombre !== nameUper) {
        alert(`Acuerdate de poner tu nombre con mayusculas ${nameUper}!`)
    } else {
        alert("Bien escribiste tu nombre con mayusculas!")
    
    }

    const edad = prompt(`Y cuantos años tienes ${nameUper} ? Si eres menor de edad no podras seguir tenlo en cuenta!`);


    frase1 = ` ${nameUper} Me temo que eres menor de edad no puedes continuar...`;
    frase2 = `Bien parece que eres mayor de edad, Continuemos`;
    frase3 = `Wow ${edad} por los pelos, pero puedes continuar!`
    frase4 = `sabes que tu nombre tiene ${nombreLenght} letras y que se escribe al reves ${nombreReves} `;

    if (edad < 18 || isNaN(edad)) {
        alert(frase1)

    } else {
    
        if (edad >= 18 && edad <= 20) {
            alert(frase3)

        } else {
            alert(frase2)

        }
    
        alert(frase4)

    }
}