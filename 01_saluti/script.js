/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Maria';

// Dichiara la funzione qui.

// function greetingName(name) {
//   const result = 'Ciao ' + name + '!';
//   return result;
// }

const greetingName = (name) => 'Ciao ' + name + '!';

// Invoca la funzione qui e stampa il risultato in console

const outputMessage = greetingName(userName);

//Risultato atteso se si passa 'Mario': // ciao Mario

console.log(outputMessage);
console.log(greetingName('Artur'));
console.log(greetingName('Gabri'));
