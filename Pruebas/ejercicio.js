"use strict"

const hora = prompt("Que hora del dia es?")

if (hora >= 6 && hora < 14) {

    alert("Buenos dias")
} else if (hora >= 14 && hora < 22) {
    alert("buenas tardes")
} else {
    alert("buenas noches")
}14