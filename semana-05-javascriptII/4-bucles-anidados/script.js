"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];


// all combinations no repetitions

// ¿Serías capáz de solucionar eso, sin añadir ninguna línea de código? ¡Es más fácil de lo que puede parecer!


// ¿Qué pasa si queremos que se muestre todas las combinaciones posibles, pero que no se repitan?


function combinacionesRepetir(arr) {

  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

      console.log(arr[i] + " " + arr[j])
      
    }
  }
}



combinaciones(catalogo)