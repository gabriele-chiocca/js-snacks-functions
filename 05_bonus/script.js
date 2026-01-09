/* Scrivi una funzione che accetti una stringa contenente un nome
e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.

/*
function helloHour(hello) {
  if (hour > 17) {
    console.log('Buonasera ' + hello);
  } else if (hour <= 13) {
    console.log('Buongiorno ' + hello);
  } else {
    console.log('Buon pomeriggio ' + hello);
  }
}
*/

const helloHour = (hello) => {
  if (hour > 17) {
    console.log('Buonasera ' + hello);
  } else if (hour <= 13) {
    console.log('Buongiorno ' + hello);
  } else {
    console.log('Buon pomeriggio ' + hello);
  }
};

// Invoca la funzione qui e stampa il risultato in console

const hour = '18';

const verifyHello = helloHour(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
