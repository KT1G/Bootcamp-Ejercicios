let hora = 7;
const horasDia = 24


for (let i = 0; i < horasDia; i++) {

  if (i >= 8 && i <= 22) {

<<<<<<< HEAD
        hora++
        console.log(hora + ":00")

        if (hora >= 8 && hora <= 12) {
            
            for (let j = 0; j < hora ; j++) {
    
             console.log("cuco")
    
            }
        }
        else {
             for (let x = 0; x < hora-12; x++) {
               console.log("cuco");
             }
            
        }
=======
    hora++
    console.log(hora)

    if (hora >= 8 && hora <= 12) {
      for (let j = 0; j < hora; j++) {
        console.log("cucú")
      }
>>>>>>> 6eefb5393ef62cc592972d9d3b64500752fc84e4
    }
    
    else {
      for (let j = 0; j < hora - 12; j++) {
        console.log("cucú");
      }
    }
  }
}