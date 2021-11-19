const numbers = [11, 22, 33, 44, 55];
console.log(numbers);

let sommaDispari = 0;

for ( let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];

    if (currentNumber % 2 != 0){
        sommaDispari = sommaDispari + currentNumber;
    }
}

console.log(sommaDispari);