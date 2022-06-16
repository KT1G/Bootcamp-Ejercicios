 "use strict";

 /* Escribe una función que permita obtener usuarios aleatorios en un array de objetos, guardando de cada uno de ellos su nombre completo (nombre y apellido), país, email y un enlace a su foto de perfil.
 El número de usuarios a obtener se deberá de poder introducir como un parámetro de dicha función.

 Sirvete de la API: https://randomuser.me/api/ */

 async function getData(ruta) {
   const response = await fetch(ruta);

   const data = await response.json();

   return data;
}
 
async function getUsers(num) {
    const data = await getData(`https://randomuser.me/api/?results=${num}`);
  
  return data.results;
  
}

console.log(getUsers(5))
  
async function getUsersInfo(num) {
    const users = await getUsers(num);
    const usersInfo = users.map(({name,location,picture,email}) => {
      return {
        name: `${name.first} ${name.last}`,
        country: location.country,
        email, 
        picture: picture.large
      };
    });
    return usersInfo;
}
  
getUsersInfo(5).then(users => {
  const container = document.querySelector("ul");
  users.forEach(({picture,name,country,email}) => {
    const box = document.createElement("li");
    box.innerHTML = `
      <img src="${picture}" alt="${name}">
      <p>${name}</p>
      <p>${country}</p>
      <p>${email}</p>
    `;
    container.appendChild(box);
  })
})
