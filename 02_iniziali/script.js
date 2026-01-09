/* Scrivi una funzione che accetti un array di nomi
e restituisca nuovo un array con le iniziali di ogni
parola dell'array fornito */

const names = ['Anna', 'Luca', 'Marco', 'Adele', 'Giovanni', 'Alessandra'];

const newArrayInitialNames = [];

// Dichiara la funzione qui.

/* function initialWord(listName) {
  for (let i = 0; i < listName.length; i++) {
    newArrayInitialNames.push(listName[i].charAt(0));
  }
}
*/

const initialWord = (listName) => {
  for (let i = 0; i < listName.length; i++) {
    newArrayInitialNames.push(listName[i].charAt(0));
  }
};

// Invoca la funzione qui e stampa il risultato in console

const verifyNames = initialWord(names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.log(newArrayInitialNames);
