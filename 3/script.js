/*
 * Crea un array di numeri interi e fai la somma di tutti gli elementi
 * che sono in posizione dispari
 */

const numbers = [11, 22, 33, 44, 55];
console.log(numbers);

let sommaDispari = 0;

for ( let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    // console.log(numbers[i]);

    if (i % 2 != 0){
        sommaDispari = sommaDispari + currentNumber;
    }
}

console.log(sommaDispari);