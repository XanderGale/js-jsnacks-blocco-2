const nomi = ['Alberto', 'Luigi', 'Luca'];
const cognomi = ['De Luca', 'Escobar', 'Ratti'];

const randomCognome = Math.floor(Math.random() * cognomi.length);
const randomNome = Math.floor(Math.random() * nomi.length);

// console.log(nomi[randomNome]);

// console.log(cognomi[randomCognome]);


let outputString = `${nomi[randomNome]} ${cognomi[randomCognome]}`;

alert(outputString);