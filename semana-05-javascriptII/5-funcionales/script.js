"use strict";

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
    casa: "true",
    lasuma: "la suma1",
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
    casa: true,
    lasuma: "la suma2",
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
    casa: true,
    lasuma: "la suma3",
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
    casa: true,
    lasuma: "la suma4",
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
    casa: true,
    lasuma: "la suma5",
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
    casa: true,
    lasuma: "la suma6",
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
    lasuma: "la suma7",
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



const mejorPeorEquipo = (arr) => {

  const equiposSuma = {}

    arr.forEach(el => {

    const { equipo, puntos } = el;
    
    const sumaPuntos = puntos.reduce((a, b) => a + b) // suma los puntos de cada equipo
    
      equiposSuma[equipo] ??= 0
     
      equiposSuma[equipo] += sumaPuntos
    
    });
  
  
  
  const mejorPeorEquipo = Object
    .entries(equiposSuma) 
    .sort((a, b) => b[1] - a[1]) // ordenar de mayor a menor

  
  const mejorEquipo = mejorPeorEquipo.shift()
  const peorEquipo = mejorPeorEquipo.pop()
    
  console.log(`El mejor equipo es ${mejorEquipo[0]} con ${mejorEquipo[1]} puntos y el peor equipo es ${peorEquipo[0]} con ${peorEquipo[1]} puntos`)  
  };


console.log(mejorPeorEquipo(puntuaciones))  












/* const mejoresEquipos = {}


puntuaciones.forEach(equipos => {

  const { equipo, puntos} = equipos
  


  const sumaPuntos = puntos.reduce((a, b) => a + b)

  mejoresEquipos[equipo] ??= 0
  
  mejoresEquipos[equipo] += sumaPuntos 
  
  
 
 }
  
)

const ordenados = Object
  .entries(mejoresEquipos)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3)
  .map(equipo => equipo[0])



  console.log(ordenados)
 
 */
  

 






 const MejorPeor = (puntuaciones) => {

const todo = puntuaciones.map((arr) => {
  return {
    ...arr,
    puntos: arr.puntos.reduce((a, b) => a + b, 0),
  };
});
  
  console.log(todo)

const puntuacionesOrdenadas = todo.sort((a, b) => b.puntos - a.puntos);


  let mejorEquipo = puntuacionesOrdenadas.shift();
  console.log(mejorEquipo)
  
  
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

      console.log(MejorYPeor)
      let equiposPuntos = MejorYPeor.sort((a, b) => b.puntos - a.puntos);
      let mejorEquipo = (equiposPuntos.shift())
      let peorEquipo = (equiposPuntos.pop())

      return `El equipo con más puntos es ${mejorEquipo.equipo} con ${mejorEquipo.puntos} puntos. El equipo con menos puntos es ${peorEquipo.equipo} con ${peorEquipo.puntos} puntos.`
    }

    console.log(MejorPeor(puntuaciones)) */



 



    