/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const userNumber = document.getElementById("user-number");
const evenOrOdd = document.querySelector("select");
const buttonPlay = document.getElementById("play-button");

buttonPlay.addEventListener ("click", playGame);

function playGame() {
    const pcNumber = getRndNumber(1,5);
    addNumbers(userNumber,pcNumber);
    
}