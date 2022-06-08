"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];





const eliminaDuplicados = (arr) => {

  const unicos = [];

  for (const elemento of arr) {

    let el = elemento;

    if (!unicos.includes(el)) {
      unicos.push(el);
    }
  }

  return unicos;
};


console.log(eliminaDuplicados(names));



// console.log(eliminaDuplicados(names));


// // OPCION 2


// const sacarUnicos = (arr) => {

//   return arr.filter((valor, indice) => { return arr.indexOf(valor) == indice})

// } 

// sacarUnicos(names)