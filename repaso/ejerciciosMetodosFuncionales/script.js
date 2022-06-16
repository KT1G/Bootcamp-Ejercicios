"use strict"

/**
 * Utiliza los métodos funcionales de array para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 * 
 * ! A partir de aquí es útil usar find, pero se puede con filter
 * 
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

"use strict";

const persons = [
  {
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];

const cars = [
  {
    id: "LU9286V",
    brand: "Citroen",
    model: "Xsara",
  },
  {
    id: "GB2913U",
    brand: "Fiat",
    model: "Punto",
  },
  {
    id: "GB8722N",
    brand: "Opel",
    model: "Astra",
  },
  {
    id: "FT5386P",
    brand: "Ford",
    model: "Focus",
  },
  {
    id: "MD4578T",
    brand: "Opel",
    model: "Corsa",
  },
  {
    id: "LP6572I",
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: "FU8929P",
    brand: "Fiat",
    model: "Uno",
  },
];







// - 1. Obtén la suma total de todas las edades de las personas.

function sumaEdades(objArr) {

  const arrayAge = objArr
    .map(n => n.age)
    .reduce((a, b) => a + b)

  console.log(arrayAge);


}

(sumaEdades(persons))


// - 2. Obtén la suma total de todas las edades de las personas francesas.

function sumaEdadesFr(objArr) {
  
  const arrayAgeFr = objArr
    .filter(n => n.country === "FR")
    .map(n => n.age)
    .reduce((a, b) => a + b)
  
  console.log(arrayAgeFr)
}

sumaEdadesFr(persons)

// - 3. Obtén un array con el nombre de todas las mascotas.

function nombreMascotas(objArr) {
  
  const nombreMascotas = objArr
    .map(n => n.pet)
    .map(n => n.name)

  console.log(nombreMascotas)

}

nombreMascotas(persons)


  // - 4. Obtén un array con las personas que tengan gato.


/* function personasConGato(objArr) {
  
  const personasGato = objArr.filter(n => {

    const petArray = Object.entries(n.pet)[1]

    return (petArray[1] === "gato")

  }).map(n => n.name)

  console.log(personasGato)
}


personasConGato(persons)  */




function personasConGato(objArr) {
  const personasGato = objArr
    .filter(n => n.pet.type === "gato")
    .map(n => n.name)
      

  console.log(personasGato);
}

personasConGato(persons); 


// - 5. Obtén un array con los cars de los "ES".


const matriculasEspanoles = persons
  .filter(n => n.country === "ES")
  .map(p => cars
    .find(c => c.id === p.car))
 


console.log(matriculasEspanoles)



//- 6. Obtén un array con las personas que tengan un coche de la marca Ford.

 
 const cochesFordId = cars
  .filter(c => c.brand === "Ford")
  .map(c => persons.find(p => p.car === c.id ))


  

// 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 



const personas = persons.map(p => {
  return{
    ...p,
    car: cars.find(c => c.id === p.car) }
  }
)
  personas
 



