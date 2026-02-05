// snack 1 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

//Inserisci due numeri
const firstNumber = prompt('Inserisci il primo numero: ');
const secondNumber = prompt('Inserisci il secondo numero: ');

//stampo i numeri
console.log(`${firstNumber} ${secondNumber}`);

//stampo il maggiore
if (firstNumber > secondNumber) {
  console.log('Il maggiore è: ', firstNumber);
} else if (secondNumber > firstNumber) {
  console.log('Il maggiore è: ', secondNumber);
} else {
  console.log('I numeri inseriti sono uguali!');
}