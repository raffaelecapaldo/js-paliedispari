/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const world = document.getElementById("world");
const checkButton = document.getElementById("check-world");
const result = document.getElementById("result");

world.addEventListener("keyup", checkValidity)
checkButton.addEventListener("click", checkPalindrome);

function checkValidity() { //Controlla che l'input non sia una stringa vuota o un numero
    if (!isNaN(world.value) || (!world.value)) {
        checkButton.classList.add("disabled");
    }

    else {
        checkButton.disabled = false;
        checkButton.classList.remove("disabled");

    }

}

function reverseString(str) {//Data una stringa la restituisce al contrario
    return str.split('') // Separa ogni lettera della parola
    .reverse()  //Inverti l'ordine delle lettere
    .join('');// Riuniscile assieme
}


function checkPalindrome() {//Controlla se è palindroma
    const reverseWorld = reverseString(world.value);//Prendi il valore dell'input e manipolalo con la funzione
    if (world.value === reverseWorld) {//Se il risultato coincide con la parola inserita = palindroma
        result.innerHTML = `<span class="text-success fs-5 fw-bold">La parola è palindroma!</span>`;
    }
    else {
        result.innerHTML = `<span class="text-danger fs-5 fw-bold">La parola non è palindroma!</span>`;
    }
}

