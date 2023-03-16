/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const userNumber = document.getElementById("user-number");
const evenOrOdd = document.querySelector("select");
const buttonPlay = document.getElementById("play-button");
const infoBox = document.getElementById("info-box");

buttonPlay.addEventListener("click", playGame);
userNumber.addEventListener("keyup", checkCanPlay);
evenOrOdd.addEventListener("change", checkCanPlay);

function playGame() {
    const pcNumber = getRndNumber(1, 5);//Genera numero random
    const sumNumbers = addNumbers(parseInt(userNumber.value), pcNumber);//Somma numero utente con numero generato
    const checkedOddEven = oddOrEven(sumNumbers);//Controlla se è pari o dispari
    //Scrivi le info in HTML
    infoBox.innerHTML = `<div id="result-box" class="w-100">
        <p class="toshow del1 pt-2 m-0">Il numero del computer è: <span class="fw-bold">${pcNumber}</span></p>
        <p class="toshow del2 m-0 pt-1">La somma è: <span class="fw-bold">${sumNumbers}</span></p>
        <p class="toshow del3 m-0 pt-1">Hai giocato: <span class="fw-bold text-success text-uppercase">${evenOrOdd.selectedOptions[0].text}</span></p>`
    if (checkedOddEven === evenOrOdd.value) {//Se utente ha scelto PARI e la somma è PARI vince, altrimenti perdi
        infoBox.innerHTML += `<p class="toshow text-success pt-3 fw-bold text-center fs-4">HAI VINTO!</p>`
    }
    else {
        console.log("Hai perso");
        infoBox.innerHTML += `<p class="toshow text-danger pt-3 fw-bold text-center fs-4">HAI PERSO!</p>`
    }
}

if (evenOrOdd.value == "odd") {//Come sopra ma con DISPARI
    if (checkedOddEven === evenOrOdd.value) {
        infoBox.innerHTML += `<p class="toshow text-success pt-3 fw-bold text-center fs-4">HAI VINTO!</p>`
    }
    else {
        infoBox.innerHTML += `<p class="toshow text-danger pt-3 fw-bold text-center fs-4">HAI PERSO!</p>`
    }
}


function checkCanPlay() {
    if (isNaN(userNumber.value) || parseInt(userNumber.value) < 1 || parseInt(userNumber.value) > 5 || evenOrOdd.value === "") {


        buttonPlay.classList.add("disabled");
    }

    else {
        buttonPlay.classList.remove("disabled");
    }
}