"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,

};

//  recorrer objeto people




const mayorDeEdad = (people) => {

  let arrayPeople = Object.entries(people)

  console.log(arrayPeople)

  for (const [nombre, edad] of arrayPeople) {

    if (edad >= 18) {

      console.log(` ${nombre} es mayor de edad`)
    }else console.log(` ${nombre} es menor de edad`);
  }

}

mayorDeEdad(people)