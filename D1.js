/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const datatype1 = "string";
const datatype2 = "number";
const datatype3 = "boolean";
const datatype4 = "undefined";
const datatype5 = "null";

console.log(datatype1 + " = indica un valore composto da caratteri alfanumerici, come ad esempio del testo");
console.log(datatype2 + " = indica un valore di tipo numerico, può essere sia intero (ad esempio 1) oppure decimale (ad esempio 0.1)");
console.log(
  datatype3 +
    " = può assumere solo i valori true o false, serve a verificare la veridicità di una condizione (ad esempio se il valore di x è maggiore del valore di y)"
);
console.log(datatype4 + " = fa riferimento al valore 'vuoto' di una variabile di default quando non viene assegnato nessun valore");
console.log(datatype5 + " = si riferisce ad un'assenza di valore intenzionale, il valore 'null' è dichiarato dall'utente");

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "adriana";
console.log("Il mio nome è", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("La somma tra 12 e 20 è di", 12 + 20);

// oppure

let num1 = 12;
let num2 = 20;
console.log("La somma di num1 e num2 è", num1 + num2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// riassegno un nuovo valore a myName

myName = "gaglio";
console.log("Il mio cognome è", myName);

// dichiaro una variabile con const che non permetterà di riassegnare un valore
// const myAge = 34;
// console.log("La mia età è di", (myAge = 33));

// errore mostrato sulla console decommentando le righe sopra
// Uncaught TypeError: Assignment to constant variable.
//     at D1.js:72:39

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("La sottrazione di 4 - x ha il risultato di", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

// verifico se sono diversi
console.log("Il valore di name1 e name2 è diverso?", name1 !== name2);

// oppure verifico se sono uguali
console.log("Il valore di name1 e name2 è lo stesso?", name1 === name2);

// uguaglianza diventa true se applico il metodo .toLowerCase() a name2
console.log("Adesso il valore di name1 e name2 è lo stesso?", name1 === name2.toLowerCase());
