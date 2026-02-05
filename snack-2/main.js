//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

//inserisci due parole
const firstWorld = prompt('Inserisci la prima parola: ');
const secondWorld = prompt('Inserisci la seconda parola: ');

//stampa le due parole
console.log(firstWorld, secondWorld);

//inserisco la lunghezza in due variabili
const firstLenght = firstWorld.length;
const secondLenght = secondWorld.length;

//stampo la più corta e poi quella più lunga
if (firstLenght > secondLenght) {
  console.log(secondWorld, firstWorld);
} else if (secondLenght > firstLenght) {
  console.log(firstWorld, secondWorld);
} else {
  console.log('Le parole inserite hanno la stessa lunghezza!');
}