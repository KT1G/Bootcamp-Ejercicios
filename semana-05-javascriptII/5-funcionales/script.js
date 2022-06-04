"use strict";

// puntuaciones
const puntuaciones = [{
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];









const MejorPeor = (puntuaciones) => {

const todo = puntuaciones.map((arr) => {
  return {
    ...arr,
    puntos: arr.puntos.reduce((a, b) => a + b, 0),
  };
});

const puntuacionesOrdenadas = todo.sort((a, b) => b.puntos - a.puntos);


  let mejorEquipo = puntuacionesOrdenadas.shift();
  
  
  let peorEquipo = puntuacionesOrdenadas.pop();

  return `El mejor equipo ${mejorEquipo.equipo} con ${mejorEquipo.puntos} puntos. y el peor equipo ${peorEquipo.equipo} con ${peorEquipo.puntos} puntos.`;

}

console.log(MejorPeor(puntuaciones))












  /*   function MejorPeor(arr) {

      let MejorYPeor = []


      for (const key of arr) {

        let equipo = key.equipo
        let puntos = key.puntos
        let suma = puntos.reduce((a, b) => a + b, )


        MejorYPeor.push({
          equipo: equipo,
          puntos: suma,
        });
      }
      let equiposPuntos = MejorYPeor.sort((a, b) => b.puntos - a.puntos);
      let mejorEquipo = (equiposPuntos.shift())
      let peorEquipo = (equiposPuntos.pop())

      return `El equipo con más puntos es ${mejorEquipo.equipo} con ${mejorEquipo.puntos} puntos. El equipo con menos puntos es ${peorEquipo.equipo} con ${peorEquipo.puntos} puntos.`
    }

    console.log(MejorPeor(puntuaciones))



 */



    // 1. Crea una función que reciba un array de objetos puntuaciones y devuelva un array con los equipos que han obtenido más puntos.
    // La función debe devolver el nombre del equipo y el número de puntos.