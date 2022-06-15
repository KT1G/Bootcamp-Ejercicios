

function aleatoryColor() {

    let min = 0
    let max = 255
    const num = Math.floor(Math.random() * (max - min + 1)) + min
    return num
}

aleatoryColor()



function createBox() { 
    const container = document.querySelector("section")
    const box = document.createElement("div")
   
    container.appendChild(box)

}

function addBox() { 
    const button = document.querySelector("button")
    button.addEventListener("click", () => {
        createBox()
        colorBox()
        
        
    })
}

window.addEventListener("load", addBox)



function colorBox() {
    const box = document.querySelectorAll("div")
        box.forEach(box => {
            box.style.background = `rgb(${aleatoryColor()}, ${aleatoryColor()}, ${aleatoryColor()})`
        })
    
}

setInterval(colorBox, 1000)



