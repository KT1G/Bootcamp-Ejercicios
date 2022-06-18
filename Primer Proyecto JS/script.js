"use strict"

// 1 Crear un arreglo con las 16 "cartas"
// 2 desordenar el arr e imprimirlas en cada casilla

const nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8].sort(() => {
    return Math.random() - 0.5
})
console.log(nums)

let openCard = 0
let tries = 0
let card1, card2


function printNum(e) {
    const liSelected = e.target
    const numPrint = nums[liSelected.id];

    if (numPrint != card1) {
        if (!card1) {
            card1 = numPrint;
        }
    }
    card2 = numPrint

    
    
    
    if (openCard < 1 && (!liSelected.classList.contains("selected"))) {
        liSelected.classList.add("selected")
        liSelected.innerHTML = card1
        console.log(card1)
        openCard++
    }

    if (openCard < 2 && (!liSelected.classList.contains("selected"))) {
        liSelected.classList.add("selected")
        liSelected.innerHTML = card2
        console.log(card2)
        openCard++;
    }
    console.log(openCard)

}





const li = document.querySelectorAll("li");

li.forEach(el => {
    el.addEventListener("click", printNum)

});