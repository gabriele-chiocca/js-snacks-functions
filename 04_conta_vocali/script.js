/* Scrivi una funzione che accetti una stringa e
restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

function verifyVocals(string) {
  let countVoc = 0;
  for (let i = 0; i < string.length; i++) {
    const checkVocals = string[i];

    if (vocali.includes(checkVocals)) {
      countVoc++;
      insertVocals.push(checkVocals);
    }
  }
  console.log(`${countVoc} (${insertVocals.join()})`);
}

// Invoca la funzione qui e stampa il risultato in console

const vocali = ['a', 'e', 'i', 'o', 'u'];

const insertVocals = [];

verifyVocals(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
