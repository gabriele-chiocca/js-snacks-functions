/* Scrivi una funzione che accetti un array di nomi
e restituisca nuovo un array con le iniziali di ogni
parola dell'array fornito */

const names = ['Anna', 'Luca', 'Marco', 'Adele', 'Giovanni', 'Alessandra'];

// Dichiara la funzione qui.

function initialWord(listName) {
  const newArrayInitialNames = [];
  for (let i = 0; i < listName.length; i++) {
    newArrayInitialNames.push(listName[i].charAt(0));
  }
  return newArrayInitialNames;
}

/*const initialWord = (listName) => {
  const newArrayInitialNames = [];

  for (let i = 0; i < listName.length; i++) {
    newArrayInitialNames.push(listName[i].charAt(0));
  }

  return newArrayInitialNames;
};*/

// Invoca la funzione qui e stampa il risultato in console

const verifyNames = initialWord(names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.log(verifyNames);
