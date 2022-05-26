

const nombre = prompt("Como te llamas ?")

let edad = prompt("Cuantos años tienes")


const frase1 = `A ${nombre} le corresponde el descuento infantil`
const frase2 = `A ${nombre} le corresponde el descuento juvenil`;
const frase3 = `A ${nombre} le corresponde el descuento jubilados`;
const frase4 = `A ${nombre} No le corresponde el descuento infantil`;



if (edad < 12) {
    alert(frase1)
}
else if (edad >= 12 && edad < 30) {
    alert(frase2)
}
else if (edad > 60) {
    alert(frase3)
}
else {
    alert(frase4)
}