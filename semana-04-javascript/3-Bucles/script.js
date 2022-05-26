let hora = 7;


for (let i = 0; i < 24; i++) {

    if (i >= 8 && i <= 22) {

        hora++
        console.log(hora)

        if (hora >= 8 && hora <= 12) {
            
            for (let x = 0; x < hora ; x++) {
    
             console.log("cuco")
    
            }
        }
        else {
             for (let x = 0; x < hora-12; x++) {
               console.log("cuco");
             }
            
        }
    }
}