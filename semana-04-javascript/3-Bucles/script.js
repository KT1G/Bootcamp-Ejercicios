let hora = 7;
const horasDia = 24


for (let i = 0; i < horasDia; i++) {

  if (i >= 8 && i <= 22) {

    hora++
    console.log(hora)

    if (hora >= 8 && hora <= 12) {
      for (let j = 0; j < hora; j++) {
        console.log("cucú")
      }
    }
    
    else {
      for (let j = 0; j < hora - 12; j++) {
        console.log("cucú");
      }
    }
  }
}