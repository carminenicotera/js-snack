//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

//Creo un array vuoto
let numbers = [];

//creo un for per chiedere sei volte all'utente di inserire un numero, se è dispari utilizzo push per inserirlo 
for (let i = 0; i < 6; i++) {
  let num = Number(prompt('Inserisci un numero: '));
  if (num % 2 !== 0){
    numbers.push(num);
  }
}

//stampo l'array finale
console.log(numbers);
