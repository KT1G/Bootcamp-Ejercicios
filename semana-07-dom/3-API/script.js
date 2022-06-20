"use strict";



async function getData(url) {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

async function getUsers(num) {
    const data = await getData(`https://randomuser.me/api/?results= ${num}`)
    const users = data.results
    const usersInfo = users.map(({
        name,
        location,
        email,
        picture
    }) => {
        return {
            name: ` ${name.first} ${name.last}`,
            pais: location.country,
            email,
            foto: picture.large
        }
    })
    console.log("🚀 ~ file: script.js ~ line 27 ~ getUsers ~ users", users)

    return usersInfo


}



async function printUsers(num) {
    const users = await getUsers(num)
    const lista = document.querySelector("ul")

    users.forEach(({ foto, name, pais, email }) => {
        const avatar = document.createElement("li");
        avatar.innerHTML = `
        <img src="${foto}" alt="${name}">
        <p>${name}</p>
        <p>${pais}</p>
        <p>${email}</p>
    `;
        lista.append(avatar)
    });

}

printUsers(5)