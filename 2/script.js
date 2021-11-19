const nomi = ['Alberto', 'Luigi', 'Luca'];
const cognomi = ['De Luca', 'Escobar', 'Ratti'];
const listaInvitati = parseInt(prompt('Inserisci Numero Invitati'));



// console.log(nomi[randomNome]);

// console.log(cognomi[randomCognome]);

for ( i = 0; i < listaInvitati; i++ ){
    let randomCognome = Math.floor(Math.random() * (cognomi.length - 1 + 1));
    let randomNome = Math.floor(Math.random() * (nomi.length - 1 + 1) );
    let outputString = `${nomi[randomNome]} ${cognomi[randomCognome]}`;
    alert(outputString);
}




