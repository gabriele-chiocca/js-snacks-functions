/* Scrivi una funzione che accetti un'array di stringhe 
e una lettera e restituisca un array contenente solo le
parole che iniziano con quella lettera */

const names = ['Anna', 'Luca', 'Marco', 'Adele', 'Laura', 'Alessandra'];

const acceptedArray = [];

// Dichiara la funzione qui.

function verifyWordArray(array) {
  for (let i = 0; i < array.length; i++) {
    const arrayLetter = array[i].charAt(0);
    const arraycomplete = array[i];

    if (arrayLetter === 'A') {
      acceptedArray.push(arraycomplete);
    }
  }
}

// Invoca la funzione qui e stampa il risultato in console

const verifyingArray = verifyWordArray(names);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

console.log(acceptedArray);
