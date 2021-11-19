/*
 * Crea un array vuoto e chiedi all’utente un numero
 * da inserire nell’array. Continua a chiedere i numeri
 * all’utente e a inserirli nell’array fino a quando
 * a somma degli elementi è minore di 50.
 */
let somma = 0;
let inputNumbers = []

do {
    let inputNumber = parseInt(prompt('Inserisci un numero:'));
    inputNumbers.push(inputNumber);

    somma = somma + inputNumber;
} while ( somma < 50 )

alert(`
La somma dei numeri da te inseriti è: ${somma}.

I numeri da te inseriti sono stati: ${inputNumbers}.
`);