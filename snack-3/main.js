//Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

//creo una variabile per aggiornare di volta in volta la somma
let somma = 0;

//creo un ciclo for per chiedere all'utente di inserire 10 numeri e aggiorno di volta in volta la variabile somma
for (let i = 1; i <= 10; i++) {
  let num = Number(prompt(`Inserisci il numero ${i}: `))
  somma += num;
}
//stampo il risultato finale
console.log('La somma dei numeri inseriti è: ', somma);